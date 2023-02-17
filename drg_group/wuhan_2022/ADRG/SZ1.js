import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCS_DRG} from '../DRG/MDCS_DRG.js';

export default function SZ1_group(record){
    let adrg_zd=["A06.300x001","A06.900","A31.000x005","A31.800x007","A44.000","A50.000","A50.100","A50.200","A50.600","A50.700","A50.900","A51.200","A51.400x001","A51.500","A51.900","A52.700x001","A52.800","A52.801","A52.900","A53.000x001","A53.000x002","A53.900","A54.900","A54.900x001","A54.900x002","A55.x00","A56.800","A58.x01","A59.900","A63.800","A64.x00","A65.x00","A66.000","A66.100","A66.200","A66.400","A66.700","A66.800","A66.900","A67.000","A67.100","A67.200","A67.300","A67.900","A68.000","A68.100","A68.900","A69.200","A69.800","A69.900","A70.x00","A74.900","A75.000x002","A75.000x003","A75.000x004","A75.001","A75.100","A75.200x001","A75.300x001","A75.900","A77.000","A77.000x001","A77.100","A77.100x001","A77.200","A77.200x001","A77.300","A77.300x001","A77.800","A77.900","A77.900x001","A78.x00","A79.000","A79.100","A79.800x002","A79.801","A79.900","A79.901","B36.800","B36.801","B37.808","B37.900","B37.901","B38.700","B38.800","B38.900","B39.300","B39.400","B39.400x001","B39.500","B39.500x001","B39.900","B40.700","B40.800","B40.900","B41.700","B41.800x001","B41.800x003","B41.900","B42.100","B42.100x001","B42.100x002","B42.100x003","B42.700","B42.800","B42.900","B43.800","B43.801","B43.900","B44.100x003","B44.700","B44.900x001","B45.700","B45.900","B46.100x001+G99.8*","B46.400","B46.500","B46.800x001","B46.800x002","B46.900x002","B47.100","B48.000x001","B48.200","B48.201","B48.300","B48.300x001","B48.400","B48.401","B48.402","B48.700","B48.800x001","B49.x00x007","B50.800","B50.801","B50.900x001","B51.000","B51.000x001+D77*","B51.800","B51.900","B52.800","B52.900x001","B53.000x001","B53.100","B53.800x001","B54.x00","B54.x00x004","B54.x00x006","B54.x00x008","B55.000","B55.000x001","B55.000x003","B55.100","B55.900","B56.000x001","B56.100x001","B56.900x001","B57.100","B57.500","B58.900x001","B60.000","B60.000x001","B64.x00","B65.100x001","B65.101","B65.200x001","B65.800x001","B65.800x002","B65.800x003","B65.900x006","B65.900x007","B65.900x008","B66.000","B66.000x001","B66.100","B66.101","B66.200","B66.800x001","B66.800x002","B66.800x003","B66.800x004","B66.800x005","B66.800x006","B66.900","B67.301","B67.400x001","B67.401","B67.601","B67.700x001","B67.901","B68.000","B68.100","B68.900x002","B68.900x003","B68.900x004","B68.901","B69.900x001","B70.000","B70.100","B71.000","B71.100","B71.800","B71.900","B73.x00","B74.000x001","B74.000x003","B74.100x003","B74.200x001","B74.200x003","B74.300","B74.400","B74.400x001","B74.400x002","B74.400x003","B74.800x001","B74.900","B74.900x005","B74.901","B74.902","B75.x00","B76.100","B76.800","B76.900","B78.700","B78.901","B79.x00","B80.x00","B81.000","B81.200","B83.000","B83.000x001","B83.000x002","B83.100","B83.200x001","B83.201","B83.300","B83.400","B83.800x001","B83.800x002","B83.800x004","B83.800x006","B83.800x007","B83.800x009","B83.900","B85.400","B88.800x001","B88.800x002","B89.x00","B99.x00x001","B99.x01","O98.600x001","P37.000","P37.100","P37.300","T80.200","T80.200x004","T88.000"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合SZ1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCS_DRG();
                
        if (drg.SZ11_group(record)){
            return 'SZ11';
        }        if (drg.SZ13_group(record)){
            return 'SZ13';
        }        if (drg.SZ15_group(record)){
            return 'SZ15';
        }
        return 'SZ1';
    }else{
        return '';
    }
}
  