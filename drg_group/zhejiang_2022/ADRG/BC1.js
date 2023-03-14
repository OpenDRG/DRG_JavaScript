import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCB_DRG} from '../DRG/MDCB_DRG.js';

export default function BC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.3000x001","38.3100x001","38.6100x002","38.6101","38.8000","38.8101","39.2801","39.2802","39.5100x004","39.5100x007","39.5102","39.5103","39.5104","39.5105","39.5106","39.5107","39.5108","39.5200x002","39.5200x003","39.5202","39.5203","39.7203","39.9800x003"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合BC1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCB_DRG();
        
        if (drg.BC11_group(record)){
            return 'BC11';
        }

        if (drg.BC13_group(record)){
            return 'BC13';
        }

        if (drg.BC15_group(record)){
            return 'BC15';
        }

        return 'BC1';
    }else{
        return '';
    }
}
  