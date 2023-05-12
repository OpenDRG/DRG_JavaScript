import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["52.8000","52.8200","52.8300"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合AD1入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCA_DRG();
        
        if (drg.AD19_group(record)){
            return 'AD19';
        }

        return 'AD1';
    }else{
        return '';
    }
}
  