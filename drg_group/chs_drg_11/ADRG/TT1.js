import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCT_DRG} from '../DRG/MDCT_DRG.js';

export default function TT1_group(record){
    let adrg_zd=["F50.000","F50.100","F50.200","F50.300","F50.401","F50.501","F50.502","F50.800x002","F50.801","F50.900","F51.000","F51.100","F51.200","F51.200x002","F51.200x003","F51.300","F51.400","F51.500","F51.800","F51.900","G47.000","G47.000x001","G47.000x002","G47.100","G47.800x001","G47.800x002","G47.801","G47.900"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合TT1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCT_DRG();
                
        if (drg.TT13_group(record)){
            return 'TT13';
        }        if (drg.TT15_group(record)){
            return 'TT15';
        }
        return 'TT1';
    }else{
        return '';
    }
}
  