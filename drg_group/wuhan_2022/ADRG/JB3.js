import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JB3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["40.1900x002","40.2200","85.0x00x002","85.0x00x003","85.0x01","85.0x02","85.1100x001","85.1100x003","85.1200x001","85.2400x004","85.2400x005","85.2401","85.2402","85.2500","85.8100","85.9100","85.9900"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JB3入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JB31_group(record)){
            return 'JB31';
        }

        if (drg.JB33_group(record)){
            return 'JB33';
        }

        if (drg.JB35_group(record)){
            return 'JB35';
        }

        return 'JB3';
    }else{
        return '';
    }
}
  