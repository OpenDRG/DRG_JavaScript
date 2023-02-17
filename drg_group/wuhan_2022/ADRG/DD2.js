import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["09.8100","09.8100x004","09.8101","09.8200","09.8301","21.0200","21.0300x003","21.0300x004","21.0301","21.0302","21.0500","21.0501","21.0700x001","21.0901","21.0902","21.0903","21.0904","21.0905","21.1x00x002","21.1x00x006","21.1x01","21.1x02","21.1x03","21.1x04","21.3101","21.3102","21.3103","21.3104","21.3105","21.3106","21.3107","21.3108","21.3109","21.3200x003","21.3200x007","21.3200x008","21.3200x010","21.3201","21.4x00","21.4x01","21.5x00","21.5x00x004","21.5x01","21.6100x002","21.6100x006","21.6101","21.6102","21.6103","21.6104","21.6200","21.6900x009","21.6901","21.6902","21.6903","21.6904","21.7200","21.7200x001","21.8200x006","21.8201","21.8202","21.8203","21.9100","21.9101","21.9900x005","21.9900x006","21.9901","21.9902","22.0100x003","22.0101","22.0102","22.2x00x009","22.2x00x010","22.2x00x011","22.2x01","22.2x02","22.3100x002","22.3900x002","22.3900x003","22.4100x005","22.4100x006","22.4100x007","22.4101","22.4200x005","22.4200x006","22.4200x007","22.4200x008","22.4200x009","22.4201","22.4202","22.5000x004","22.5001","22.5002","22.5100","22.5101","22.5102","22.5103","22.5201","22.5202","22.5203","22.5204","22.5205","22.5300","22.5300x004","22.5301","22.6001","22.6002","22.6100","22.6200x004","22.6201","22.6300","22.6300x011","22.6300x012","22.6301","22.6302","22.6303","22.6400","22.6401","22.6402","22.6403","22.7100x001","22.7100x004","22.7101","22.7102","22.7900x002","22.7900x003","22.7901","22.7902","22.7903","22.9x01","22.9x02"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DD2入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
                
        if (drg.DD29_group(record)){
            return 'DD29';
        }
        return 'DD2';
    }else{
        return '';
    }
}
  