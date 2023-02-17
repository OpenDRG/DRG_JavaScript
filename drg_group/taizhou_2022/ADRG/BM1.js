import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BM1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["88.4100x001","88.4101","88.4102","88.4103","88.4104","88.4401","88.6101","88.6102","88.6103"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合BM1入组条件，匹配规则：主手术匹配');
        let drg=new MDCB_DRG();
                
        if (drg.BM11_group(record)){
            return 'BM11';
        }        if (drg.BM13_group(record)){
            return 'BM13';
        }        if (drg.BM15_group(record)){
            return 'BM15';
        }
        return 'BM1';
    }else{
        return '';
    }
}
  