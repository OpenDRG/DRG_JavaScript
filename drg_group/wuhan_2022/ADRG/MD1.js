import {putMessage,intersect,SS_VALID} from '../Base.js'
import {MDCM_DRG} from '../DRG/MDCM_DRG.js';

export default function MD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["61.0x01","61.2x01","61.2x02","61.4101","61.4102","61.4201","61.4900x002","61.4901","61.4904","61.4905","61.9101","61.9200x001","61.9900","62.0x01","62.0x02","62.0x03","62.2x00x003","62.3x03","62.3x04","62.4104","62.4105","62.4200","62.5x00","62.5x01","62.5x02","62.6100","62.6900x001","62.6901","62.9900x001","63.1x00x003","63.1x01","63.1x02","63.1x03","63.2x00","63.2x01","63.3x01","63.3x03","63.4x00","63.5100","63.5201","63.5202","63.5203","63.5300","63.5900","63.6x00x001","63.6x01","63.8102","63.8102","63.8300","63.9200x001","63.9300","63.9400","63.9901","69.1906"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合MD1入组条件，匹配规则：主手术匹配');
        let drg=new MDCM_DRG();
                
        if (drg.MD1A_group(record)){
            return 'MD1A';
        }        if (drg.MD15_group(record)){
            return 'MD15';
        }
        return 'MD1';
    }else{
        return '';
    }
}
  