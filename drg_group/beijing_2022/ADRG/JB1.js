import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["85.3100","85.3200","85.3300x001","85.3500x001","85.5100x001","85.5200x001","85.5300x001","85.5400x001","85.5500x001","85.5500x002","85.6x00x001","85.7000x001","85.7100x001","85.7200x001","85.7300x001","85.7400x001","85.7500x001","85.7600x001","85.7900x001","85.8100","85.8200","85.8300","85.8400","85.8500","85.8601","85.8700x003","85.8701","85.8702","85.8900x005","85.8900x006","85.8900x007","85.8900x008","85.8901","85.9100","85.9300","85.9400","85.9500","85.9600"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
                
        if (drg.JB13_group(record)){
            return 'JB13';
        }        if (drg.JB15_group(record)){
            return 'JB15';
        }
        return 'JB1';
    }else{
        return '';
    }
}
  