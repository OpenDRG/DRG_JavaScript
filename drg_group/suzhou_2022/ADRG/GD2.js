import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["47.0100","47.0901","47.0902","47.0903","47.1100","47.1900x001","47.2x00","47.2x01","47.9100","47.9200","47.9901"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合GD2入组条件，匹配规则：主手术匹配');
        let drg=new MDCG_DRG();
                
        if (drg.GD21_group(record)){
            return 'GD21';
        }        if (drg.GD2B_group(record)){
            return 'GD2B';
        }
        return 'GD2';
    }else{
        return '';
    }
}
  