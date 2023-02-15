import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RE1_group(record){
    let adrg_zd=["Z51.101","Z51.102","Z51.103","Z51.104","Z51.200x008","Z51.500x002","Z51.800x095","Z51.800x922","Z51.800x951","Z51.800x952","Z51.800x981","Z51.801","Z51.807"];
    let adrg_zd1=[];
    let adrg_ss=["54.9701","54.9702","54.9703","99.2500x017","99.2500x036","99.2500x037","99.2500x038","99.2500x039","99.2503","99.2504","99.2505","99.2506","99.2800x004","99.2800x005","99.2800x006","99.2801"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RE1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RE11_group(record)){
            return 'RE11';
        }        if (drg.RE13_group(record)){
            return 'RE13';
        }        if (drg.RE15_group(record)){
            return 'RE15';
        }
        return 'RE1';
    }else{
        return '';
    }
}
  