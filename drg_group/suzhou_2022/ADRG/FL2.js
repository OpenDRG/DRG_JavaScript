import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FL2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["37.3401","37.3402","37.3403","37.3404","37.3405","37.3406"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FL2入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FL29_group(record)){
            return 'FL29';
        }
        return 'FL2';
    }else{
        return '';
    }
}
  