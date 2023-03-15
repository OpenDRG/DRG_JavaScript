import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["55.0102","55.0111","55.0300x002","55.0300x003","55.0300x007","55.0301","55.0302","55.0400x005","55.0400x006","55.0400x007","55.0400x008","55.0400x009","55.0400x010","55.0401","55.0402","55.0403","55.0404","55.0405","55.1101","55.1102","55.1103","55.1104","55.1105","55.1109"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCL_DRG();
        
        if (drg.LB11_group(record)){
            return 'LB11';
        }

        if (drg.LB15_group(record)){
            return 'LB15';
        }

        return 'LB1';
    }else{
        return '';
    }
}
  