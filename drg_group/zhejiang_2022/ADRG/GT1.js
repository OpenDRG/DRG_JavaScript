import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCG_DRG} from '../DRG/MDCG_DRG.js';

export default function GT1_group(record){
    let adrg_zd=["K50.000","K50.000x001","K50.000x005","K50.001","K50.002","K50.100","K50.101","K50.102","K50.103","K50.104","K50.800x001","K50.801","K50.900","K51.001","K51.002","K51.003","K51.004","K51.005","K51.200x001","K51.201","K51.202","K51.203","K51.300","K51.301","K51.302","K51.303","K51.401","K51.800x001","K51.900","K51.901","K51.902","K51.903","K52.104","K52.200","K52.200x004","K52.201","K52.202","K52.203","K52.204","K52.800x001","K52.800x003","K52.801","K52.802","K52.803","K52.804"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合GT1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCG_DRG();
        
        if (drg.GT11_group(record)){
            return 'GT11';
        }

        if (drg.GT13_group(record)){
            return 'GT13';
        }

        if (drg.GT15_group(record)){
            return 'GT15';
        }

        return 'GT1';
    }else{
        return '';
    }
}
  