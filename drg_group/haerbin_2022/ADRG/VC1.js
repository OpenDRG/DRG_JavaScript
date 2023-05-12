import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCV_DRG} from '../DRG/MDCV_DRG.js';

export default function VC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["21.9900x002","21.9900x005","21.9901","21.9902","79.6100","79.6201","79.6202","79.6301","79.6302","79.6400","79.6500","79.6601","79.6602","79.6701","79.6702","79.6800","79.6900x002","79.6901","83.4500x001","83.4501","83.4502","86.2200x011","86.2201","86.2202","86.2800x012"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合VC1入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCV_DRG();
        
        if (drg.VC19_group(record)){
            return 'VC19';
        }

        return 'VC1';
    }else{
        return '';
    }
}
  