import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCQ_DRG} from '../DRG/MDCQ_DRG.js';

export default function QC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["07.8000","07.8001","07.8100","07.8100x009","07.8101","07.8201","07.8300","07.8300x002","07.8400","07.8401","07.9100","07.9200x001","07.9300","07.9400","07.9500","07.9800","07.9901","34.3x01","34.3x02","34.3x03","34.3x04","34.3x05","34.4x02"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合QC1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCQ_DRG();
        
        if (drg.QC11_group(record)){
            return 'QC11';
        }

        if (drg.QC13_group(record)){
            return 'QC13';
        }

        if (drg.QC15_group(record)){
            return 'QC15';
        }

        return 'QC1';
    }else{
        return '';
    }
}
  