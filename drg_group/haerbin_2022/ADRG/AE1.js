import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["55.6100","55.6901"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合AE1入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCA_DRG();
        
        if (drg.AE19_group(record)){
            return 'AE19';
        }

        return 'AE1';
    }else{
        return '';
    }
}
  