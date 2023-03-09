import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TV1_group(record){
    let adrg_zd=["F40.000","F40.100","F40.200x001","F40.200x002","F40.200x003","F40.200x004","F40.800","F40.900","F40.901","F41.000","F41.001","F41.100","F41.101","F41.102","F41.200","F41.200x002","F41.201","F41.300x001","F41.800","F41.900","F42.000","F42.001","F42.003","F42.100","F42.101","F42.200","F42.800","F42.800x001","F42.900","F42.901"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合TV1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCT_DRG();
        
        if (drg.TV13_group(record)){
            return 'TV13';
        }

        if (drg.TV15_group(record)){
            return 'TV15';
        }

        return 'TV1';
    }else{
        return '';
    }
}
  