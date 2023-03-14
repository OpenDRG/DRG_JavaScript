import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OF2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["69.0100x002","69.0101","69.0200x003","69.0201","69.0902","69.5101","69.5102","69.5103","69.5202","69.5901","73.4x00x004","73.8x00x003","96.4902"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合OF2入组条件，匹配规则：某一手术匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OF21_group(record)){
            return 'OF21';
        }

        if (drg.OF23_group(record)){
            return 'OF23';
        }

        if (drg.OF25_group(record)){
            return 'OF25';
        }

        return 'OF2';
    }else{
        return '';
    }
}
  