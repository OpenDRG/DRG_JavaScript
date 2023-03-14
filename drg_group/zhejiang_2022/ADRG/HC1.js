import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["51.2100","51.2200","51.2200x004","51.2201","51.2300","51.2301","51.2400"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合HC1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HC11_group(record)){
            return 'HC11';
        }

        if (drg.HC13_group(record)){
            return 'HC13';
        }

        return 'HC1';
    }else{
        return '';
    }
}
  