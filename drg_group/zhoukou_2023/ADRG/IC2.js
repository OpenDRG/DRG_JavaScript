import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';


export default function IC2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.8500x001","00.8600x001","00.8700x001","81.5100","81.5200x004","81.5201","81.5202","81.5400","81.5400x004","81.5400x005","81.5400x007","81.5400x008","81.5401","81.5600","81.5700x001","81.5700x002","81.8000","81.8000x003","81.8100","81.8101","81.8400","81.8400x002","81.8401","81.8800"];
    let adrg_ss1=[];
    let adrg_ss2=[];
    let dept_list=[];
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合IC2入组条件，匹配规则：主手术匹配');
        
        let drg=new MDCI_DRG();
        
        if (drg.IC21_group(record)){
            return 'IC21';
        }

        if (drg.IC23_group(record)){
            return 'IC23';
        }

        if (drg.IC25_group(record)){
            return 'IC25';
        }

        return '';
    }else{
        return '';
    }
}
  