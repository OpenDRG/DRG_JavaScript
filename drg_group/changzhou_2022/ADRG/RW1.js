import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RW1_group(record){
    let adrg_zd=["Z08.000","Z08.100","Z08.200","Z08.700","Z08.800x001","Z08.800x002","Z08.800x003","Z08.800x004","Z08.900","Z09.100","Z09.200","Z54.001","Z85.000x001","Z85.000x008","Z85.001","Z85.002","Z85.003","Z85.004","Z85.005","Z85.006","Z85.007","Z85.008","Z85.009","Z85.100","Z85.101","Z85.201","Z85.203","Z85.204","Z85.205","Z85.300x001","Z85.400x003","Z85.400x008","Z85.401","Z85.402","Z85.403","Z85.404","Z85.406","Z85.407","Z85.408","Z85.409","Z85.500","Z85.500x002","Z85.501","Z85.502","Z85.503","Z85.600x001","Z85.700x001","Z85.701","Z85.800x002","Z85.800x003","Z85.800x005","Z85.800x006","Z85.800x011","Z85.801","Z85.802","Z85.803","Z85.804","Z85.805","Z85.806","Z85.807","Z85.808","Z85.809","Z85.810","Z85.900","Z86.001","Z86.002","Z86.003","Z92.600"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合RW1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RW10_group(record)){
            return 'RW10';
        }

        if (drg.RW13_group(record)){
            return 'RW13';
        }

        if (drg.RW15_group(record)){
            return 'RW15';
        }

        return 'RW1';
    }else{
        return '';
    }
}
  