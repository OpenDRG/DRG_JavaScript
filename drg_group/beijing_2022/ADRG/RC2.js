import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RC2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["92.2000","92.2001","92.2100","92.2700x002","92.2700x004","92.2701","92.2702","92.2703","92.2704","92.2705","92.2706","92.2800","92.2801","92.2900x002","92.2900x003"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RC2入组条件，匹配规则：主手术匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RC22_group(record)){
            return 'RC22';
        }        if (drg.RC24_group(record)){
            return 'RC24';
        }        if (drg.RC26_group(record)){
            return 'RC26';
        }        if (drg.RC28_group(record)){
            return 'RC28';
        }
        return 'RC2';
    }else{
        return '';
    }
}
  