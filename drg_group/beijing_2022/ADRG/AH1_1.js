import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AH1_1_group(record){
    let adrg_zd=[];
    let adrg_zd1=["Z93.000"];
    let adrg_ss=["96.7201"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList.slice(1),adrg_zd1) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合AH1_1入组条件，匹配规则：其他诊断匹配、某一手术匹配');
        let drg=new MDCA_DRG();
        
        if (drg.AH11_group(record)){
            return 'AH11';
        }

        if (drg.AH15_group(record)){
            return 'AH15';
        }

        return 'AH1';
    }else{
        return '';
    }
}
  