import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["42.3300x015","42.3300x016","42.3300x017","42.9200x007","43.4100x021","43.4100x024","43.4100x025","43.4106","43.4107","44.9901","45.3000x005","45.3000x006","45.3000x007","45.3004","45.3007","45.3400x001","45.3400x002","45.3400x003","45.3400x004","45.3400x005","45.3400x006","45.3400x007","45.3400x008","45.3401","45.3402","45.4300x009","45.4300x012","45.4300x015","45.4300x016","45.4300x017","48.3600x003","48.3600x006","48.3600x009","48.3600x010","48.3600x011"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合GK1入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GK1A_group(record)){
            return 'GK1A';
        }

        if (drg.GK15_group(record)){
            return 'GK15';
        }

        return 'GK1';
    }else{
        return '';
    }
}
  