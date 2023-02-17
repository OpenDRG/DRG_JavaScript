import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["31.5x00x012","31.5x00x013","31.5x00x014","31.5x01","31.5x02","31.5x03","31.5x04","31.7100x001","31.7301","31.7500x002","31.7500x004","31.7503","31.7900x005","31.7901","31.7902","31.7903","31.7904","32.1x00x004","32.1x01","32.1x02","32.1x03","32.1x04","32.2000x002","32.2000x003","32.2001","32.2002","32.2003","32.2004","32.2100","32.2100x001","32.2100x005","32.2101","32.2200","32.2201","32.2300x001","32.2700x001","32.2900x016","32.2901","32.2902","32.2903","32.2904","32.2905","32.3001","32.3900x003","32.3901","32.3902","32.4100","32.4100x002","32.4101","32.4900x002","32.4900x003","32.4901","32.4902","32.4903","32.5000x001","32.5001","32.5900x001","32.5901","32.6x00x002","32.6x00x004","33.3400","33.3401","33.3402","33.3403","33.3901","33.3902","33.3903","33.4100","33.4100x002","33.4200x001","33.4201","33.4300x002","33.4801","33.4802","33.4803","33.4804","33.4805","33.4901","33.4902","34.5100x004","34.5100x005","34.5101","34.5200","34.5901","34.5903","34.7300x001","34.7301","34.7303","34.7400x001","34.7400x005","34.7400x007","34.7400x008","34.7400x009","34.7400x010","34.7401","34.7402","34.7403","34.9301","37.2400","38.0500x002","38.0501","38.0503","38.1500x001","38.1501","38.3500x002","38.3501","38.4500x001","38.4500x002","38.4500x003","38.4500x010","38.4500x011","38.4500x013","38.4500x014","38.4503","38.4506","38.4510","38.6500x001","38.8500x001","38.8500x012","38.8500x013","38.8502","39.2300x003","39.5400x001","39.5900x002","39.5900x015","39.5900x031","39.7900x014","40.5000","40.5100","40.5101","40.5200","40.5900x012","40.5903","40.5904","40.5905","40.5913","40.6301","53.8000x001","53.8001","53.8002"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合EB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCE_DRG();
                
        if (drg.EB19_group(record)){
            return 'EB19';
        }
        return 'EB1';
    }else{
        return '';
    }
}
  