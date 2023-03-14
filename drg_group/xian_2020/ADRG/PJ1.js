import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ageDay<=28){
        putMessage('符合PJ1入组条件，匹配规则：新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PJ19_group(record)){
            return 'PJ19';
        }

        return 'PJ1';
    }else{
        return '';
    }
}
  