import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCX_DRG} from '../DRG/MDCX_DRG.js';

export default function XR1_group(record){
    let adrg_zd=["T97.x00x003","T97.x01","T97.x02","Z00.401","Z50.000","Z50.100x001","Z50.101","Z50.200","Z50.300","Z50.400x001","Z50.500","Z50.501","Z50.600","Z50.700x001","Z50.800x002","Z50.801","Z50.900x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合XR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCX_DRG();
        
        if (drg.XR11_group(record)){
            return 'XR11';
        }

        if (drg.XR13_group(record)){
            return 'XR13';
        }

        if (drg.XR15_group(record)){
            return 'XR15';
        }

        return 'XR1';
    }else{
        return '';
    }
}
  