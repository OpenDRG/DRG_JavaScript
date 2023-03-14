import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.7x01","38.7x02","38.7x03","38.7x04","54.1202","54.2100","54.2100x005","54.6101","54.7200x001","69.0101","69.0200x003","69.0201","69.5901","73.8x00x002","73.8x00x005","73.8x01","73.8x02","75.1x00","75.1x00x002","75.2x00x001","75.3100","75.3101","75.3200","75.3300x001","75.3301","75.3302","75.3600x002","75.3700","75.9900x002","75.9900x004","75.9900x005","97.7101","97.7102"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合OJ1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OJ11_group(record)){
            return 'OJ11';
        }

        if (drg.OJ13_group(record)){
            return 'OJ13';
        }

        if (drg.OJ15_group(record)){
            return 'OJ15';
        }

        return 'OJ1';
    }else{
        return '';
    }
}
  