import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FF4_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["20.7100","20.7903","38.0700x001","38.0701","38.5701","38.7x00x010","38.8700x010","38.9900x002","38.9900x501","38.9900x701","38.9900x901","39.3201","44.4400x001","55.9902","99.1000x011"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FF4入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FF4A_group(record)){
            return 'FF4A';
        }        if (drg.FF45_group(record)){
            return 'FF45';
        }
        return 'FF4';
    }else{
        return '';
    }
}
  