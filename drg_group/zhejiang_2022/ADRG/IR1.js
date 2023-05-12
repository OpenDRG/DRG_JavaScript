import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IR1_group(record){
    let adrg_zd=["M84.000x052","M84.100x052","S32.300","S32.310","S32.400","S32.410","S32.500x002","S32.500x003","S32.510","S32.700","S32.701","S32.800x091","S32.800x092","S32.800x093","S32.800x094","S32.800x095","S32.801","S32.802","S32.811","S32.812"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合IR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IR11_group(record)){
            return 'IR11';
        }

        if (drg.IR13_group(record)){
            return 'IR13';
        }

        if (drg.IR15_group(record)){
            return 'IR15';
        }

        return 'IR1';
    }else{
        return '';
    }
}
  