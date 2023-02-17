import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.6700x001","00.6701","37.0x00x002","37.0x01","37.2400","37.2401","37.2501","37.7901","37.7902"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FJ1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FJ19_group(record)){
            return 'FJ19';
        }
        return 'FJ1';
    }else{
        return '';
    }
}
  