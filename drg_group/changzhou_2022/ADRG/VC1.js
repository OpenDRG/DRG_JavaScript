import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCV_DRG} from '../DRG/MDCV_DRG.js';

export default function VC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["08.2000x009","08.2000x010","21.3200x010","21.3200x011","21.9900x002","27.4300x010","27.4300x011","54.3x00x011","61.3x00x005","61.3x00x006","64.2x00x006","64.2x00x007","71.3x00x021","71.3x00x022","71.3x00x023","71.3x00x024","85.2000x001","85.2000x002","86.2200x011","86.2201","86.2202","86.2800x012"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合VC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCV_DRG();
        
        if (drg.VC11_group(record)){
            return 'VC11';
        }

        if (drg.VC13_group(record)){
            return 'VC13';
        }

        if (drg.VC15_group(record)){
            return 'VC15';
        }

        return 'VC1';
    }else{
        return '';
    }
}
  