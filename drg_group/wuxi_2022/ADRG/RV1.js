import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RV1_group(record){
    let adrg_zd=["Z51.000x003","Z51.000x008","Z51.000x012","Z51.001","Z51.002","Z51.003","Z51.806","Z51.811"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合RV1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCR_DRG();
                

        return 'RV1';
    }else{
        return '';
    }
}
  