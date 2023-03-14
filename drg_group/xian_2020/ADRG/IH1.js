import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IH1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["04.0310","04.0715","04.0716","04.0717","04.0719","04.0720","04.0721","04.0733","04.1102","04.1103","04.3x06","04.3x15","04.3x16","04.4900x043","04.4900x044","04.4900x045","04.4912","04.6x09","04.7407","04.7408","04.7409","04.7410","04.7412","04.7413","04.7414","04.7417","04.7418","04.7900","04.8101","04.8106","04.8900"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && adrg_ss.includes(record.ssList[0])){
        putMessage('符合IH1入组条件，匹配规则：主手术匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IH19_group(record)){
            return 'IH19';
        }

        return 'IH1';
    }else{
        return '';
    }
}
  