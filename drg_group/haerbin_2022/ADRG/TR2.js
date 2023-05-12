import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TR2_group(record){
    let adrg_zd=["F22.000","F22.001","F22.002","F22.003","F22.800","F22.800x001","F22.900","F23.000","F23.001","F23.002","F23.200x003","F23.200x011","F23.300x001","F23.300x002","F23.300x003","F23.301","F23.800","F23.900","F23.901","F23.902","F23.903","F24.x00","F28.x00x002","F28.x00x011","F28.x00x012","F28.x01","F28.x02"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合TR2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCT_DRG();
        
        if (drg.TR29_group(record)){
            return 'TR29';
        }

        return 'TR2';
    }else{
        return '';
    }
}
  