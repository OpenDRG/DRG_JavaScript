import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCK_DRG} from '../DRG/MDCK_DRG.js';

export default function KB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["07.0000","07.0100","07.0200","07.1200","07.1200x003","07.2100","07.2102","07.2200","07.2201","07.2900x001","07.2900x003","07.2901","07.2902","07.3x00","07.3x01","07.4101","07.4102","07.4103","07.4200","07.4300","07.4400","07.4501","07.4900","07.4900x001","07.4900x002","07.4900x002","07.4900x002"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合KB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCK_DRG();
                
        if (drg.KB19_group(record)){
            return 'KB19';
        }
        return 'KB1';
    }else{
        return '';
    }
}
  