import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["51.2100","51.2200","51.2200x004","51.2201","51.2300","51.2301","51.2400"];
    let adrg_ss1=["51.1104","51.3900x005","51.3901","51.3902","51.3903","51.3904","51.3905","51.3906","51.4100x001","51.4201","51.4202","51.4302","51.4304","51.4900x002","51.4901","51.4902","51.5100","51.5101","51.5102","51.5900x005","51.5900x008","51.5901","51.5903","51.6100x001","51.6301","51.6303","51.6900x007","51.6900x008","51.6900x012","51.6901","51.6903","51.6904","51.7200x001","51.7201","51.7202","51.7203","51.7900x002","51.7900x005","51.7900x006","51.7902","51.7903","51.7904","51.8100","51.8803","51.9300x001","51.9301","51.9305"];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss) && intersect(record.ssList,adrg_ss1)){
        putMessage('符合HC1入组条件，匹配规则：双手术匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HC19_group(record)){
            return 'HC19';
        }

        return 'HC1';
    }else{
        return '';
    }
}
  