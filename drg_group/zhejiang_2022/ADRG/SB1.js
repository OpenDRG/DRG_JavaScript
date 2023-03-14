import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCS_DRG} from '../DRG/MDCS_DRG.js';

export default function SB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合SB1入组条件，匹配规则：');
        let drg=new MDCS_DRG();
        
        if (drg.SB19_group(record)){
            return 'SB19';
        }

        return 'SB1';
    }else{
        return '';
    }
}
  