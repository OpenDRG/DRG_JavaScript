import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FU1_group(record){
    let adrg_zd=["I44.100","I44.101","I44.102","I44.200","I44.201","I44.300x003","I45.300","I45.500x002","I45.500x004","I45.500x005","I45.501","I45.502","I45.600","I45.600x003","I45.600x004","I45.600x005","I45.600x007","I45.601","I45.602","I45.901","I46.000","I46.100x001","I46.901","I47.200","I47.200x001","I47.200x003","I47.200x005","I47.200x006","I47.200x007","I47.200x008","I47.200x009","I47.200x010","I47.200x011","I47.200x013","I47.200x014","I47.201","I47.202","I47.203","I47.204","I47.204","I49.001","I49.002","I49.300x005","I49.302","I49.800x016","I49.805","R00.300","R94.300x011","R96.000x001","R96.001","T82.703","Z45.001","Z45.002","Z45.003","Z45.005","Z45.006","Z45.800x006"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FU1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FU11_group(record)){
            return 'FU11';
        }

        if (drg.FU13_group(record)){
            return 'FU13';
        }

        if (drg.FU15_group(record)){
            return 'FU15';
        }

        if (drg.FU17_group(record)){
            return 'FU17';
        }

        return 'FU1';
    }else{
        return '';
    }
}
  