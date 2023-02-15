import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RU1_group(record){
    let adrg_zd=["Z51.101","Z51.102","Z51.103","Z51.104","Z51.200x008","Z51.500x001","Z51.500x002","Z51.800x094","Z51.800x095","Z51.800x096","Z51.800x922","Z51.800x924","Z51.800x925","Z51.800x927","Z51.800x951","Z51.800x952","Z51.800x981","Z51.801","Z51.802","Z51.804","Z51.805","Z51.807","Z51.808","Z51.809","Z51.810"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合RU1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RU11_group(record)){
            return 'RU11';
        }        if (drg.RU15_group(record)){
            return 'RU15';
        }
        return 'RU1';
    }else{
        return '';
    }
}
  