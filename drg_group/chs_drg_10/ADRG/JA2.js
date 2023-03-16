import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JA2_group(record){
    let adrg_zd=["C44.501","C44.502","C50.000","C50.000x001","C50.001","C50.100","C50.200","C50.300","C50.400","C50.500","C50.600","C50.800","C50.800x005","C50.801","C50.802","C50.803","C50.804","C50.900","C50.900x005","C50.901","C50.902","C79.200x007","C79.806","D03.501","D04.501","D05.000","D05.100","D05.900"];
    let adrg_zd1=[];
    let adrg_ss=["40.2200","40.5000","40.5100","40.5101","85.4300x003","85.4300x004","85.4301","85.4302","85.4303","85.4401","85.4402","85.4403","85.4500","85.4500x001","85.4500x003","85.4501","85.4600","85.4700","85.4800"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JA2入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JA29_group(record)){
            return 'JA29';
        }

        return 'JA2';
    }else{
        return '';
    }
}
  