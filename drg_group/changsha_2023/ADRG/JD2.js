import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["21.9900x002","21.9901","21.9902","86.2800x012"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JD2入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JD29_group(record)){
            return 'JD29';
        }

        return 'JD2';
    }else{
        return '';
    }
}
  