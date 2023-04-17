import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JA1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["40.2100","40.2200","40.2300","40.2900x002","40.2901","40.2910","40.3x00x001","40.3x00x002","40.3x00x003","40.3x00x005","40.4100","40.4200","40.5100","40.5101","40.5901","40.5914","85.1200x001","85.2000x001","85.2100x003","85.2100x019","85.2200","85.2300x001","85.3300x001","85.3400x002","85.3500x001","85.3600x001","85.4100x001","85.4200x001","85.4200x003","85.4300x003","85.4301","85.4401","85.4500","85.4500x001","85.4500x003","85.4600","85.4700","85.4800"];
    let adrg_ss1=["85.5300x001","85.5400x001","85.7000x001","85.7100x001","85.7200x001","85.7300x001","85.7400x001","85.7500x001","85.7600x001","85.7900x001"];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss) && intersect(record.ssList,adrg_ss1)){
        putMessage('符合JA1入组条件，匹配规则：双手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JA19_group(record)){
            return 'JA19';
        }

        return 'JA1';
    }else{
        return '';
    }
}
  