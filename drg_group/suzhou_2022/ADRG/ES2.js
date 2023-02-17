import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function ES2_group(record){
    let adrg_zd=["B06.800","B37.100","B37.101+J17.2*","B37.800x083","B37.803","B38.000","B38.000x001+J17.2*","B38.100","B38.100x001+J17.2*","B38.200","B38.200x001+J17.2*","B39.000","B39.000x001+J17.2*","B39.100","B39.100x001+J17.2*","B39.200","B39.200x001+J17.2*","B40.000","B40.100","B40.200","B41.000","B42.000+J99.8*","B44.000x001+J99.8*","B44.101+J99.8*","B44.102+J17.2*","B45.000","B45.000x002+J99.8*","B46.000x001+J99.8*","B48.500+J17.2*","B48.501+J17.2*","B48.502+J17.2*","B49.x00x011","B49.x13","B49.x14+J99.8*"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合ES2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCE_DRG();
                
        if (drg.ES2A_group(record)){
            return 'ES2A';
        }        if (drg.ES25_group(record)){
            return 'ES25';
        }
        return 'ES2';
    }else{
        return '';
    }
}
  