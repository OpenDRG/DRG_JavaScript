import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HZ2_group(record){
    let adrg_zd=["A01.000x014","A18.815+K87.0*","A18.816+K87.0*","B45.800x001","B66.902","B77.800x004","B77.803","D13.500","D37.602","D37.604","K80.100x001","K80.101","K80.200x001","K80.200x003","K80.201","K80.400x004","K80.403","K80.404","K80.405","K80.406","K80.500x001","K80.500x002","K80.501","K80.502","K80.503","K80.504","K80.505","K80.506","K80.507","K80.800x001","K80.801","K81.100","K81.101","K82.000","K82.100x002","K82.101","K82.300","K82.301","K82.302","K82.303","K82.304","K82.305","K82.306","K82.400","K82.800x002","K82.800x004","K82.800x009","K82.801","K82.802","K82.803","K82.804","K82.805","K82.806","K82.807","K82.900x001","K82.900x002","K83.006","K83.100x001","K83.100x008","K83.101","K83.102","K83.104","K83.105","K83.107","K83.300","K83.301","K83.302","K83.303","K83.304","K83.305","K83.306","K83.307","K83.400x001","K83.401","K83.501","K83.502","K83.800x009","K83.800x012","K83.800x022","K83.800x023","K83.802","K83.803","K83.804","K83.805","K83.807","K83.808","K83.809","K83.810","K83.811","K83.813","K83.814","K83.815","K83.816","K83.817","K83.818","K83.819","K83.820","K83.901","K83.902","K91.500","K91.800x301","K91.800x304","K91.800x401","K91.800x402","K91.800x403","K91.800x407","K91.800x411","K91.806","K91.807","K91.822","K91.823","K91.840","Q27.804","Q44.001","Q44.002","Q44.003","Q44.004","Q44.100x002","Q44.100x003","Q44.101","Q44.102","Q44.200","Q44.200x003","Q44.201","Q44.300","Q44.301","Q44.400","Q44.500x005","Q44.500x006","Q44.500x007","Q44.501","Q44.502","Q44.503","Q44.504","Q44.505","Q85.900x019","Q85.900x044","R93.200x002","R93.204","R93.205","S36.100x081","S36.101","S36.103","S36.110","S36.111","S36.112","S36.113"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合HZ2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCH_DRG();
                
        if (drg.HZ21_group(record)){
            return 'HZ21';
        }        if (drg.HZ23_group(record)){
            return 'HZ23';
        }        if (drg.HZ25_group(record)){
            return 'HZ25';
        }
        return 'HZ2';
    }else{
        return '';
    }
}
  