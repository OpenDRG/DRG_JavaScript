import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["43.8201","43.8903","43.9900x003","44.3200x001","44.3201","44.3803","44.3804","44.3900x003","44.3901","44.3902","44.3903","44.3904","44.5x00x002","44.5x00x004","44.5x00x005","44.5x01","44.5x02","44.5x03","44.5x04","44.5x05","44.5x06","44.5x07","44.6800x002","44.6801","44.6902","44.9501","44.9502","44.9601","44.9602","44.9701","44.9800x003","44.9800x004","44.9801","44.9802","45.9100x006","45.9100x008","45.9103","45.9104","85.3100","85.3200","86.8300x031","86.8300x032","86.8301","86.8302","86.8303","86.8304","86.8305","86.8306","86.8900x002","86.8900x011","86.9000x001"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合KE1入组条件，匹配规则：主手术匹配');
        let drg=new MDCK_DRG();
        
        if (drg.KE11_group(record)){
            return 'KE11';
        }

        if (drg.KE13_group(record)){
            return 'KE13';
        }

        if (drg.KE15_group(record)){
            return 'KE15';
        }

        return 'KE1';
    }else{
        return '';
    }
}
  