import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DD1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["21.3200x011","21.8300x001","21.8301","21.8302","21.8400x002","21.8400x003","21.8400x006","21.8401","21.8402","21.8500x002","21.8500x004","21.8500x005","21.8500x007","21.8500x008","21.8500x010","21.8500x011","21.8501","21.8502","21.8503","21.8504","21.8505","21.8600x004","21.8601","21.8602","21.8603","21.8700x003","21.8700x004","21.8700x005","21.8700x008","21.8700x009","21.8701","21.8702","21.8801","21.8802","21.8900x002","21.8900x003","21.8900x004","21.8901","21.9901"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合DD1入组条件，匹配规则：主手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DD19_group(record)){
            return 'DD19';
        }

        return 'DD1';
    }else{
        return '';
    }
}
  