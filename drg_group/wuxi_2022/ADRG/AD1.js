import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["52.8000","52.8200","52.8300"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合AD1入组条件，匹配规则：主手术匹配');
        let drg=new MDCA_DRG();
                

        return 'AD1';
    }else{
        return '';
    }
}
  