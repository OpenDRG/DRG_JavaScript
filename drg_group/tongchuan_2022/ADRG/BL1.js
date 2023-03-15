import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BL1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["99.1005","99.1006","99.1008","99.1009"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合BL1入组条件，匹配规则：主手术匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BL19_group(record)){
            return 'BL19';
        }

        return 'BL1';
    }else{
        return '';
    }
}
  