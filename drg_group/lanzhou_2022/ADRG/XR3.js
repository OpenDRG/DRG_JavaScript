import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCX_DRG} from '../DRG/MDCX_DRG.js';

export default function XR3_group(record){
    let adrg_zd=["B90.902","R10.200x001","R10.201","R13.x00","R41.100","R41.200","R47.000x001","R47.000x005","R47.000x006","R47.000x008","R47.001","R47.002","R47.003","R47.004","R47.100x001","R47.100x002","R47.101","R47.801","R47.802","R49.800x003","R49.801","R53.x00x001","R53.x00x003","R53.x00x004","R62.000x002","R62.000x003","R62.801","R62.802","R62.803","R62.900","Z50.000","Z50.600","Z54.800x010"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合XR3入组条件，匹配规则：主诊断匹配');
        let drg=new MDCX_DRG();
        
        if (drg.XR31_group(record)){
            return 'XR31';
        }

        if (drg.XR33_group(record)){
            return 'XR33';
        }

        if (drg.XR35_group(record)){
            return 'XR35';
        }

        return 'XR3';
    }else{
        return '';
    }
}
  