import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HT1_group(record){
    let adrg_zd=["B25.200+K87.1*","B26.300+K87.1*","K85.000","K85.001","K85.002","K85.100","K85.101","K85.102","K85.200","K85.201","K85.202","K85.300","K85.301","K85.302","K85.800x001","K85.800x002","K85.800x003","K85.803","K85.807","K85.808","K85.809","K85.813","K85.814","K85.815","K85.816","K85.817","K85.818","K85.821","K85.822","K85.900","K85.900x002","K85.900x003","K85.901","K85.902"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合HT1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HT11_group(record)){
            return 'HT11';
        }

        if (drg.HT13_group(record)){
            return 'HT13';
        }

        if (drg.HT15_group(record)){
            return 'HT15';
        }

        return 'HT1';
    }else{
        return '';
    }
}
  