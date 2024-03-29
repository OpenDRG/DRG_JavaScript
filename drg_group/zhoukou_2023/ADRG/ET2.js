import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCE_DRG} from '../DRG/MDCE_DRG.js';


export default function ET2_group(record){
    let adrg_zd=["A16.205","E84.001","J41.000","J41.100","J41.800","J42.x00","J42.x00x001","J42.x00x003","J42.x00x004","J42.x00x005","J42.x00x006","J42.x01","J44.000","J44.100","J44.800x001","J44.801","J44.802","J44.803","J44.805","J44.806","J44.807","J44.900","J44.900x002","J44.900x003","J44.900x004","J44.900x005","J47.x00","J47.x01","J47.x02","J47.x03"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合ET2入组条件，匹配规则：主诊断匹配');
        
        let drg=new MDCE_DRG();
        
        if (drg.ET21_group(record)){
            return 'ET21';
        }

        if (drg.ET23_group(record)){
            return 'ET23';
        }

        if (drg.ET25_group(record)){
            return 'ET25';
        }

        return '';
    }else{
        return '';
    }
}
  