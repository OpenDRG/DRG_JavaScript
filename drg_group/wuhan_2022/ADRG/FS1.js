import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FS1_group(record){
    let adrg_zd=["C38.000","C38.000x004","C38.001","C38.002","C38.800","C45.200","C49.300x006","C49.402","C49.900x001","C75.500x001","C75.501","C79.800x807","C79.800x819","C79.800x830","C79.800x863","C79.808","D15.100","D15.101","D15.102","D15.103","D15.104","D15.105","D15.106","D18.000x822","D18.000x835","D18.000x836","D18.000x837","D18.000x840","D18.000x841","D18.010","D18.109","D21.300x005","D21.400x004","D35.600x001","D35.601","D48.100x024","D48.711","D48.712"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FS1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
                
        if (drg.FS19_group(record)){
            return 'FS19';
        }
        return 'FS1';
    }else{
        return '';
    }
}
  