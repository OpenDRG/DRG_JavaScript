import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GU1_group(record){
    let adrg_zd=["K25.100","K25.100x001","K25.200","K25.200x001","K25.400","K25.400x001","K25.400x002","K25.401","K25.500","K25.500x001","K25.501","K25.600","K26.000","K26.001","K26.100","K26.200","K26.200x001","K26.200x002","K26.300","K26.400","K26.400x003","K26.401","K26.500","K26.500x001","K26.501","K26.600","K27.000","K27.100","K27.100x001","K27.200","K27.400","K27.400x001","K27.400x002","K27.400x004","K27.401","K27.500","K27.500x001","K27.500x002","K27.500x005","K27.501","K27.502","K27.503","K27.600","K27.600x001","K28.000","K28.100","K28.200","K28.400","K28.400x002","K28.401","K28.500","K28.500x001","K28.600","K28.600x001","K28.900x002","K63.103","K63.104","K63.105","K63.302"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合GU1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GU11_group(record)){
            return 'GU11';
        }

        if (drg.GU13_group(record)){
            return 'GU13';
        }

        if (drg.GU15_group(record)){
            return 'GU15';
        }

        return 'GU1';
    }else{
        return '';
    }
}
  