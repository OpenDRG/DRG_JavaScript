import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HC3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["51.2100","51.2200","51.2200x004","51.2201","51.2300","51.2301","51.2400","51.2401"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合HC3入组条件，匹配规则：主手术匹配');
        let drg=new MDCH_DRG();
                
        if (drg.HC31_group(record)){
            return 'HC31';
        }        if (drg.HC3B_group(record)){
            return 'HC3B';
        }
        return 'HC3';
    }else{
        return '';
    }
}
  