import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PT1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.weight>0 && record.weight>=1500 && record.weight<2500 && record.ageDay<=28){
        putMessage('符合PT1入组条件，匹配规则：体重1500至2500克、新生儿');
        let drg=new MDCP_DRG();
                
        if (drg.PT19_group(record)){
            return 'PT19';
        }
        return 'PT1';
    }else{
        return '';
    }
}
  