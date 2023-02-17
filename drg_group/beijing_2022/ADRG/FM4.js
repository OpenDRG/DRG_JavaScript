import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FM4_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.5500x008","38.7x03","38.7x04","38.9300x004","38.9300x005","39.5000x011","39.5000x014","39.5000x015","39.5000x021","39.5000x027","39.5000x034","39.5000x035","39.5000x036","39.5000x037","39.5003","39.5010","39.5012","39.7100x004","39.7101","39.7102","39.7103","39.7300x003","39.7301","39.7302","39.7303","39.7701","39.7800x001","39.7800x002","39.7800x006","39.7800x010","39.7900x011","39.7900x030","39.7900x031","39.7900x035","39.7900x035","39.7900x041","39.7900x517","39.9000x022","39.9000x027","39.9000x037","39.9000x038","39.9002","39.9005","39.9010","99.1000x006","99.1000x011"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FM4入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FM49_group(record)){
            return 'FM49';
        }
        return 'FM4';
    }else{
        return '';
    }
}
  