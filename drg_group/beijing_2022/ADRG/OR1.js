import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCO_DRG} from '../DRG/MDCO_DRG.js';

export default function OR1_group(record){
    let adrg_zd=[];
    let adrg_zd1=["Z37.000","Z37.000x001","Z37.001","Z37.002","Z37.100","Z37.100x002","Z37.200","Z37.200x003","Z37.201","Z37.202","Z37.203","Z37.204","Z37.300","Z37.300x001","Z37.301","Z37.302","Z37.303","Z37.400","Z37.400x001","Z37.500","Z37.500x001","Z37.501","Z37.502","Z37.600","Z37.600x001","Z37.700","Z37.700x001","Z37.900","Z37.900x003"];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList.slice(1),adrg_zd1)){
        putMessage('符合OR1入组条件，匹配规则：其他诊断匹配');
        let drg=new MDCO_DRG();
        
        if (drg.OR19_group(record)){
            return 'OR19';
        }

        return 'OR1';
    }else{
        return '';
    }
}
  