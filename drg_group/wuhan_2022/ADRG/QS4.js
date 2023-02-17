import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCQ_DRG} from '../DRG/MDCQ_DRG.js';

export default function QS4_group(record){
    let adrg_zd=["D46.000","D46.000x002","D46.000x003","D46.001","D46.100","D46.100x002","D46.100x012","D46.200","D46.201x001","D46.203","D46.400","D46.500","D46.600","D62.x00","D64.000","D64.001","D64.100","D64.200","D64.300","D64.300x002","D64.400x001","D64.401","D64.800x002","D64.801","D64.802","D64.803","D64.900","D64.900x006","D64.900x007","D64.901","D64.902","D64.903","D64.904","E80.200x007","E80.200x008","N18.900x012+D63.8*"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合QS4入组条件，匹配规则：主诊断匹配');
        let drg=new MDCQ_DRG();
                
        if (drg.QS41_group(record)){
            return 'QS41';
        }        if (drg.QS43_group(record)){
            return 'QS43';
        }        if (drg.QS45_group(record)){
            return 'QS45';
        }
        return 'QS4';
    }else{
        return '';
    }
}
  