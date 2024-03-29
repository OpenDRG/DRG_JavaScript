import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HT2_group(record){
    let adrg_zd=["B25.200+K87.1*","B26.300+K87.1*","K85.000","K85.001","K85.100","K85.101","K85.200","K85.201","K85.300","K85.301","K85.803","K85.807","K85.808","K85.809","K85.900","K85.900x002","K85.900x003","K85.901"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合HT2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HT23_group(record)){
            return 'HT23';
        }

        if (drg.HT25_group(record)){
            return 'HT25';
        }

        if (drg.HT21_group(record)){
            return 'HT21';
        }

        return 'HT2';
    }else{
        return '';
    }
}
  