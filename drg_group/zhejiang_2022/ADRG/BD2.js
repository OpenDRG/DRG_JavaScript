import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["01.1000x001","01.2001","01.2002","01.2200","02.9302","02.9404","04.9201","04.9202","04.9203","04.9300x001","86.0900x009","86.9401","86.9402","86.9500x001","86.9500x002","86.9501","86.9502","86.9600x001","86.9600x002","86.9601","86.9602","86.9701","86.9702","86.9800x001","86.9800x002","86.9801","86.9802"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合BD2入组条件，匹配规则：主手术匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BD29_group(record)){
            return 'BD29';
        }

        return 'BD2';
    }else{
        return '';
    }
}
  