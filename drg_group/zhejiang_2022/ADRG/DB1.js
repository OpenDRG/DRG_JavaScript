import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["01.2502","01.5931","04.0401","06.6x00","18.3100","20.4200x002","25.4x00x001","29.3900x019","30.1x00","30.2900x001","30.2900x002","30.2900x003","30.2900x009","30.2900x011","30.2900x012","30.2904","30.3x00","30.3x02","38.0200x002","38.0201","38.3202","38.6200x002","38.6200x003","38.6200x005","38.6200x006","38.6200x007","38.6201","38.8200x003","38.8200x008","39.2200x019","39.5900x028","39.5900x029","39.8900x001","39.8901","42.3201"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DB1入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DB11_group(record)){
            return 'DB11';
        }

        if (drg.DB13_group(record)){
            return 'DB13';
        }

        if (drg.DB15_group(record)){
            return 'DB15';
        }

        return 'DB1';
    }else{
        return '';
    }
}
  