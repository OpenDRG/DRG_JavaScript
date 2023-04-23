import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCY_DRG} from '../DRG/MDCY_DRG.js';

export default function YR1_group(record){
    let adrg_zd=["B20.000x001","B20.001","B20.002","B20.003","B20.004","B20.005","B20.006","B20.100x001","B20.200x001","B20.300x001","B20.301","B20.400x001","B20.500x001","B20.600x001","B20.700x001","B20.801","B20.901","B21.000x001","B21.100x001","B21.200x001","B21.300","B21.700","B21.800","B21.900","B22.000x001","B22.000x003","B22.000x004","B22.000x005","B22.001+F02.4*","B22.100","B22.200","B22.700","B22.701","B23.000","B23.100","B23.100x001","B23.100x002","B23.200","B23.201","B23.800","B23.800x001","B23.800x002","B23.801","B24.x01","I33.000x018","O98.700"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && intersect(record.zdList,adrg_zd)){
        putMessage('符合YR1入组条件，匹配规则：某一诊断匹配');
        let drg=new MDCY_DRG();
        
        if (drg.YR11_group(record)){
            return 'YR11';
        }

        if (drg.YR13_group(record)){
            return 'YR13';
        }

        if (drg.YR15_group(record)){
            return 'YR15';
        }

        return 'YR1';
    }else{
        return '';
    }
}
  