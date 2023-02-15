import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ageDay<=28){
        putMessage('符合PC1入组条件，匹配规则：新生儿');
        let drg=new MDCP_DRG();
                
        if (drg.PC19_group(record)){
            return 'PC19';
        }
        return 'PC1';
    }else{
        return '';
    }
}
  