import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GS1_group(record){
    let adrg_zd=["I85.000x001","I86.401","I86.800x014","I86.812","K22.301","K22.804","K25.000","K25.000x001","K25.000x002","K25.001","K55.800x003","K55.900x004","K91.800x102","K91.800x103","K91.800x106","K91.800x501","K92.000","K92.100x001","K92.200x001","K92.200x005","K92.201","K92.202","K92.203","K92.204","K92.205","K92.206","K92.207","K92.208","K92.209","K92.210","K92.800x001","K92.800x002","K92.800x003","K92.800x004","K92.800x005","K92.800x007","K92.800x011","R19.501"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合GS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GS11_group(record)){
            return 'GS11';
        }

        if (drg.GS13_group(record)){
            return 'GS13';
        }

        if (drg.GS15_group(record)){
            return 'GS15';
        }

        return 'GS1';
    }else{
        return '';
    }
}
  