import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCP_DRG} from '../DRG/MDCP_DRG.js';

export default function PB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["34.0200x003","34.0301","35.0100x002","35.0101","35.0200x003","35.0201","35.0300x002","35.0301","35.0400x001","35.0401","35.0501","35.0502","35.0600x001","35.0600x002","35.0701","35.0800x001","35.1100x003","35.1100x004","35.1100x005","35.1101","35.1200x001","35.1200x002","35.1200x003","35.1201","35.1202","35.1300x002","35.1300x004","35.1300x005","35.1301","35.1400x001","35.1400x002","35.1400x003","35.1400x006","35.1401","35.1402","35.2100x002","35.2100x003","35.2100x004","35.2100x005","35.2101","35.2200x002","35.2200x004","35.2201","35.2300x002","35.2301","35.2302","35.2400x002","35.2401","35.2402","35.2500x002","35.2501","35.2600x002","35.2601","35.2701","35.2702","35.2801","35.2802","35.3100x001","35.3101","35.3200x003","35.3201","35.3202","35.3300x001","35.3300x002","35.3300x003","35.3400x001","35.3400x003","35.3400x004","35.3400x005","35.3400x006","35.3400x007","35.3400x008","35.3500x002","35.3500x003","35.3500x004","35.3500x005","35.3500x006","35.3500x007","35.3500x008","35.3500x009","35.3501","35.3901","35.4100x001","35.4100x002","35.4101","35.4200x002","35.4200x003","35.4200x005","35.4200x006","35.4200x009","35.4201","35.5100x001","35.5100x002","35.5100x003","35.5101","35.5200x001","35.5200x002","35.5200x002","35.5201","35.5300x001","35.5300x003","35.5301","35.5400x003","35.5400x004","35.5400x005","35.5400x006","35.5500x001","35.5500x001","35.6100x001","35.6101","35.6102","35.6201","35.6300x002","35.6300x003","35.6300x004","35.6300x005","35.7100x002","35.7100x003","35.7100x004","35.7100x005","35.7100x007","35.7100x008","35.7100x009","35.7101","35.7200x001","35.7200x002","35.7201","35.7300x002","35.7300x003","35.7300x004","35.7300x005","35.7300x006","35.7300x007","35.7301","35.8100x001","35.8100x002","35.8100x003","35.8100x004","35.8100x005","35.8100x006","35.8200x006","35.8200x008","35.8200x009","35.8200x010","35.8200x011","35.8200x012","35.8201","35.8300x004","35.8300x005","35.8301","35.8302","35.8303","35.8304","35.8305","35.8307","35.8308","35.8309","35.8400x001","35.8400x002","35.8400x003","35.9101","35.9102","35.9200x001","35.9200x003","35.9200x004","35.9200x005","35.9201","35.9202","35.9300x002","35.9300x003","35.9300x005","35.9301","35.9302","35.9400x003","35.9400x004","35.9400x005","35.9400x006","35.9401","35.9402","35.9500x001","35.9500x003","35.9500x004","35.9500x005","35.9501","35.9900x001","35.9900x002","36.0300x002","36.0300x003","36.0300x006","36.0301","36.0302","36.0303","36.1000x001","36.1000x002","36.1100","36.1200","36.1300","36.1400","36.1500","36.1600","36.1700x001","36.1900x001","36.2x00","36.3100x001","36.3900x001","36.3901","36.9100","36.9900x002","36.9902","36.9903","37.0x00x002","37.0x00x003","37.0x01","37.1000x004","37.1000x007","37.1000x008","37.1100x004","37.1100x005","37.1100x006","37.1100x007","37.1100x008","37.1100x009","37.1101","37.1102","37.1103","37.1104","37.1200x005","37.1200x008","37.1200x009","37.1200x010","37.1200x011","37.1201","37.1202","37.1203","37.1204","37.2400","37.2401","37.2501","37.3100x006","37.3101","37.3102","37.3103","37.3104","37.3201","37.3202","37.3300x006","37.3300x008","37.3300x009","37.3300x020","37.3300x021","37.3300x024","37.3300x026","37.3301","37.3304","37.3305","37.3307","37.3500x005","37.3501","37.3502","37.3600x001","37.4900x001","37.4900x002","37.4900x005","37.4900x007","37.4900x014","37.4903","37.5200x001","37.6200x002","37.6301","37.6500x001","37.6600x001","37.6600x002","37.9100","38.0300x003","38.0301","38.0302","38.0400x001","38.0400x002","38.0401","38.0500x002","38.0501","38.0502","38.0503","38.0504","38.0600x001","38.0602","38.0700x001","38.0700x003","38.0701","38.0702","38.0703","38.0704","38.0705","38.0800x002","38.0800x003","38.0801","38.0802","38.0900x001","38.0900x002","38.0901","38.0902","38.1000x002","38.1400x001","38.1401","38.1402","38.1500x001","38.1501","38.1600x002","38.1600x005","38.1601","38.1602","38.1603","38.1800x001","38.1800x002","38.1800x003","38.1800x004","38.1800x005","38.1800x006","38.1800x007","38.1801","38.1802","38.1803","38.1804","38.3000","38.3000x001","38.3301","38.3400x003","38.3401","38.3501","38.3800","38.4300x001","38.4400x001","38.4400x002","38.4401","38.4500x001","38.4500x002","38.4500x003","38.4500x004","38.4500x007","38.4500x009","38.4500x011","38.4500x013","38.4500x014","38.4500x015","38.4500x016","38.4500x017","38.4500x017","38.4503","38.4504","38.4506","38.4507","38.4600x001","38.4600x003","38.4602","38.4700x001","38.4701","38.4702","38.4800x001","38.4800x002","38.4801","38.4802","38.4803","38.4804","38.4805","38.4900x001","38.4900x002","38.5900x003","38.5900x005","38.5900x008","38.5901","38.5902","38.5903","38.5905","38.5906","38.6000x011","38.6000x012","38.6000x013","38.6300x001","38.6302","38.6400x001","38.6500x001","38.6500x002","38.6500x003","38.6500x004","38.6500x006","38.6700x003","38.6701","38.6702","38.6704","38.6800x002","38.6801","38.6802","38.6901","38.8300x004","38.8301","38.8302","38.8500x001","38.8500x012","38.8500x013","38.8500x016","38.8500x019","38.8501","38.8502","38.8503","38.8504","38.8600x004","38.8600x005","38.8601","38.8602","38.8603","38.8604","38.8605","38.8606","38.8700x001","38.8700x009","38.8704","38.8800x002","38.8801","38.8901","38.9400","39.0x01","39.0x02","39.0x03","39.0x05","39.1x00x006","39.1x00x008","39.1x00x009","39.1x00x010","39.1x00x011","39.1x00x012","39.1x00x013","39.1x01","39.1x03","39.1x05","39.1x07","39.1x10","39.2100x001","39.2100x003","39.2100x004","39.2100x005","39.2100x006","39.2100x007","39.2200x001","39.2200x003","39.2200x005","39.2200x006","39.2200x008","39.2200x009","39.2200x011","39.2200x012","39.2200x014","39.2200x015","39.2200x016","39.2200x019","39.2200x021","39.2300x003","39.2300x004","39.2300x005","39.2300x017","39.2300x018","39.2300x019","39.2300x020","39.2300x021","39.2301","39.2302","39.2303","39.2304","39.2305","39.2306","39.2307","39.2308","39.2401","39.2500x001","39.2500x002","39.2500x003","39.2500x004","39.2500x005","39.2500x006","39.2500x007","39.2500x008","39.2500x009","39.2500x011","39.2500x012","39.2500x013","39.2600x001","39.2600x002","39.2600x003","39.2600x004","39.2600x006","39.2600x007","39.2600x008","39.2600x009","39.2605","39.2700x001","39.2700x002","39.2700x003","39.2700x004","39.2900x001","39.2900x002","39.2900x003","39.2900x004","39.2900x005","39.2900x011","39.2900x013","39.2900x015","39.2900x017","39.2900x019","39.2900x024","39.2900x025","39.2900x026","39.2900x027","39.2900x028","39.2900x031","39.2900x032","39.2900x033","39.2900x034","39.2900x035","39.2900x036","39.2900x037","39.2900x038","39.2900x039","39.2900x041","39.2900x042","39.2900x043","39.2900x044","39.2900x045","39.2900x046","39.2900x047","39.2900x048","39.2900x049","39.2902","39.2906","39.2907","39.2908","39.2915","39.2916","39.3100x002","39.3100x004","39.3100x006","39.3200x004","39.3200x006","39.3201","39.3203","39.3206","39.3207","39.4100x001","39.4200x001","39.4200x002","39.4200x003","39.4900x001","39.4900x004","39.4900x005","39.4900x006","39.4903","39.4904","39.5200x002","39.5200x003","39.5200x005","39.5200x006","39.5201","39.5300x011","39.5300x015","39.5300x016","39.5300x017","39.5300x018","39.5302","39.5303","39.5304","39.5400x001","39.5601","39.5602","39.5700x003","39.5701","39.5702","39.5900x001","39.5900x002","39.5900x003","39.5900x004","39.5900x005","39.5900x007","39.5900x008","39.5900x009","39.5900x011","39.5900x012","39.5900x014","39.5900x015","39.5900x016","39.5900x018","39.5900x019","39.5900x021","39.5900x022","39.5900x023","39.5900x024","39.5900x025","39.5900x026","39.5900x027","39.5900x028","39.5900x029","39.5900x031","39.7800x008","39.7900x402","39.9000x022","39.9000x027","39.9100x003","40.9x00x004"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ageDay<=28){
        putMessage('符合PB1入组条件，匹配规则：主手术匹配、新生儿');
        let drg=new MDCP_DRG();
        
        if (drg.PB19_group(record)){
            return 'PB19';
        }

        return 'PB1';
    }else{
        return '';
    }
}
  