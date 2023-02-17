import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OR1_group(record){
    let adrg_zd=["O75.700x001","O80.000","O80.100","O80.800","O80.900","O84.000"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合OR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCO_DRG();
                
        if (drg.OR19_group(record)){
            return 'OR19';
        }
        return 'OR1';
    }else{
        return '';
    }
}
  