import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FF4_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["20.7100","20.7903","38.0701","38.5701","38.8700x001","38.8701","38.8704","39.3201","44.4400x001","44.4402","55.9902","99.1000x011"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FF4入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FF41_group(record)){
            return 'FF41';
        }

        if (drg.FF43_group(record)){
            return 'FF43';
        }

        if (drg.FF45_group(record)){
            return 'FF45';
        }

        return 'FF4';
    }else{
        return '';
    }
}
  