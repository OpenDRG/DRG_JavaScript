import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DB2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["20.9501","20.9502","20.9601","20.9602","20.9701","20.9702","20.9801","20.9802"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DB2入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
        
        return 'DB2';
    }else{
        return '';
    }
}
  