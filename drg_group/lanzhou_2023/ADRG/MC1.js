import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCM_DRG} from '../DRG/MDCM_DRG.js';

export default function MC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.5702","38.8705","64.2x00x001","64.2x00x002","64.2x00x003","64.2x00x006","64.2x00x007","64.2x00x008","64.2x01","64.3x01","64.3x02","64.4100","64.4200","64.4300","64.4400","64.4500","64.4500x002","64.4901","64.4902","64.4903","64.4904","64.4905","64.5x00","64.5x00x001","64.9100x002","64.9100x003","64.9101","64.9200","64.9300x001","64.9400","64.9501","64.9502","64.9600","64.9701","64.9702","64.9801","64.9802","98.2401"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合MC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCM_DRG();
        
        if (drg.MC19_group(record)){
            return 'MC19';
        }

        return 'MC1';
    }else{
        return '';
    }
}
  