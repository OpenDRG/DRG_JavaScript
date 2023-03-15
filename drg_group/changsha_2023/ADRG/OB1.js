import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["74.0x00","74.0x00x001","74.0x00x002","74.1x01","74.1x02","74.2x00","74.4x01","74.9900"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合OB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OB11_group(record)){
            return 'OB11';
        }

        if (drg.OB15_group(record)){
            return 'OB15';
        }

        return 'OB1';
    }else{
        return '';
    }
}
  