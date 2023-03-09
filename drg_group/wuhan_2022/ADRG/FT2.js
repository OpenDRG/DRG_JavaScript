import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FT2_group(record){
    let adrg_zd=["A18.820+I39.8*","A32.802+I39.8*","A39.502+I39.8*","A39.504+I52.0*","A52.006+I39.8*","A54.802+I39.8*","B33.200x002+I39.8*","B37.600+I39.8*","I33.000x001","I33.000x004","I33.000x006","I33.000x007","I33.000x008","I33.000x011","I33.000x012","I33.000x019","I33.000x020","I33.000x021","I33.000x022","I33.000x024","I33.001","I33.002","I33.003","I33.004","I33.005","I33.006","I33.007","I33.900"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FT2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FT29_group(record)){
            return 'FT29';
        }

        return 'FT2';
    }else{
        return '';
    }
}
  