import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GB2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["17.3100","17.3101","17.3200","17.3200x001","17.3200x002","17.3300","17.3300x002","17.3400","17.3401","17.3500","17.3500x001","17.3600","17.3600x001","17.3900x002","17.3900x003","17.3900x004","17.3901","40.5101","40.5908","40.5909","40.5910","40.5911","40.5912","45.0001","45.0002","45.5000","45.5100x001","45.5101","45.5201","45.6100","45.6100x001","45.6200x003","45.6200x004","45.6300","45.7100x001","45.7200x002","45.7200x004","45.7201","45.7202","45.7300x003","45.7300x006","45.7300x007","45.7301","45.7302","45.7304","45.7400x003","45.7401","45.7500","45.7500","45.7500x001","45.7501","45.7600x008","45.7601","45.7900x001","45.7900x002","45.7901","45.7902","45.8100","45.8100x001","45.8200","45.8300","45.9000","45.9100x009","45.9100x010","45.9200","45.9300x012","45.9300x013","45.9300x014","45.9300x015","45.9301","45.9302","45.9303","45.9304","45.9305","45.9306","45.9307","45.9308","45.9309","45.9310","45.9400x004","45.9400x009","45.9400x012","45.9400x016","45.9400x017","45.9400x018","45.9401","45.9402","45.9403","45.9404","45.9405","45.9406","45.9407","45.9408","45.9500x001","45.9501","45.9502","45.9503","45.9504","46.0200","46.0400x002","46.0401","46.0402","46.1000","46.1000x007","46.1100","46.1100x002","46.2000","46.2001","46.2200","46.2300x001","46.2301","46.3100","46.3900x008","46.5200x012","46.6000","46.6100","46.6101","46.6400x001","46.6400x002","46.7300x005","46.7301","46.7302","46.7303","46.8100x001","46.8100x002","46.8200x001","46.8200x002","46.8700","46.9700","46.9900","48.4900x002","48.4900x003","48.4901","48.4902","48.4903","48.4904","48.4905","48.5100","48.5100x002","48.5200","48.5201","48.5900x001","48.6100","48.6100x001","48.6100x002","48.6100x002","48.6200","48.6201","48.6300x001","48.6300x002","48.6300x003","48.6300x004","48.6300x005","48.6301","48.6302","48.6303","48.6400x001","48.6500x001","48.6900x002","48.6900x004","48.6900x007","48.6901","48.6902","48.6903","48.6904","48.6905","48.6906","48.6907","48.6908","48.6909","48.6910","48.6911","48.6912","48.6913","54.4x00x050","54.4x00x051","54.4x00x053","54.4x00x054","70.5002","70.5300x001","70.7200","70.7300","70.7400x001","70.7401"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GB2入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
                
        if (drg.GB21_group(record)){
            return 'GB21';
        }        if (drg.GB2B_group(record)){
            return 'GB2B';
        }
        return 'GB2';
    }else{
        return '';
    }
}
  