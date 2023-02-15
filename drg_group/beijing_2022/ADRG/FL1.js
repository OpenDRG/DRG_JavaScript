import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FL1_group(record){
    let adrg_zd=["I48.000","I48.100","I48.100x002","I48.100x003","I48.200","I48.300","I48.301","I48.400","I48.401","I48.900x003","I48.900x004","I48.900x015"];
    let adrg_zd1=[];
    let adrg_ss=["37.3401","37.3402","37.3403","37.3404","37.3405","37.3406"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FL1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FL19_group(record)){
            return 'FL19';
        }
        return 'FL1';
    }else{
        return '';
    }
}
  