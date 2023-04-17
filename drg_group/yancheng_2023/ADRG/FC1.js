import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["36.0300x002","36.0300x003","36.0300x006","36.0301","36.0302","36.0303","36.1000x001","36.1000x002","36.1100","36.1200","36.1300","36.1400","36.1500","36.1600","36.1700x001","36.1900x001","36.1900x002","36.2x00","36.3200","36.3300","36.3900x001","36.3901","36.9100","36.9900x002","36.9900x006","36.9900x007","36.9900x008","36.9900x009","36.9900x010","36.9900x013","36.9901","36.9902","36.9903","37.1100x005","37.1100x007"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FC19_group(record)){
            return 'FC19';
        }

        return 'FC1';
    }else{
        return '';
    }
}
  