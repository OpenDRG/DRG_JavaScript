import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCJ_DRG} from '../DRG/MDCJ_DRG.js';

export default function JD2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["08.2000x009","08.2000x010","21.3200x010","21.3200x011","21.9900x002","27.4300x010","27.4300x011","54.3x00x011","71.3x00x021","71.3x00x022","71.3x00x023","71.3x00x024","85.2000x001","85.2000x002","86.2200x011","86.2201","86.2202","86.2800x012"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合JD2入组条件，匹配规则：主手术匹配');
        let drg=new MDCJ_DRG();
        
        if (drg.JD21_group(record)){
            return 'JD21';
        }

        if (drg.JD23_group(record)){
            return 'JD23';
        }

        if (drg.JD25_group(record)){
            return 'JD25';
        }

        return 'JD2';
    }else{
        return '';
    }
}
  