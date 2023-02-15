import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCW_DRG} from '../DRG/MDCW_DRG.js';

export default function WB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合WB1入组条件，匹配规则：');
        let drg=new MDCW_DRG();
                
        if (drg.WB11_group(record)){
            return 'WB11';
        }        if (drg.WB13_group(record)){
            return 'WB13';
        }        if (drg.WB15_group(record)){
            return 'WB15';
        }
        return 'WB1';
    }else{
        return '';
    }
}
  