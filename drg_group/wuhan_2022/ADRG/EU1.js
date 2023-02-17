import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EU1_group(record){
    let adrg_zd=["S22.200","S22.210","S22.300","S22.300x011","S22.310","S22.400","S22.400x011","S22.400x021","S22.400x031","S22.400x041","S22.410","S22.500","S22.900","S23.200x001","S23.200x004","S23.200x005","S23.201","S23.202","S23.203","S25.401","S27.000","S27.100","S27.200","S27.300x012","S27.301","S27.302","S27.303","S27.310","S27.311","S27.312","S27.313","S27.400","S27.401","S27.410","S27.500","S27.600","S27.700","S27.710","S27.800x013","S27.801","S27.802","S27.803","S27.804","S27.805","S27.806","S27.807","S27.808","S27.810","S27.811","S27.812","S27.900","S27.910","S28.000","S28.100","S29.700","S29.900","S43.200"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合EU1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCE_DRG();
                
        if (drg.EU11_group(record)){
            return 'EU11';
        }        if (drg.EU13_group(record)){
            return 'EU13';
        }        if (drg.EU15_group(record)){
            return 'EU15';
        }
        return 'EU1';
    }else{
        return '';
    }
}
  