import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCH_DRG} from '../DRG/MDCH_DRG.js';

export default function HK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["39.5017","42.3307","42.3308","42.3309","42.3310","42.9100x002","43.4100x020"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合HK1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCH_DRG();
        
        if (drg.HK11_group(record)){
            return 'HK11';
        }

        if (drg.HK13_group(record)){
            return 'HK13';
        }

        return 'HK1';
    }else{
        return '';
    }
}
  