import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OR1_group(record){
    let adrg_zd=["O75.700x001","O80.000","O80.100","O80.800","O80.900","O84.000","Z38.000x001","Z38.100x001","Z38.200x001","Z38.300x001","Z38.400x001","Z38.500x001","Z38.600x001","Z38.700x001","Z38.800x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合OR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OR11_group(record)){
            return 'OR11';
        }

        if (drg.OR13_group(record)){
            return 'OR13';
        }

        if (drg.OR15_group(record)){
            return 'OR15';
        }

        if (drg.OR19_group(record)){
            return 'OR19';
        }

        return 'OR1';
    }else{
        return '';
    }
}
  