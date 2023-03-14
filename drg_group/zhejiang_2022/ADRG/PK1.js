import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["96.0400","96.7101","96.7201"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss) && record.ageDay<=28){
        putMessage('符合PK1入组条件，匹配规则：某一手术匹配、新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PK19_group(record)){
            return 'PK19';
        }

        return 'PK1';
    }else{
        return '';
    }
}
  