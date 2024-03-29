import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JB2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["85.2100x003","85.2100x019","85.2100x020","85.2100x021","85.2100x022","85.2101","85.2200","85.2300x001","85.2301","85.2400x004","85.2400x005","85.2401","85.2402","85.3400x002","85.3401","85.3600x001","85.3601","85.4100x001","85.4200x001","85.4200x003","85.4300x003"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JB2入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JB21_group(record)){
            return 'JB21';
        }

        if (drg.JB23_group(record)){
            return 'JB23';
        }

        if (drg.JB25_group(record)){
            return 'JB25';
        }

        return 'JB2';
    }else{
        return '';
    }
}
  