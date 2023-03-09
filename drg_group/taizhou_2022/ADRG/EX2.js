import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EX2_group(record){
    let adrg_zd=["A36.201","A37.000","A37.100","A37.800x001","A37.900","A37.900x003","A37.900x004","A37.901+J17.0*","J20.000","J20.100","J20.200","J20.300","J20.400","J20.500","J20.600","J20.700","J20.800","J20.900","J20.901","J20.902","J21.000","J21.100","J21.801","J21.900","J21.900x002","J21.901","J39.803","J40.x00","J40.x00x002","J40.x01","J44.800x001","T17.501"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合EX2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCE_DRG();
        
        if (drg.EX29_group(record)){
            return 'EX29';
        }

        return 'EX2';
    }else{
        return '';
    }
}
  