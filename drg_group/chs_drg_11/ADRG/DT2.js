import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DT2_group(record){
    let adrg_zd=["A36.000x003","A36.200","A36.200x002","A52.703+J99.8*","A69.100x001","A69.100x002","J04.000","J04.000x004","J04.000x006","J04.000x008","J04.001","J04.002","J04.003","J04.004","J04.005","J04.100","J05.000","J05.100","J06.000","J36.x00","J36.x00x001","J36.x00x003","J36.x00x004","J37.000","J37.001","J37.002","J37.003","J37.004","J37.005","J37.100","J38.201","J38.300x013","J38.305","J38.700x009","J38.700x021","J38.700x022","J38.704","J38.707","J38.714","J38.716","J39.809","J39.811"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合DT2入组条件，匹配规则：主诊断匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DT29_group(record)){
            return 'DT29';
        }

        return 'DT2';
    }else{
        return '';
    }
}
  