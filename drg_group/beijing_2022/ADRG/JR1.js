import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JR1_group(record){
    let adrg_zd=["C43.501","C50.000","C50.000x001","C50.001","C50.100","C50.200","C50.300","C50.400","C50.500","C50.600","C50.800","C50.800x005","C50.801","C50.802","C50.803","C50.804","C50.900","C50.900x005","C50.901","C50.902","C79.200x007","C79.800x831","C79.806","D03.501","D04.501","D05.000","D05.100","D05.700","D05.900","D48.600x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合JR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCJ_DRG();
                
        if (drg.JR13_group(record)){
            return 'JR13';
        }        if (drg.JR15_group(record)){
            return 'JR15';
        }
        return 'JR1';
    }else{
        return '';
    }
}
  