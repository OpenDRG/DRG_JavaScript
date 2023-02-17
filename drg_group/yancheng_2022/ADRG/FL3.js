import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FL3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["35.0501","35.0502","35.0701","35.0900","35.9500x006","35.9600x008","35.9601","35.9602","35.9603","35.9604","35.9700x001","35.9700x002","35.9700x003","35.9700x004","35.9700x005","35.9700x006"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FL3入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FL39_group(record)){
            return 'FL39';
        }
        return 'FL3';
    }else{
        return '';
    }
}
  