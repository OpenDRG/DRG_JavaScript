import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.7x01","38.7x02","48.7100","48.7900x003","69.0202","69.5201","70.7100","70.7101","70.7907","71.7101","71.7102","72.0x00","72.1x00","72.2100","72.2900x001","72.3100","72.3900x001","72.4x00","72.5100x001","72.5200x001","72.5300","72.5400x001","72.6x00","72.7100x001","72.7900x001","72.8x00","73.2100x001","73.2200","73.3x00x001","73.5900x001","73.5900x002","73.6x00x002","73.6x01","73.6x02","73.8x00x006","73.9100","73.9200","73.9300","73.9400","73.9900","75.4x00x001","75.4x00x002","75.4x00x003","75.5000","75.5100","75.5200","75.6201","75.6202","75.6900x003","75.6902","75.6903","75.9300"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合OC1入组条件，匹配规则：主手术匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OC11_group(record)){
            return 'OC11';
        }

        if (drg.OC13_group(record)){
            return 'OC13';
        }

        if (drg.OC15_group(record)){
            return 'OC15';
        }

        if (drg.OC19_group(record)){
            return 'OC19';
        }

        return 'OC1';
    }else{
        return '';
    }
}
  