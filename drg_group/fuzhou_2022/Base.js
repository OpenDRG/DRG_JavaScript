import ZD_INFO from "./ICD/ZD_INFO.json" assert { type: 'json' };
import ZD_MAP from "./ICD/ZD_MAP.json" assert { type: 'json' };
import SS_INFO from "./ICD/SS_INFO.json" assert { type: 'json' };
import SS_MAP from "./ICD/SS_MAP.json" assert { type: 'json' };
import DRG from "./DATA/DRG.json" assert { type: 'json' };
import SS_VALID from "./DATA/SS_VALID.json" assert { type: 'json' };
import CC from "./DATA/CC.json" assert { type: 'json' };
import MCC from "./DATA/MCC.json" assert { type: 'json' };
import CCE from "./DATA/CCE.json" assert { type: 'json' };

var DrgGroupStatus = Object.freeze({
    CHECK_FAILED:'信息校验不通过',
    // CHECK_SUCCESS:'信息校验通过',
    SUCCESS:'分组成功',
    FAIL:'无法入组',
    ZD_NOT_MAPPING:'诊断不能转换为分组器支持的编码',
    SS_NOT_MAPPING:'手术操作不能转换为分组器支持的编码',
    ZD_NOT_VALID:'诊断不是有效的ICD编码',
    SS_NOT_VALID:'手术操作不是有效的ICD编码',
    QY:'歧义病案',
    ZD_NOT_MATCH_GENDER:'主诊断与病人性别不相符',
    MAIN_ZD_NOT_MDC:'主诊断不在所有MDC的主诊表内',
    SS_ERROR:'手术选择错误',
    NEWBORN_ERROR:'新生儿诊断或手术错误'
});
var MedicalRecord={
    createRecord: function(record_str){
        let record = {};
        let arr=record_str.replaceCsv().split(",")
        record.Index = arr[0];
        record.gender = arr[1];
        record.age = arr[2];
        record.ageDay = arr[3];
        record.weight = arr[4];
        record.dept = arr[5];
        record.inHospitalTime=arr[6];
        record.leavingType=arr[7];
        record.zdList=arr[8].split("|");
        record.ssList=arr[9].split("|");
        record.remark=arr.length>10?arr[10]:"";        
        return record;
    },
    toString: function(record){
        let zdList_str=record.zdList?"\""+record.zdList.join(",", )+"\"":"";
        let ssList_str=record.ssList?"\""+record.ssList.join(",", )+"\"":"";
        return "MedicalRecord [Index=" + record.Index + ", gender=" + record.gender + ", age=" + record.age +
            ", ageDay=" + record.ageDay + ", weight=" + record.weight + ", dept=" + record.dept +
            ", inHospitalTime=" + record.inHospitalTime + ", leavingType=" + record.leavingType +
            ", zdList=" + zdList_str + ", ssList=" + ssList_str + "]";
    }
};
var GroupResult={
    createResultCheck: function(status,messages,record){
        let result = {};
        result.Index = record.Index;
        result.status = status;
        result.messages = messages;
        result.mdc = "0000";
        result.adrg = "00";
        result.drg = "0000";
        result.record=record;
        return result;
    },
    createResult: function(record,drgCode){
        let result = {};
        result.Index=record.Index;
        result.drg=drgCode;
        if (drgCode=="0000"){
            result.status=DrgGroupStatus.FAIL;
            result.mdc="0000";
            result.adrg="00";
        }else if (drgCode.substring(1, 3)=="00"){
            result.status=DrgGroupStatus.FAIL;
            result.mdc="MDC"+drgCode.substring(0,1);
            result.adrg="00";
        }else if (drgCode.substring(1, 3)=="QY"){
            result.status=DrgGroupStatus.QY;
            result.mdc="MDC"+drgCode.substring(0,1);
            result.adrg="QY";
        }else{
            result.status=DrgGroupStatus.SUCCESS;
            result.mdc="MDC"+drgCode.substring(0,1);
            result.adrg=drgCode.substring(0,3);
        }
        result.record=record;
        return result;
    },
    toString: function(result){
        let messages_str=result.messages?"\""+result.messages.join("|")+"\"":"";
        return MedicalRecord.toString(result.record) + "\nGroupResult [Index=" + result.Index + ", status=" + result.status + ", messages=" + 
            messages_str +", mdc="+ result.mdc + ", adrg=" + result.adrg + ", drg=" + result.drg + "]";
    }
};
var groupMessages=[];
function putMessage(message){
    groupMessages.push(message);
};
function returnMessages(){
    let messages=[...groupMessages];
    groupMessages=[];
    return messages;
};
function intersect(arr1,arr2){
    for(let x of arr1){
        if(arr2.includes(x)){
            return true;
        }
    }
    return false;
};
var mcc_result;
var cc_result;
var cce_result;
function has_mcc(mainZd,otherZd){
    if (typeof(mcc_result)!='undefined'){
        return mcc_result;
    }
    if (typeof(cce_result)!='undefined'){
        var cce=cce_result;
    }else{
        var cce="";
        if (CCE.hasOwnProperty(mainZd)){
            cce=CCE[mainZd];
            putMessage("主诊断{0}排除表{1}".format(mainZd,cce));
            cce_result=cce;
        }
    }
    for (let zd of otherZd){
        if (MCC.hasOwnProperty(zd)){
            let mcc=MCC[zd];
            putMessage("诊断{0}属于MCC，排除表{1}".format(zd,mcc));
            if (cce && cce==mcc){
                continue;
            }else{
                mcc_result=true
                return true;
            }
        }
    }
    return false;
};
function has_cc(mainZd,otherZd){
    if (typeof(cc_result)!='undefined'){
        return cc_result;
    }
    if (typeof(cce_result)!='undefined'){
        var cce=cce_result;
    }else{
        var cce="";
        if (CCE.hasOwnProperty(mainZd)){
            cce=CCE[mainZd];
            putMessage("主诊断{0}排除表{1}".format(mainZd,cce));
            cce_result=cce;
        }
    }
    for (let zd of otherZd){
        if (CC.hasOwnProperty(zd)){
            let cc=CC[zd];
            putMessage("诊断{0}属于CC，排除表{1}".format(zd,cc));
            if (cce && cce==cc){
                continue;
            }else{
                cc_result=true
                return true;
            }
        }
    }
    return false;
};
String.prototype.format = function () {
    if (arguments.length === 0) return this;
    let result = this;
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
        for (let key in arguments[0]) {
            if (arguments[0][key] === undefined) continue;
            result = result.replace(new RegExp("({" + key + "})", "g"), arguments[0][key]);
        }
    } else {
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] === undefined) continue;
            result = result.replace(new RegExp("({[" + i + "]})", "g"), arguments[i]);
        }
    }
    return result.toString();
};
String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
String.prototype.replaceCsv = function() {
    let target = this;
    let re=new RegExp("\"(.*?)\"","g")
    let match;
    while (match=re.exec(this)){
        target=target.replace(match[0],match[1].replaceAll(",","|"));
    }
    return target;
};

export {MedicalRecord,GroupResult,putMessage,returnMessages,intersect,has_mcc,has_cc,DrgGroupStatus,ZD_INFO,SS_INFO,ZD_MAP,SS_MAP,SS_VALID,DRG};