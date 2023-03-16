import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TR1_group(record){
    let adrg_zd=["F20.000","F20.100","F20.200","F20.200x002","F20.201","F20.300","F20.301","F20.400","F20.500","F20.501","F20.600","F20.800x001","F20.800x002","F20.800x003","F20.801","F20.802","F20.803","F20.900","F21.x00","F23.100","F23.200","R44.000","R44.300"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合TR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCT_DRG();
        
        if (drg.TR11_group(record)){
            return 'TR11';
        }

        if (drg.TR13_group(record)){
            return 'TR13';
        }

        if (drg.TR15_group(record)){
            return 'TR15';
        }

        return 'TR1';
    }else{
        return '';
    }
}
  