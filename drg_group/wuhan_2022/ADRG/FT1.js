import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FT1_group(record){
    let adrg_zd=["E05.900x004+I43.8*","E11.502+I79.2*","E14.500x031+I43.8*","E14.500x032+I43.8*","E63.901+I43.2*","E83.103","E88.907+I43.1*","I25.500","I42.000x001","I42.001","I42.100","I42.200x002","I42.201","I42.401","I42.500x001","I42.501","I42.600","I42.701","I42.800x002","I42.800x004","I42.800x005","I42.800x006","I42.800x007","I42.802","I42.803","I42.900","I42.901","I42.902","I42.904","I42.905","I51.500x006","M32.104+I43.8*"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FT1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FT11_group(record)){
            return 'FT11';
        }        if (drg.FT1B_group(record)){
            return 'FT1B';
        }
        return 'FT1';
    }else{
        return '';
    }
}
  