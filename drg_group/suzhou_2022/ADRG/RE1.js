import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RE1_group(record){
    let adrg_zd=["Z51.101","Z51.102","Z51.103","Z51.104"];
    let adrg_zd1=[];
    let adrg_ss=["03.8x01","54.9701","54.9702","54.9703","99.2500x036","99.2500x037","99.2500x038","99.2500x039","99.2502","99.2503","99.2504","99.2505","99.2506","99.2800x006","99.2801"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RE1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RE11_group(record)){
            return 'RE11';
        }        if (drg.RE1B_group(record)){
            return 'RE1B';
        }
        return 'RE1';
    }else{
        return '';
    }
}
  