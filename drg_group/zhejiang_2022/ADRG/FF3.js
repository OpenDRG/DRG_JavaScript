import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FF3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["20.5101","38.0200x003","38.0202","38.0301","38.0502","38.0700x001","38.0702","38.0703","38.0704","38.0705","38.0900x001","38.0900x002","38.0901","38.0902","38.3701","38.3900","38.4303","38.4500x001","38.4500x003","38.4700x001","38.4701","38.4702","38.4900x001","38.4900x002","38.5000","38.5100","38.5201","38.5202","38.5300","38.5500","38.5700x002","38.5702","38.5900x003","38.5900x005","38.5900x008","38.5901","38.5902","38.5903","38.5904","38.5905","38.5906","38.5907","38.6000x010","38.6200x002","38.6200x003","38.6200x007","38.6500x002","38.6501","38.6700x005","38.6701","38.6703","38.6705","38.6706","38.6901","38.7x01","38.7x02","38.7x03","38.7x04","38.8200x005","38.8200x006","38.8202","38.8500x016","38.8700x002","38.8700x008","38.8700x009","38.8702","38.8703","38.8705","38.8900x001","38.8901","38.9300x202","38.9300x701","38.9300x702","38.9400","39.1x00x006","39.1x00x007","39.1x00x008","39.1x00x009","39.1x00x010","39.1x00x011","39.1x00x012","39.1x00x013","39.1x00x014","39.1x00x015","39.1x00x016","39.1x00x017","39.1x00x018","39.1x00x019","39.1x01","39.1x02","39.1x03","39.1x04","39.1x05","39.1x06","39.1x07","39.1x08","39.1x09","39.1x10","39.2101","39.2200x017","39.2200x020","39.2300x004","39.2304","39.2305","39.2306","39.2307","39.2308","39.2309","39.2601","39.2900x011","39.2900x012","39.2900x015","39.2900x028","39.2900x044","39.2900x045","39.2901","39.3200x004","39.3200x006","39.3202","39.3203","39.3204","39.3205","39.3206","39.3207","39.5000x013","39.5602","39.5701","39.5900x003","39.5900x005","39.5900x007","39.5900x009","39.5900x014","39.5900x015","39.5900x019","39.5900x020","39.5900x021","39.5900x023","39.7900x041","39.9100x003","54.9400x002","54.9401","54.9402"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FF3入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FF31_group(record)){
            return 'FF31';
        }

        if (drg.FF33_group(record)){
            return 'FF33';
        }

        if (drg.FF35_group(record)){
            return 'FF35';
        }

        return 'FF3';
    }else{
        return '';
    }
}
  