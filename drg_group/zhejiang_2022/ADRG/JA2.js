import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JA2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["40.2200","40.5000","40.5100","40.5101","85.4300x003","85.4301","85.4302","85.4303","85.4401","85.4402","85.4403","85.4500x001","85.4500x003","85.4501","85.4600","85.4700","85.4800"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JA2入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JA21_group(record)){
            return 'JA21';
        }

        if (drg.JA23_group(record)){
            return 'JA23';
        }

        if (drg.JA25_group(record)){
            return 'JA25';
        }

        return 'JA2';
    }else{
        return '';
    }
}
  