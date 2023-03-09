import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ageDay<=28){
        putMessage('符合PB1入组条件，匹配规则：新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PB19_group(record)){
            return 'PB19';
        }

        return 'PB1';
    }else{
        return '';
    }
}
  