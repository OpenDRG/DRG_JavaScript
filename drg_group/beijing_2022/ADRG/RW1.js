import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RW1_group(record){
    let adrg_zd=["Z08.000","Z08.100","Z08.200","Z08.700","Z08.800x001","Z08.800x002","Z08.800x003","Z08.800x004","Z08.900","Z09.100","Z09.200","Z54.001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合RW1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RW11_group(record)){
            return 'RW11';
        }        if (drg.RW15_group(record)){
            return 'RW15';
        }
        return 'RW1';
    }else{
        return '';
    }
}
  