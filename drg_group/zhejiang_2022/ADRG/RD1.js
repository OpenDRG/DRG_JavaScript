import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCR_DRG} from '../DRG/MDCR_DRG.js';

export default function RD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["07.2101","32.2004","32.2400x001","32.2500x001","32.2900x005","39.7100x004","39.7200x005","39.7900x011","39.7900x013","39.7900x017","39.7900x019","39.7900x020","39.7900x021","39.7900x025","39.7902","39.7903","39.7904","39.7906","41.4200x003","44.4400x004","44.4400x005","44.4403","50.2301","50.2302","50.2303","50.2401","50.2402","50.2403","50.2404","50.2501","50.2502","50.2503","50.2902","50.9300","52.2202","54.4x00x039","54.4x00x048","68.2500x001","99.2500x017","99.2501","99.2502"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合RD1入组条件，匹配规则：主手术匹配');
        let drg=new MDCR_DRG();
        
        if (drg.RD11_group(record)){
            return 'RD11';
        }

        if (drg.RD13_group(record)){
            return 'RD13';
        }

        if (drg.RD15_group(record)){
            return 'RD15';
        }

        return 'RD1';
    }else{
        return '';
    }
}
  