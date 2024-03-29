import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FR1_group(record){
    let adrg_zd=["A48.300","I11.001","I11.002","I13.000x001","I50.000","I50.000x005","I50.000x006","I50.001","I50.002","I50.100","I50.100x006","I50.101","I50.102","I50.103","I50.104","I50.105","I50.900","I50.900x001","I50.900x002","I50.900x007","I50.900x008","I50.900x009","I50.900x010","I50.900x014","I50.900x015","I50.900x016","I50.900x017","I50.900x018","I50.900x019","I50.907","I50.908","I97.100x004","I97.101","I97.102","I97.803","R57.000","R57.100","R57.101","R57.200","R57.800x003","R57.801","R57.802","R57.803","R57.900","R57.900x002","R57.901","R65.000","R65.100","R65.101","R65.202","R65.301","R65.900","R68.800x001","T81.800x010","I50.900x007","I50.900x008","I50.900x009","I50.900x010"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0]) && (!record.ssList || !SS_VALID.includes(record.ssList[0]))){
        putMessage('符合FR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FR11_group(record)){
            return 'FR11';
        }

        if (drg.FR13_group(record)){
            return 'FR13';
        }

        if (drg.FR15_group(record)){
            return 'FR15';
        }

        if (drg.FR19_group(record)){
            return 'FR19';
        }

        return 'FR1';
    }else{
        return '';
    }
}
  