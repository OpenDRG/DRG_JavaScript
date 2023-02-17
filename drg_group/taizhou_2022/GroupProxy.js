import {MedicalRecord,GroupResult,DrgGroupStatus,ZD_INFO,SS_INFO,ZD_MAP,SS_MAP} from './Base.js';
//import {MedicalRecord,GroupResult,DrgGroupStatus} from './Base.js';
//import Grouper_taizhou_2022 from './Grouper_taizhou_2022.js';

var GroupProxy_taizhou_2022=class{
    checkMessages=[];
    constructor(TRANS_CODE=false){
        this.TRANS_CODE=TRANS_CODE;
    }
    group_record_str(record_str){
        return this.group_record(MedicalRecord.createRecord(record_str));
    }
    async group_record(record){
        let status;
        if (this.TRANS_CODE){
            status=this.trans(record);
            if (status){
                return GroupResult.createResultCheck(status,this.checkMessages,record);
            }
        }
        status=this.check(record);
        if (status){
            return GroupResult.createResultCheck(status,this.checkMessages,record);
        }
        const {default:group}=await import('./Grouper_taizhou_2022.js');
        let result=group(record);
        //let result=Grouper_taizhou_2022(record);
        result.messages=this.returnMessages().concat(result.messages);
        return result;
    }
    putMessage(message){
        this.checkMessages.push(message);
    }
    returnMessages(){
        let messages=[...this.checkMessages];
        this.checkMessages=[];
        return messages;
    }
    trans(record){
        for (let x of record.zdList){
            let zd=x;
            if (x in ZD_MAP){
                zd=ZD_MAP[x];
                if (x!=zd){
                    record.zdList[record.zdList.indexOf(x)]=zd;
                    this.putMessage("诊断{0}转换为{1} {2}".format(x,zd,zd in ZD_INFO?ZD_INFO[zd]:""));
                }
            }else{
                this.putMessage("诊断{0}无法转换为分组器支持的编码".format(zd));
                return DrgGroupStatus.ZD_NOT_MAPPING;
            }
        }
        for (let x of record.ssList){
            let ss=x;
            if (x in SS_MAP){
                ss=SS_MAP[x];
                if (x!=ss){
                    record.ssList[record.ssList.indexOf(x)]=ss;
                    this.putMessage("手术操作{0}转换为{1} {2}".format(x,ss,ss in SS_INFO?SS_INFO[ss]:""));
                }
            }else{
                this.putMessage("手术操作{0}无法转换为分组器支持的编码".format(ss));
                return DrgGroupStatus.SS_NOT_MAPPING;
            }
        }
    }
    check(record){
        try{
            if (!record.gender){
                this.putMessage("病人性别为空");
                return DrgGroupStatus.CHECK_FAILED;
            }
            if (record.age==0 && record.ageDay<=28 && record.weight==0){
                this.putMessage("新生儿的出生体重必须有值");
                return DrgGroupStatus.CHECK_FAILED;
            }
            if (record.zdList.length==0){
                this.putMessage("诊断信息为空");
                return DrgGroupStatus.CHECK_FAILED;
            }
            if (String(record.gender).indexOf(".")>=0){
                record.gender=record.gender.substring(0,record.gender.indexOf("."));
            }else if (record.gender=="男"){
                record.gender="1";
            }else if (record.gender=="女"){
                record.gender="2";
            }
            if (String(record.dept).indexOf(".")>=0){
                record.dept=record.dept.substring(0,record.dept.indexOf("."));
            }
            if (String(record.leavingType).indexOf(".")>=0){
                record.leavingType=record.leavingType.substring(0,record.leavingType.indexOf("."));
            }
        }catch (error) {
            console.log("{0}:{1}".format(error.name,error.message));
            this.putMessage("病案信息解析出错");
            return DrgGroupStatus.CHECK_FAILED;
        }
        for (let x of record.zdList){
            if (x in ZD_INFO){
                this.putMessage("{0} {1}".format(x,ZD_INFO[x]));
            }else if (x){
                this.putMessage("{0} 未知名称".format(x));
            }
        }
        for (let x of record.ssList){
            if (x in SS_INFO){
                this.putMessage("{0} {1}".format(x,SS_INFO[x]));
            }else if (x){
                this.putMessage("{0} 未知名称".format(x));
            }
        }
    }
}

export {GroupProxy_taizhou_2022 as GroupProxy};