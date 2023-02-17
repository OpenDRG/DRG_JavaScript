import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["35.3400x001","35.3400x003","35.3400x004","35.3400x005","35.3400x006","35.3400x007","35.3400x008","35.3901","35.4100x001","35.4100x002","35.4101","35.4200x002","35.4200x005","35.4200x006","35.4200x007","35.4200x008","35.4201","35.5000","35.5100x001","35.5100x002","35.5100x003","35.5100x004","35.5100x005","35.5101","35.5300x001","35.5300x003","35.5301","35.5400x003","35.5400x004","35.5400x005","35.5400x006","35.6000","35.6100x001","35.6101","35.6102","35.6201","35.6300x002","35.6300x003","35.6300x004","35.6300x005","35.7000","35.7100x002","35.7100x003","35.7100x004","35.7100x005","35.7100x007","35.7100x008","35.7100x009","35.7100x010","35.7101","35.7200x001","35.7200x002","35.7201","35.7300x002","35.7300x003","35.7300x004","35.7300x005","35.7300x006","35.7300x007","35.7301","35.8100x001","35.8100x002","35.8100x003","35.8100x004","35.8100x005","35.8100x006","35.8200x006","35.8200x008","35.8200x009","35.8200x010","35.8200x011","35.8200x012","35.8200x013","35.8201","35.8300x004","35.8300x005","35.8301","35.8302","35.8303","35.8304","35.8305","35.8307","35.8308","35.8309","35.8400x001","35.8400x002","35.8400x003","35.9101","35.9102","35.9200x001","35.9200x003","35.9200x004","35.9200x005","35.9201","35.9202","35.9300x002","35.9300x003","35.9300x004","35.9300x005","35.9301","35.9302","35.9400x003","35.9400x004","35.9400x005","35.9400x006","35.9401","35.9402","35.9500x002","35.9500x007","35.9500x008","35.9501","37.3300x009","37.3300x020","37.3300x021","37.3300x029","37.3500x005","37.3500x005","37.3501","37.3600x006","38.3400x003","38.3500x002","38.4500x017","38.4500x017","38.8500x001","38.8500x012","38.8500x013","38.8500x019","38.8505","39.2100x001","39.2100x003","39.2100x004","39.2100x005","39.2100x006","39.2100x007","39.2102","39.4903","39.4904"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FD1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FD19_group(record)){
            return 'FD19';
        }
        return 'FD1';
    }else{
        return '';
    }
}
  