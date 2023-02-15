import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HL2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["51.1000","51.1100","51.1101","51.1104","51.1105","51.1500","52.1302","52.1303"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合HL2入组条件，匹配规则：主手术匹配');
        let drg=new MDCH_DRG();
                
        if (drg.HL29_group(record)){
            return 'HL29';
        }
        return 'HL2';
    }else{
        return '';
    }
}
  