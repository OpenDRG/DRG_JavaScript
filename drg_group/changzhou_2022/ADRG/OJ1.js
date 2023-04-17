import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.7x01","38.7x02","38.7x03","38.7x04","54.1202","54.2100x005","54.6101","73.8x00x005","73.8x00x006","73.8x01","73.8x02","75.1x00","75.1x00x002","75.2x00x001","75.3100","75.3101","75.3200","75.3300x001","75.3300x002","75.3301","75.3302","75.3303","75.3600","75.3600x002","75.3700","75.9900x002","75.9900x004","75.9900x005","96.1800x001","97.7101","97.7102"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合OJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OJ19_group(record)){
            return 'OJ19';
        }

        return 'OJ1';
    }else{
        return '';
    }
}
  