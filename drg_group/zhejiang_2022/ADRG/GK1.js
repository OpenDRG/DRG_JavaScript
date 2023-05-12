import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["42.3303","42.3305","42.3306","43.4106","43.4107","43.4108","45.3004","45.3005","45.3007","45.3300x012","45.3300x013","45.3300x014","45.4300x009","45.4300x012","45.4307","46.3200x002","46.3201","46.8504","46.8505","46.8506","46.8507","46.8508","46.8509","48.3509","48.3510","48.3512","97.5101","97.5201","97.5902","97.5903","48.3600x004"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GK1入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GK11_group(record)){
            return 'GK11';
        }

        if (drg.GK13_group(record)){
            return 'GK13';
        }

        if (drg.GK15_group(record)){
            return 'GK15';
        }

        return 'GK1';
    }else{
        return '';
    }
}
  