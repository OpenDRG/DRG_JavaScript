import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FK3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["37.8000x001","37.8000x002","37.8001","37.8101","37.8201","37.8301","37.8501","37.8601","37.8701","37.8901","37.8902","37.8903","37.9400x001","37.9400x002","37.9401","37.9402","37.9403","37.9404","37.9600x001","37.9600x002","37.9800x001","37.9800x002","37.9800x003","37.9800x003","37.9800x004","37.9800x004"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FK3入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FK39_group(record)){
            return 'FK39';
        }
        return 'FK3';
    }else{
        return '';
    }
}
  