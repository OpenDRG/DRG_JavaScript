import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FM3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.2400x001","00.5601","00.5602","00.5700","00.5900x003","00.5901","00.5902","37.2000","37.2000x003","37.2100","37.2200","37.2300","37.2600x001","37.2700","37.2901","38.2400","38.2601","38.2602","88.5000","88.5201","88.5202","88.5301","88.5302","88.5400x001","88.5500x002","88.5600x002","88.5700x003","88.5701","88.5800","88.5900","88.5500","88.5600"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FM3入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FM31_group(record)){
            return 'FM31';
        }

        if (drg.FM35_group(record)){
            return 'FM35';
        }

        return 'FM3';
    }else{
        return '';
    }
}
  