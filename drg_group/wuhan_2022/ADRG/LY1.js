import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LY1_group(record){
    let adrg_zd=["E11.400x380+G99.0*","E14.400x380+G99.0*","S37.000","S37.000x012","S37.000x013","S37.000x015","S37.000x016","S37.000x022","S37.000x023","S37.000x031","S37.001","S37.002","S37.003","S37.004","S37.010","S37.011","S37.100","S37.101","S37.111","S37.200","S37.200x011","S37.200x022","S37.200x023","S37.200x024","S37.200x081","S37.201","S37.211","S37.300","S37.300x004","S37.300x005","S37.300x011","S37.300x021","S37.300x031","S37.300x081","S37.300x082","S37.300x083","S37.301","S37.302","S37.303","S37.310","S37.813","S37.814","T83.800","T83.800x001","T83.801","T83.802","T83.804"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合LY1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCL_DRG();
                
        if (drg.LY19_group(record)){
            return 'LY19';
        }
        return 'LY1';
    }else{
        return '';
    }
}
  