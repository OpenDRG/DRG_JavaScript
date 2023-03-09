import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RG1_group(record){
    let adrg_zd=["Z51.800x095","Z51.800x951","Z51.800x952","Z51.800x981","Z51.801","Z51.805","Z51.807","Z51.810"];
    let adrg_zd1=[];
    let adrg_ss=["99.2800x004","99.2800x005","99.2800x006","99.2801"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RG1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RG11_group(record)){
            return 'RG11';
        }

        if (drg.RG15_group(record)){
            return 'RG15';
        }

        return 'RG1';
    }else{
        return '';
    }
}
  