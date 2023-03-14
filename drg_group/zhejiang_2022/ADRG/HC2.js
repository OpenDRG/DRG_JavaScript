import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HC2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["51.1104","51.3601","51.3602","51.3903","51.3905","51.4100x001","51.4201","51.4202","51.5100","51.5101","51.5102","51.6301","51.6302","51.6303","51.6402","51.6900x012","51.7200x001","51.7201","51.7202","51.7203","51.7204","51.7900x006","51.8803","51.8807"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合HC2入组条件，匹配规则：某一手术匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HC21_group(record)){
            return 'HC21';
        }

        if (drg.HC23_group(record)){
            return 'HC23';
        }

        if (drg.HC25_group(record)){
            return 'HC25';
        }

        return 'HC2';
    }else{
        return '';
    }
}
  