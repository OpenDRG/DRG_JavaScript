import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RW2_group(record){
    let adrg_zd=["Z51.000x013","Z51.100x004","Z51.500x003","Z51.800x953","Z51.800x983"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合RW2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RW21_group(record)){
            return 'RW21';
        }        if (drg.RW23_group(record)){
            return 'RW23';
        }        if (drg.RW25_group(record)){
            return 'RW25';
        }
        return 'RW2';
    }else{
        return '';
    }
}
  