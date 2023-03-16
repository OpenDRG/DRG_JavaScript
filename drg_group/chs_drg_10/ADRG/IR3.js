import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IR3_group(record){
    let adrg_zd=["S72.300","S72.310","S72.400x001","S72.400x012","S72.400x013","S72.400x021","S72.400x031","S72.400x041","S72.401","S72.410","S72.700","S72.800","S72.900","S72.900x002"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合IR3入组条件，匹配规则：主诊断匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IR31_group(record)){
            return 'IR31';
        }

        if (drg.IR33_group(record)){
            return 'IR33';
        }

        if (drg.IR35_group(record)){
            return 'IR35';
        }

        return 'IR3';
    }else{
        return '';
    }
}
  