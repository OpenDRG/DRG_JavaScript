import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.6600x004","00.6601","17.5500x002","17.5500x003","17.5501","36.0400","36.1000x001","36.1000x002","36.1100","36.1200","36.1300","36.1400","36.1500","36.1600","36.1700x001","36.1900x001","36.2x00"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FC1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FC19_group(record)){
            return 'FC19';
        }

        return 'FC1';
    }else{
        return '';
    }
}
  