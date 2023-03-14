import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OF1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["69.0101","69.0200x003","69.0902","69.5101","69.5102","69.5103","69.5202","69.5901","73.1x00x001","73.1x00x002","73.1x01","73.1x02","73.4x00x004","73.8x00x003","74.9100","74.9100x001","74.9101","75.0x01","75.0x02","75.0x03"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合OF1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OF11_group(record)){
            return 'OF11';
        }

        if (drg.OF13_group(record)){
            return 'OF13';
        }

        if (drg.OF15_group(record)){
            return 'OF15';
        }

        return 'OF1';
    }else{
        return '';
    }
}
  