import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["16.5200","16.5900x001","16.5902","34.7400x001","34.7400x005","34.7400x007","34.7400x008","34.7400x009","34.7400x010","34.7401","34.7402","34.7403","34.7900x001","34.7900x002","34.7900x003","34.7900x004","34.8101","34.8102","39.9801","40.2900x019","76.1100","77.0101","77.0102","77.0103","77.0104","77.1003","77.1103","77.1104","77.2100x001","77.2100x002","77.2101","77.2102","77.2103","77.2104","77.3001","77.3103","77.3104","77.4101","77.4102","77.4103","77.4104","77.4200","77.4301","77.4302","77.4401","77.4402","77.4500","77.4600","77.4701","77.4702","77.4801","77.4802","77.4900x004","77.4900x005","77.4900x006","77.4900x007","77.4901","77.4902","77.4903","77.4904","77.5400x001","77.6100x008","77.6101","77.6102","77.6103","77.6104","77.7101","77.7102","77.8100x007","77.8100x009","77.8101","77.8102","77.8103","77.8104","77.8105","77.8106","77.8107","77.9101","77.9102","77.9103","77.9104","77.9105","77.9106","78.0000x003","78.0100x002","78.0101","78.0102","78.0103","78.0104","78.1101","78.1102","78.1103","78.1104","78.2001","78.2002","78.2003","78.3000","78.4101","78.4104","78.4105","78.4106","78.5100x003","78.5100x004","78.5100x005","78.5100x006","78.5100x007","78.5100x009","78.5100x010","78.5100x011","78.5100x012","78.5100x013","78.5100x014","78.5100x015","78.5100x016","78.5100x017","78.5100x018","78.5102","78.5103","78.5104","78.7101","78.7102","78.7103","78.7104","78.9100","78.9900x001","79.1900x006","79.1900x007","79.1900x008","79.1900x009","79.1901","79.1902","79.2901","79.3900x028","79.3900x030","79.3900x034","79.3900x036","79.3900x040","79.3900x041","79.3900x042","79.3900x044","79.3900x049","79.3900x051","79.3900x053","79.3900x054","79.3903","79.3904","79.3905","79.4900","79.5900","79.6000","79.7000","79.9000","79.9900","80.1900","80.2000","80.2100","80.2200","80.2300","80.2401","80.2500","80.2600","80.2700","80.2801","80.2900","80.3000","80.3100","80.3200","80.3300","80.3401","80.3500","80.3600","80.3700","80.3800","80.3901","80.3902","80.9900x004","81.5900","81.9101","81.9201","81.9202","81.9800","81.9900","82.0300","82.3100","82.8900x003","82.9300x001","83.0300","83.0301","83.0902","83.0903","83.0904","83.1904","83.3900x001","83.3900x016","83.3900x017","83.3902","83.3904","83.4900","83.5x00","83.9400","83.9600","83.9800x001","83.9901","84.2900","84.3x00","84.4400","84.4800","84.5200","84.5300","84.5400x001","84.5500x003","84.5500x004","84.5500x005","84.5501","84.5600x001","84.5601","84.5700x001","84.7100x001","84.7200x001","84.7300x001","84.9200","84.9300","84.9400","84.9900"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合IJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCI_DRG();
                
        if (drg.IJ11_group(record)){
            return 'IJ11';
        }        if (drg.IJ1B_group(record)){
            return 'IJ1B';
        }
        return 'IJ1';
    }else{
        return '';
    }
}
  