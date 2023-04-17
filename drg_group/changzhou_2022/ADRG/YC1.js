import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCY_DRG} from '../DRG/MDCY_DRG.js';

export default function YC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合YC1入组条件，匹配规则：');
        let drg=new MDCY_DRG();
        
        if (drg.YC19_group(record)){
            return 'YC19';
        }

        return 'YC1';
    }else{
        return '';
    }
}
  