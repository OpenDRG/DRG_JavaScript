import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NA1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["40.2900x023","40.2905","40.2907","40.2909","40.5000","40.5200","40.5300","40.5301","40.5400x001","40.5907","40.5908","40.5909","40.5910","40.5911","40.5912","57.7100","57.7101","57.7103","67.4x00x002","68.4101","68.4900x006","68.4903","68.4904","68.5101","68.6100x001","68.6100x002","68.6101","68.6900x001","68.6900x002","68.6901","68.6902","68.7100x001","68.7900x003","68.7901","68.8x01","71.5x00x001","71.5x00x003","71.5x00x004"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合NA1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCN_DRG();
        
        if (drg.NA11_group(record)){
            return 'NA11';
        }

        if (drg.NA13_group(record)){
            return 'NA13';
        }

        if (drg.NA15_group(record)){
            return 'NA15';
        }

        return 'NA1';
    }else{
        return '';
    }
}
  