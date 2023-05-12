import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCL_DRG} from '../DRG/MDCL_DRG.js';

export default function LK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["55.0300x002","55.0300x003","55.0400x005","55.0400x006","55.0400x007","55.0400x008","55.0400x009","55.0400x010","55.0401","55.0402","55.0403","55.0404","55.0405","56.0x03","56.0x04","56.0x05","56.0x06","56.0x07","56.0x08","57.0x00x002","57.0x00x007","57.0x00x008","57.0x00x009","57.0x00x010","57.0x00x011","57.0x00x012","57.0x00x013","57.0x05","57.0x06","57.0x07","57.0x08","58.6x00x003","59.9502","98.5101","98.5102","98.5103","98.5104","56.0x00x001","56.0x00x002","56.0x00x003","56.0x00x004","56.0x00x005","56.0x00x006","56.0x00x007","56.0x00x008","56.0x00x009","56.0x00x010","56.0x00x011","56.0x00x012","56.0x00x013","56.0x00x014","56.0x00x015","56.0x00x016"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合LK1入组条件，匹配规则：主手术匹配');
        let drg=new MDCL_DRG();
        
        if (drg.LK11_group(record)){
            return 'LK11';
        }

        if (drg.LK13_group(record)){
            return 'LK13';
        }

        if (drg.LK15_group(record)){
            return 'LK15';
        }

        return 'LK1';
    }else{
        return '';
    }
}
  