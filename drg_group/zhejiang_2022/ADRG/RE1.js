import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.1000","00.1500x002","54.9703","99.2500x036","99.2500x037","99.2502","99.2503","99.2505","99.2506","99.2800x003","99.2800x006","99.2801"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合RE1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RE11_group(record)){
            return 'RE11';
        }

        if (drg.RE13_group(record)){
            return 'RE13';
        }

        if (drg.RE15_group(record)){
            return 'RE15';
        }

        if (drg.RE19_group(record)){
            return 'RE19';
        }

        return 'RE1';
    }else{
        return '';
    }
}
  