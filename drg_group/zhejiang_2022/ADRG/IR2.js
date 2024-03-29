import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IR2_group(record){
    let adrg_zd=["S72.000","S72.000x011","S72.000x021","S72.000x031","S72.000x041","S72.000x051","S72.000x081","S72.000x082","S72.010","S72.100x001","S72.100x002","S72.100x011","S72.101","S72.110","S72.200x001","S72.210","S72.910"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合IR2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IR21_group(record)){
            return 'IR21';
        }

        if (drg.IR23_group(record)){
            return 'IR23';
        }

        if (drg.IR25_group(record)){
            return 'IR25';
        }

        return 'IR2';
    }else{
        return '';
    }
}
  