import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FK2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.5000x001","00.5000x004","00.5000x005","00.5001","00.5002","00.5100x001","00.5101","00.5102","00.5301","00.5302","00.5401","00.5402"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合FK2入组条件，匹配规则：主手术匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FK29_group(record)){
            return 'FK29';
        }
        return 'FK2';
    }else{
        return '';
    }
}
  