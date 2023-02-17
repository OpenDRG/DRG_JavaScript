import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCA_DRG} from '../DRG/MDCA_DRG.js';

export default function AC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["52.8000","52.8200","52.8300"];
    let adrg_ss1=["55.6100","55.6901"];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss) && intersect(record.ssList,adrg_ss1)){
        putMessage('符合AC1入组条件，匹配规则：双手术匹配');
        let drg=new MDCA_DRG();
                

        return 'AC1';
    }else{
        return '';
    }
}
  