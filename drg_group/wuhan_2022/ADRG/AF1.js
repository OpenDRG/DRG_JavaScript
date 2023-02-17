import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AF1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["33.5000","33.5100","33.5200","33.6x00"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合AF1入组条件，匹配规则：主手术匹配');
        let drg=new MDCA_DRG();
                
        if (drg.AF19_group(record)){
            return 'AF19';
        }
        return 'AF1';
    }else{
        return '';
    }
}
  