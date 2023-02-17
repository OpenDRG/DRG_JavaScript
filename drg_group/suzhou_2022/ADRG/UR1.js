import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCU_DRG} from '../DRG/MDCU_DRG.js';

export default function UR1_group(record){
    let adrg_zd=["F10.000","F10.001","F10.002","F10.003","F10.100","F10.100x002","F10.200","F10.201","F10.300","F10.400","F10.401","F10.500","F10.501","F10.502","F10.503","F10.504","F10.505","F10.600","F10.600x002","F10.601","F10.700","F10.700x091","F10.701","F10.800","F10.900","R78.000","T51.001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合UR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCU_DRG();
                
        if (drg.UR19_group(record)){
            return 'UR19';
        }
        return 'UR1';
    }else{
        return '';
    }
}
  