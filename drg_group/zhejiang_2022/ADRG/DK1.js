import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DK1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["21.0100","22.1100x002","22.1200","22.1901","23.5x01","23.7000x001","23.7001","23.7002","24.7x01","24.7x02","24.7x03","24.7x04","24.8x02","26.1100x001","26.1100x003","26.1200x001","26.1200x002","26.1900x001","27.2101","27.2901","27.9201","29.1204","31.4301","31.4502","31.9400","31.9804","31.9805","31.9806","31.9902","42.3200x003","96.0600","98.0101","98.1100x001","98.1200x001","98.1201","98.1300x001","98.1400x001","98.1400x002","98.1501"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合DK1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DK11_group(record)){
            return 'DK11';
        }

        if (drg.DK13_group(record)){
            return 'DK13';
        }

        if (drg.DK15_group(record)){
            return 'DK15';
        }

        return 'DK1';
    }else{
        return '';
    }
}
  