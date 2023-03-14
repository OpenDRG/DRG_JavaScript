import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FK3_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.5100x001","00.5101","00.5102","00.5401","00.5402","37.9401","37.9402","37.9403","37.9404","37.9500x001","37.9500x002","37.9600x001","37.9600x002","37.9700x001","37.9700x002","37.9800x001","37.9800x002"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FK3入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FK31_group(record)){
            return 'FK31';
        }

        if (drg.FK33_group(record)){
            return 'FK33';
        }

        if (drg.FK35_group(record)){
            return 'FK35';
        }

        return 'FK3';
    }else{
        return '';
    }
}
  