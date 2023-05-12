import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["43.4100x020","96.0601"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0]) && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合HK1入组条件，匹配规则：主手术匹配、某一手术匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HK19_group(record)){
            return 'HK19';
        }

        return 'HK1';
    }else{
        return '';
    }
}
  