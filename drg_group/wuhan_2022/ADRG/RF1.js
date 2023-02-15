import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RF1_group(record){
    let adrg_zd=["Z51.000x013","Z51.100x004","Z51.800x953","Z51.800x983"];
    let adrg_zd1=[];
    let adrg_ss=["54.9701","54.9702","54.9703","92.2000","92.2001","92.2100","92.2200","92.2201","92.2300","92.2301","92.2302","92.2303","92.2400","92.2400x002","92.2400x003","92.2400x004","92.2400x005","92.2400x006","92.2400x007","92.2500","92.2501","92.2601","92.2602","92.2700x002","92.2701","92.2702","92.2703","92.2704","92.2705","92.2706","92.2800","92.2900x001","92.2900x002","92.2900x003","99.2500x036","99.2500x037","99.2503","99.2504","99.2506","99.2800x006","99.2801"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RF1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RF19_group(record)){
            return 'RF19';
        }
        return 'RF1';
    }else{
        return '';
    }
}
  