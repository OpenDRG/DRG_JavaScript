import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FM2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.0200x001","00.6600x004","00.6601","17.5500x002","17.5500x003","17.5501","35.5200x001","35.5200x002","35.5500x001","35.5502","36.0400","36.3400","36.9900x011","36.9900x012","36.9901","37.2800","37.3500x004","37.9000x001","37.9300x001","37.9900x003","39.4901","39.4902","39.5000x011","39.5000x021","39.5006","39.7100x004","39.7101","39.7102","39.7103","39.7300x003","39.7300x004","39.7302","39.7800x001","39.7800x002","39.7900x003","39.7900x035","39.9000x022","39.9000x026","39.9000x027","39.9000x037","39.9005","39.9010"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FM2入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FM21_group(record)){
            return 'FM21';
        }

        if (drg.FM23_group(record)){
            return 'FM23';
        }

        if (drg.FM25_group(record)){
            return 'FM25';
        }

        return 'FM2';
    }else{
        return '';
    }
}
  