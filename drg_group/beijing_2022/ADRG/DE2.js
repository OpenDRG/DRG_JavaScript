import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DE2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["28.2x00x002","28.2x00x003","28.2x01","28.2x02","28.2x03","28.2x04","28.3x01","28.3x02","28.3x03","28.4x00","28.5x00","28.5x01","28.5x02","28.5x03","28.6x00x001","28.6x00x002","28.6x00x004","28.6x01","28.6x02","28.6x03","28.7x01","28.7x02","28.9200x002","28.9201","28.9202","28.9900"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DE2入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DE29_group(record)){
            return 'DE29';
        }

        return 'DE2';
    }else{
        return '';
    }
}
  