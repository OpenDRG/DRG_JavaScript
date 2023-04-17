import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JB2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["40.5000","40.5100","40.5101","85.2100x023","85.2200","85.2300x001","85.2301","85.2400x006","85.3400x002","85.3401","85.3600x001","85.3601","85.4100x001","85.4200x001","85.4200x003","85.4300x003","85.4301","85.4302","85.4303","85.4401","85.4402","85.4403","85.4500","85.4500x001","85.4500x003","85.4501","85.4600","85.4700","85.4800"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JB2入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JB29_group(record)){
            return 'JB29';
        }

        return 'JB2';
    }else{
        return '';
    }
}
  