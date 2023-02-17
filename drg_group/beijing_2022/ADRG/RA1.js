import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RA1_group(record){
    let adrg_zd=["C45.706","C45.900","C46.300","C46.700","C46.800","C46.900","C46.900x002","C46.900x003","C46.900x004","C49.901","C76.101","C76.200x002","C76.300","C76.302","C76.305","C76.306","C76.700","C76.700x002","C76.800","C76.801","C77.107","C77.200","C77.202","C77.205","C77.206","C77.300","C77.300x001","C77.300x003","C77.301","C77.302","C77.303","C77.400x001","C77.401","C77.500","C77.501","C77.502","C77.503","C77.800","C77.900","C77.900x001","C78.604","C78.605","C79.800x804","C79.800x811","C79.800x816","C79.800x818","C79.800x837","C79.800x862","C79.811","C79.826","C79.829","C79.900","C79.900x001","C80.000","C80.000x001","C80.001","C80.900","C80.901","C80.902","C80.903","C80.904","C80.905","C81.000","C81.100","C81.200","C81.300","C81.400","C81.700","C81.701","C81.702","C81.703","C81.900","C81.900x005","C82.000","C82.100","C82.200","C82.300","C82.400","C82.500","C82.600","C82.700","C82.701","C82.702","C82.703","C82.704","C82.900","C82.901","C82.903","C83.000","C83.001","C83.002","C83.003","C83.004","C83.100","C83.101","C83.102","C83.300","C83.300x006","C83.300x007","C83.300x008","C83.300x009","C83.301","C83.302","C83.303","C83.304","C83.305","C83.306","C83.307","C83.500","C83.501","C83.502","C83.503","C83.504","C83.505","C83.700","C83.702","C83.703","C83.800","C83.800x006","C83.800x008","C83.800x009","C83.801","C83.802","C83.803","C83.900","C84.000","C84.000x002","C84.000x003","C84.100","C84.400","C84.400x001","C84.401","C84.402","C84.403","C84.404","C84.405","C84.406","C84.407","C84.500","C84.500x004","C84.500x012","C84.500x016","C84.502","C84.600","C84.601","C84.700","C84.800","C84.900","C84.901","C85.100","C85.100x010","C85.100x017","C85.100x021","C85.200","C85.700","C85.700x004","C85.700x016","C85.701","C85.704","C85.705","C85.707","C85.709","C85.715","C85.900","C85.900x001","C85.900x002","C85.900x003","C85.900x004","C85.900x005","C85.900x006","C85.900x008","C85.900x009","C85.900x010","C85.900x011","C85.900x012","C85.900x013","C85.900x014","C85.900x015","C85.900x016","C85.900x017","C85.900x019","C85.900x020","C85.900x022","C85.900x023","C85.900x024","C85.900x025","C85.900x026","C85.900x027","C85.900x028","C85.900x029","C85.900x030","C85.900x031","C85.900x034","C85.900x036","C85.900x037","C85.900x038","C85.900x039","C85.900x040","C85.900x041","C85.900x042","C85.900x043","C85.901","C86.000","C86.100","C86.200","C86.300","C86.400","C86.500","C86.600","C86.601","C86.602","C86.603","C88.000","C88.000x002","C88.000x011","C88.000x012","C88.200","C88.200x011","C88.200x012","C88.201","C88.202","C88.203","C88.300","C88.301","C88.302","C88.400","C88.401","C88.402","C88.403","C88.700","C88.700x002","C88.700x003","C88.700x012","C88.700x013","C88.701","C88.900","C88.900x001","C90.000","C90.000x004","C90.000x005","C90.000x008+M90.6*","C90.000x009","C90.000x011","C90.000x012","C90.000x014","C90.000x021","C90.000x022","C90.000x023","C90.000x024","C90.000x025","C90.000x026","C90.000x027","C90.000x028","C90.000x029","C90.000x030","C90.000x031","C90.000x032","C90.000x033","C90.000x034","C90.000x035","C90.000x036","C90.000x037","C90.000x038","C90.000x039","C90.000x040","C90.000x041","C90.001","C90.002","C90.100","C90.100x002","C90.100x011","C90.200","C90.200x008","C90.200x009","C90.200x013","C90.300","C90.300x001","C90.300x002","C90.300x003","C90.300x004","C90.301","C90.302","C90.303","C96.000","C96.002","C96.004","C96.200","C96.200x005","C96.200x013","C96.201","C96.202","C96.400","C96.400x001","C96.400x002","C96.400x003","C96.400x004","C96.401","C96.402","C96.403","C96.500","C96.501","C96.502","C96.600","C96.601","C96.602","C96.603","C96.604","C96.700","C96.704","C96.705","C96.800","C96.801","C96.900","C97.x00","C97.x01","D09.700","D09.700x001","D09.900","D19.700","D45.x00","D46.001","D46.100","D46.100x002","D46.100x012","D46.200","D46.201x001","D46.203","D46.400","D46.500","D46.600","D46.700","D46.700x001","D46.700x002","D46.700x003","D46.700x006","D46.700x007","D46.700x008","D46.900","D46.900x002","D46.900x004","D46.900x006","D46.901","D47.000","D47.001","D47.002","D47.003","D47.004","D47.100","D47.100x004","D47.100x007","D47.100x008","D47.100x009","D47.100x017","D47.100x018","D47.100x019","D47.101","D47.200","D47.200x003","D47.200x004+G63.1*","D47.200x005+G63.1*","D47.300","D47.400","D47.401","D47.402","D47.403","D47.404","D47.500","D47.700","D47.700x005","D47.700x006","D47.700x007","D47.701","D47.702","D47.703","D47.900","D47.900x001","D47.900x002","D48.700x001","D48.700x015","D48.700x023","D48.707","D48.708","D48.715","D48.716","D48.722","D48.723","D48.725","D48.900","D48.901","D48.902","D89.801","Q85.802","Q85.909"];
    let adrg_zd1=[];
    let adrg_ss=["00.7000x001","00.7100x001","00.7200x001","01.2500x003","01.2502","01.2503","01.2504","01.2507","01.4101","01.4102","01.4103","01.4104","01.4105","01.4201","01.4202","01.4203","01.4204","01.5100x001","01.5100x006","01.5100x007","01.5105","01.5106","01.5200","01.5301","01.5302","01.5303","01.5900x022","01.5900x030","01.5900x032","01.5900x036","01.5900x037","01.5900x038","01.5900x040","01.5900x041","01.5900x043","01.5900x044","01.5900x048","01.5900x049","01.5900x050","01.5901","01.5902","01.5903","01.5904","01.5905","01.5906","01.5907","01.5908","01.5909","01.5910","01.5911","01.5912","01.5913","01.5914","01.5915","01.5916","01.5917","01.5918","01.5920","01.5922","01.5923","01.5924","01.5925","01.5927","01.5928","01.5935","01.5940","01.6x00","01.6x01","02.2102","02.2200x001","02.2200x005","02.2204","02.2206","02.2207","02.2210","02.3102","02.3103","02.3200x001","02.3201","02.3202","02.3203","02.3204","02.3300x001","02.3301","02.3400x002","02.3401","02.3402","02.3403","02.3404","02.3405","02.3501","02.3502","02.3901","02.4200x005","02.4201","02.4202","02.4203","02.4204","02.4301","02.4302","02.9100","02.9301","03.0200","03.0900x003","03.0900x004","03.0900x005","03.0900x006","03.0900x007","03.0900x009","03.0900x010","03.0900x014","03.0900x016","03.0900x019","03.0900x021","03.0901","03.0903","03.1x00x001","03.1x00x003","03.1x01","03.1x02","03.2100x001","03.2101","03.2900x003","03.2900x004","03.2900x005","03.2901","03.2902","03.4x00x002","03.4x00x004","03.4x00x007","03.4x02","03.5300x001","03.5301","03.5302","03.5303","03.5304","03.5305","03.7100","03.7101","03.7200","03.7900x002","03.7901","03.7902","03.7904","03.7905","03.7906","03.9201","03.9202","03.9302","03.9500","03.9600","03.9700x001","03.9900x003","07.8000","07.8001","07.8100","07.8100x009","07.8101","07.8201","07.8300","07.8300x002","07.8400","07.8401","07.9100","07.9200x001","07.9300","07.9400","07.9500","07.9800","07.9901","17.3200","17.3200x001","17.3300","17.3300x002","17.3400","17.3401","17.3500","17.3500x001","17.3600","17.3600x001","17.3900x002","17.3900x003","17.3901","25.3x00","25.4x00x001","27.7200","27.7201","32.2000x002","32.2000x003","32.2001","32.2003","32.2004","32.2100x001","32.2100x005","32.2200","32.2200x004","32.2201","32.2300x001","32.2801","32.2802","32.2803","32.2804","32.2900x005","32.2900x016","32.2901","32.2902","32.2903","32.2904","32.2905","32.3001","32.3900x003","32.3901","32.3902","32.4100","32.4100x002","32.4900x003","32.4901","32.4902","32.4903","32.5000x001","32.5001","32.5900x001","32.5901","32.6x00x002","32.6x00x004","34.0200x003","34.3x01","34.3x02","34.3x03","34.3x04","34.3x05","34.4x00x008","34.4x01","34.4x02","34.4x03","34.5101","34.6x00","34.6x01","34.6x02","37.1200x005","37.1200x008","37.1201","37.1203","37.1204","37.3101","37.3102","37.3103","38.0800x003","40.0x00x002","40.2900x023","40.2905","40.2907","40.2909","40.3x00x001","40.3x00x003","40.3x00x005","40.4000x003","40.4100","40.4200","40.5000","40.5100","40.5101","40.5200","40.5300","40.5301","40.5400x001","40.5400x002","40.5400x003","40.5900x010","40.5901","40.5905","40.5906","40.5907","40.5908","40.5909","40.5910","40.5911","40.5912","40.5914","40.9x00x003","40.9x00x004","40.9x00x005","40.9x00x006","40.9x00x007","40.9x00x008","40.9x00x009","40.9x00x010","40.9x00x011","40.9x00x012","40.9x00x013","40.9x00x014","40.9x00x015","40.9x00x016","40.9x00x017","40.9x01","40.9x02","40.9x03","40.9x04","40.9x05","40.9x06","40.9x07","40.9x08","40.9x09","41.2x01","41.2x02","41.2x03","41.4200x002","41.4300","41.4301","41.5x00","41.5x01","41.9300","41.9301","41.9400","41.9501","41.9502","41.9503","41.9504","42.3300x007","42.4100","42.4100x008","42.4101","42.4102","42.4103","42.4104","42.4201","42.4202","42.4203","42.5100","42.5200","42.5200x005","42.5201","42.5202","42.5300x001","42.5500x001","42.5801","42.5802","42.5803","42.5900x001","42.6100","42.6200","42.6300","42.6400x002","42.6401","42.6402","42.6403","42.6500","42.6601","42.7x00x001","42.7x01","42.7x02","42.7x04","42.8100","42.8101","42.8200","42.8300","42.8400","42.8501","42.8502","42.9200x007","43.0x03","43.5x00x003","43.5x00x007","43.5x01","43.5x02","43.5x03","43.6x00x005","43.6x00x006","43.6x01","43.6x02","43.7x00x001","43.7x01","43.7x02","43.7x03","43.8100","43.8201","43.8202","43.8901","43.8902","43.8903","43.9101","43.9102","43.9900x002","43.9900x003","43.9900x004","43.9901","43.9903","43.9905","44.3200x001","44.3201","44.3801","44.3802","44.3803","44.3804","44.3900x003","44.3901","44.3902","44.3903","44.3904","44.6300x001","45.0203","45.0300x002","45.0302","45.3101","45.3102","45.3200x001","45.3300x006","45.3301","45.3303","45.4100x001","45.4101","45.4102","45.4103","45.4104","45.4105","45.4107","45.4108","45.4900x001","45.4900x003","45.4900x005","45.4901","45.6100","45.6200x001","45.6200x002","45.6201","45.6202","45.6203","45.6204","45.6205","45.6206","45.6207","45.6208","45.6300","45.7100x001","45.7200x002","45.7200x004","45.7202","45.7300x003","45.7300x006","45.7300x007","45.7301","45.7302","45.7304","45.7400x003","45.7401","45.7500","45.7500x001","45.7501","45.7600x008","45.7601","45.7900x002","45.7901","45.8100","45.8200","45.9100x006","45.9100x008","45.9103","45.9104","45.9200","45.9300x012","45.9300x013","45.9300x014","45.9300x015","45.9301","45.9302","45.9303","45.9304","45.9305","45.9306","45.9307","45.9310","45.9400x004","45.9400x009","45.9400x012","45.9400x016","45.9401","45.9402","45.9403","45.9404","45.9405","45.9406","45.9407","45.9408","45.9501","45.9502","45.9503","45.9504","46.0100x001","46.0101","46.0102","46.0300x001","46.0300x003","46.0300x004","46.0301","46.0302","46.0400x002","46.0401","46.8101","46.8102","46.8201","46.8202","48.3501","48.3502","48.3504","48.3505","48.4101","48.4102","48.4103","48.4104","48.4105","48.4106","48.4900x002","48.4900x003","48.4901","48.4902","48.4903","48.4904","48.4905","48.5100","48.5100x002","48.5200","48.5201","48.5900x001","48.6100","48.6100x001","48.6100x002","48.6200","48.6201","48.6301","48.6302","48.6303","48.6400x001","48.6500x001","48.6900x002","48.6900x004","48.6900x007","48.6901","48.6902","48.6903","48.6904","48.6905","48.6906","48.6907","48.6908","48.6909","48.6910","48.6911","48.6912","48.6913","48.7401","50.2200","50.2200x003","50.2200x004","50.2200x005","50.2200x006","50.2200x007","50.2200x008","50.2200x009","50.2201","50.2202","50.2203","50.2204","50.2205","50.2206","50.2501","50.2502","50.2503","50.2902","50.2904","50.2905","50.2908","50.2909","50.3x01","50.3x02","50.3x03","50.3x04","50.3x05","50.3x06","50.4x00","50.6101","50.6900x002","50.6901","51.2100","51.2200","51.2200x004","51.2201","51.2300","51.2301","51.2400","51.2401","51.3100","51.3201","51.3202","51.3203","51.3204","51.3400","51.3601","51.3602","51.3700x001","51.3700x002","51.3700x003","51.3700x007","51.3701","51.3702","51.3703","51.3704","51.3900x005","51.3900x008","51.3901","51.3902","51.3903","51.3904","51.3905","51.3906","51.3907","51.4100x001","51.4201","51.4202","51.4301","51.4302","51.4303","51.4304","51.4900x002","51.4901","51.4902","51.5100","51.5101","51.5102","51.5900x001","51.5900x005","51.5900x006","51.5900x008","51.5900x009","51.5901","51.5902","51.5903","51.5904","51.6100x001","51.6200x002","51.6301","51.6303","51.6400x002","51.6900x007","51.6900x008","51.6900x012","51.6900x013","51.6901","51.6903","51.6904","51.9300x001","51.9301","51.9302","51.9303","51.9304","51.9305","51.9401","52.0902","52.1302","52.2101","52.2102","52.5100x001","52.5101","52.5102","52.5103","52.5104","52.5201","52.5202","52.5203","52.5204","52.5205","52.5206","52.5300","52.5301","52.5901","52.5902","52.5903","52.5904","52.5905","52.5906","52.6x00","52.6x00x003","52.6x01","52.7x00","52.7x00x003","52.7x01","52.9500x001","52.9500x002","52.9501","52.9504","52.9601","52.9602","54.1101","54.1201","54.1202","54.1900x001","54.1900x005","54.1900x010","54.1900x011","54.1901","54.1902","54.1903","54.1904","54.1907","54.1909","54.3x06","54.4x00x005","54.4x00x006","54.4x00x007","54.4x00x012","54.4x00x021","54.4x00x035","54.4x00x039","54.4x00x042","54.4x00x047","54.4x00x048","54.4x00x050","54.4x01","54.4x02","54.4x03","54.4x04","54.4x05","54.4x06","54.4x07","54.4x08","54.4x09","54.4x10","54.4x11","54.4x12","54.4x13","54.4x14","54.4x15","54.4x16","54.5100","54.5100x005","54.5100x009","54.5101","54.5102","54.5103","54.5900x007","54.5901","54.5902","54.5903","54.5904","54.5905","54.7300x001","54.7301","54.7302","54.7400x001","54.7400x002","54.7400x003","54.7400x004","54.7400x005","54.7400x006","54.7401","54.7402","54.7403","54.7404","54.7405","54.7500x002","54.7501","54.7502","54.9400x002","54.9401","54.9402","54.9500x004","54.9501","54.9502","54.9900x010","54.9900x011","54.9904","55.3100","55.3400x001","55.3900x001","55.3900x003","55.3901","55.3902","55.3903","55.4x00","55.4x01","55.4x02","55.4x03","55.4x04","55.4x05","55.5100","55.5101","55.5102","55.5103","55.5104","55.5105","55.5106","55.5200","55.5201","55.5300x001","55.5400","55.5401","56.4100x009","56.4100x011","56.4101","56.4105","56.4200","56.7101","56.7103","56.7200","56.7400","56.8900x001","56.8900x006","56.8901","56.8902","56.8907","56.8908","56.8909","57.4900x001","57.4901","57.4902","57.5900x001","57.5901","57.5902","57.5903","57.7100","57.7101","57.7102","57.7103","57.7900x001","57.7901","57.8100","57.8301","57.8302","57.8303","57.8304","57.8305","57.8400x004","57.8400x005","57.8401","57.8402","57.8404","57.8500x002","57.8501","57.8600","57.8700x005","57.8700x006","57.8700x007","57.8700x008","57.8700x009","57.8701","57.8704","57.8706","57.8707","57.8801","57.8802","57.8900x001","59.0200x007","59.0300x002","59.9101","62.4101","62.4102","65.2501","65.2505","65.2901","65.2903","65.2906","65.5100x001","65.5300","65.6300","67.3903","67.4x00x002","67.4x00x005","67.4x01","67.4x02","68.2900x035","68.2901","68.2906","68.2907","68.2912","68.2918","68.3100x002","68.3101","68.3102","68.3104","68.3105","68.3106","68.3900x003","68.3901","68.3902","68.3903","68.3904","68.3907","68.4100","68.4101","68.4102","68.4103","68.4104","68.4900x004","68.4900x006","68.4901","68.4902","68.4903","68.4905","68.5100x004","68.5100x005","68.5101","68.5102","68.5103","68.5900x002","68.5901","68.5902","68.6100x001","68.6100x002","68.6101","68.6900x001","68.6900x002","68.6901","68.6902","68.7100x001","68.7900x003","68.7901","68.8x01","70.5305","70.7200","70.7300","70.7400x001","70.7401","71.5x00x001","71.5x00x003","71.5x00x004","71.6100","71.6200","71.7900x010","71.7900x011","86.9600x003"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0]) && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RA1入组条件，匹配规则：主诊断匹配、主手术匹配');
        let drg=new MDCR_DRG();
                
        if (drg.RA11_group(record)){
            return 'RA11';
        }        if (drg.RA15_group(record)){
            return 'RA15';
        }
        return 'RA1';
    }else{
        return '';
    }
}
  