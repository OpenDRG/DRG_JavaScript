import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.5000x001","00.5001","00.5002","00.5301","17.5100","17.5200","37.8000x001","37.8001","37.8101","37.8201","37.8301"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FK1入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FK19_group(record)){
            return 'FK19';
        }

        return 'FK1';
    }else{
        return '';
    }
}
  