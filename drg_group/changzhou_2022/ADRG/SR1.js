import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCS_DRG} from '../DRG/MDCS_DRG.js';

export default function SR1_group(record){
    let adrg_zd=["A01.003","A02.100","A02.100x002","A02.101","A20.700","A21.700x002","A22.700","A24.100x002","A26.700","A26.700x001","A28.001","A32.700","A32.701","A38.x00x012","A40.000","A40.100","A40.200","A40.300","A40.800","A40.900","A40.901+N08.0*","A40.903+N16.0*","A41.000","A41.100x002","A41.101","A41.200","A41.300","A41.400","A41.400x001","A41.500x083","A41.500x087","A41.501","A41.502","A41.503","A41.504","A41.505","A41.506","A41.800x002","A41.801","A41.802","A41.803","A41.804","A41.805","A41.806","A41.807","A41.900","A41.900x004","A41.902+N08.0*","A41.904+N16.0*","A42.700","A54.808","B00.701","B25.800x001","B37.700","B37.700x001","R68.801","T80.201"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合SR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCS_DRG();
        
        if (drg.SR10_group(record)){
            return 'SR10';
        }

        if (drg.SR11_group(record)){
            return 'SR11';
        }

        if (drg.SR13_group(record)){
            return 'SR13';
        }

        if (drg.SR15_group(record)){
            return 'SR15';
        }

        return 'SR1';
    }else{
        return '';
    }
}
  