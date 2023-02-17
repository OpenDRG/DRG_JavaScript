import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCS_DRG} from '../DRG/MDCS_DRG.js';

export default function ST1_group(record){
    let adrg_zd=["R50.800x002","R50.801","R50.802","R50.803","R50.900","R50.900x002","R50.901"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合ST1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCS_DRG();
                
        if (drg.ST11_group(record)){
            return 'ST11';
        }        if (drg.ST13_group(record)){
            return 'ST13';
        }        if (drg.ST15_group(record)){
            return 'ST15';
        }
        return 'ST1';
    }else{
        return '';
    }
}
  