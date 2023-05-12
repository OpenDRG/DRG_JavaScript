import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCX_DRG} from '../DRG/MDCX_DRG.js';

export default function XR1_group(record){
    let adrg_zd=["R41.000","R41.001","R41.300x001","R41.800x002","R46.600","R46.700","R53.x00x005","R63.200","R63.300x003","R63.601","T97.x01","Z00.401","Z04.601","Z50.100x001","Z50.200","Z50.300","Z50.400x001","Z50.500","Z50.700x001","Z50.800x002","Z50.900x001"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合XR1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCX_DRG();
        
        if (drg.XR19_group(record)){
            return 'XR19';
        }

        return 'XR1';
    }else{
        return '';
    }
}
  