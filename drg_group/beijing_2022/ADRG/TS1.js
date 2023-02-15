import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TS1_group(record){
    let adrg_zd=["F25.000","F25.000x001","F25.100","F25.100x001","F25.200","F25.200x001","F25.200x002","F25.800","F25.900","F29.x00","F30.000","F30.100","F30.100x001","F30.200","F30.200x001","F30.200x002","F30.201","F30.800x002","F30.900","F30.901","F31.000","F31.100","F31.200","F31.300x002","F31.300x003","F31.300x005","F31.300x011","F31.300x012","F31.301","F31.400","F31.500","F31.600","F31.700","F31.800x001","F31.800x002","F31.800x003","F31.801","F31.802","F31.803","F31.900","F31.901","F31.902","F32.000x002","F32.000x011","F32.100x002","F32.100x011","F32.200","F32.300","F32.301","F32.800x001","F32.800x002","F32.801","F32.802","F32.900","F32.901","F32.902","F33.000","F33.000x002","F33.000x011","F33.100","F33.100x002","F33.100x011","F33.200","F33.300","F33.400","F33.800","F33.900","F34.800","F34.900","F38.000x001","F38.001","F38.100x001","F38.100x002","F38.800","F39.x00","R45.801"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合TS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCT_DRG();
                
        if (drg.TS13_group(record)){
            return 'TS13';
        }        if (drg.TS15_group(record)){
            return 'TS15';
        }
        return 'TS1';
    }else{
        return '';
    }
}
  