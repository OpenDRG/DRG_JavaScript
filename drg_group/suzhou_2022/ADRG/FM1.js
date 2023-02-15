import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FM1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["36.0601","36.0602","36.0700x004","36.0701"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FM1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FM19_group(record)){
            return 'FM19';
        }
        return 'FM1';
    }else{
        return '';
    }
}
  