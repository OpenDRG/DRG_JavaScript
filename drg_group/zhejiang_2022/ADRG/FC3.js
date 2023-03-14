import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FC3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["36.1000x001","36.1000x002","36.1100","36.1200","36.1300","36.1400","36.1500","36.1600","36.1700x001","36.1900x001","36.2x00"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FC3入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FC31_group(record)){
            return 'FC31';
        }

        if (drg.FC33_group(record)){
            return 'FC33';
        }

        if (drg.FC35_group(record)){
            return 'FC35';
        }

        return 'FC3';
    }else{
        return '';
    }
}
  