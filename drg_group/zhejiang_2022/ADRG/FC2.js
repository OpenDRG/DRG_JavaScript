import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FC2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["00.2400x001","00.5900x003","00.5901","00.5902","36.1000x001","36.1000x002","36.1100","36.1200","36.1300","36.1400","36.1500","36.1600","36.1700x001","36.1900x001","36.2x00","37.2100","37.2200","37.2300","37.2600x001","88.5201","88.5202","88.5301","88.5302","88.5400x001","88.5500x002","88.5600x002","88.5700x003","88.5701","88.5800","88.5900"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FC2入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FC29_group(record)){
            return 'FC29';
        }

        return 'FC2';
    }else{
        return '';
    }
}
  