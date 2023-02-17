import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["31.1x00x005","31.4100","31.4200x001","31.4200x003","31.4201","31.4202","31.4300x002","31.4301","31.4400x001","31.9400","33.2100","33.2200x002","33.2200x003","33.2300x002","33.2300x003","33.2301","33.2302","33.9200","34.7300x001","96.0500x001","96.5602"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合EJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCE_DRG();
                
        if (drg.EJ11_group(record)){
            return 'EJ11';
        }        if (drg.EJ13_group(record)){
            return 'EJ13';
        }        if (drg.EJ15_group(record)){
            return 'EJ15';
        }
        return 'EJ1';
    }else{
        return '';
    }
}
  