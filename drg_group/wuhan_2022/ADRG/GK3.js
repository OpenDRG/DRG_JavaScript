import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GK3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["45.4200x003","45.4200x003","45.4201","45.4300x008","45.4300x009","45.4300x012","45.4300x013","45.4301","45.4302","45.4303","45.4304","45.4305","45.4306","45.4307","46.8500x008","46.8500x009","46.8511","46.8600","46.9601","46.9602","48.3200x001","48.3200x003","48.3201","48.3301","48.3600x001","48.3600x002","48.3602","48.9900x005","97.5900x001","98.0303","98.0401","98.0500x003"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GK3入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GK39_group(record)){
            return 'GK39';
        }

        return 'GK3';
    }else{
        return '';
    }
}
  