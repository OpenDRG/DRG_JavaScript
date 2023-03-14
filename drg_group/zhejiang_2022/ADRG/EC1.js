import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';

export default function EC1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["31.2100x001","32.0900x005","34.1x01","34.1x02","34.1x03","34.1x04","34.1x05","34.2200","34.2501","34.2502","34.2600","34.3x01","34.3x02","34.3x03","34.3x04","34.3x05","34.9903","37.1200x005","37.1200x008","37.1201","37.1203","37.1204","37.3101","37.3102","37.3103","37.9100","40.1100x004","40.2902","40.2903","40.2904","40.5906","40.5914","40.6100","40.6200","40.6300","40.6400","40.6401","40.6900x002","40.6900x003","40.6900x004","40.6901","40.6902","42.6100","42.6200","42.6300","42.6400x002","42.6402","42.6403","42.6500","42.6601","53.8301"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合EC1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCE_DRG();
        
        if (drg.EC11_group(record)){
            return 'EC11';
        }

        if (drg.EC13_group(record)){
            return 'EC13';
        }

        if (drg.EC15_group(record)){
            return 'EC15';
        }

        return 'EC1';
    }else{
        return '';
    }
}
  