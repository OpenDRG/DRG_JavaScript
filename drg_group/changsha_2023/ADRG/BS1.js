import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BS1_group(record){
    let adrg_zd=["E03.500","E16.107+G94.8*","G93.500x001","G93.500x002","G93.500x005","G93.500x006","G93.500x007","G93.500x008","G93.500x009","G93.500x010","G93.501","G97.100x003","R40.100","R40.100x002","R40.100x003","R40.100x005","R40.200","R40.200x002","R40.200x004","R40.201"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合BS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BS11_group(record)){
            return 'BS11';
        }

        if (drg.BS13_group(record)){
            return 'BS13';
        }

        if (drg.BS15_group(record)){
            return 'BS15';
        }

        return 'BS1';
    }else{
        return '';
    }
}
  