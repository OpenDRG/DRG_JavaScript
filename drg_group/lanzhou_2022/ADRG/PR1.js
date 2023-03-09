import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PR1_group(record){
    let adrg_zd=["P22.000","P22.000x001","P22.100x003","P22.101","P22.801","P22.900"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ageDay<=28){
        putMessage('符合PR1入组条件，匹配规则：主诊断匹配、新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PR11_group(record)){
            return 'PR11';
        }

        if (drg.PR1B_group(record)){
            return 'PR14';
        }

        return 'PR1';
    }else{
        return '';
    }
}
  