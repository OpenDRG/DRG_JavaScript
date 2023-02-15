import {putMessage,intersect,SS_VALID} from '../Base.js'
import VB1_group from '../ADRG/VB1.js';
import VC1_group from '../ADRG/VC1.js';
import VJ1_group from '../ADRG/VJ1.js';
import VR1_group from '../ADRG/VR1.js';
import VS1_group from '../ADRG/VS1.js';
import VS2_group from '../ADRG/VS2.js';
import VT1_group from '../ADRG/VT1.js';
import VZ1_group from '../ADRG/VZ1.js';

export default function MDCV_group(record){
    let mdc_zd=["T46.700","T01.200x001","T70.300","T98.100x001","T79.202","T59.801","T53.600x004","T81.000x032","T81.014","T39.300x002","T81.034","T47.000","T43.001","S31.102","S31.100x003","S21.100x002","S81.700","F19.900x007","T74.300","T51.300x003","T45.900","T39.802","T81.002","T36.501","T69.800x003","T43.400x002","T81.000x030","F19.000x002","T04.000x001","T43.002","T37.900x001","T44.900x002","T38.700","T81.030","F13.400","T38.200","T85.603","T70.204","T85.500x001","T85.600x007","T37.300x001","T42.200x002","S71.800x022","T51.300x004","T47.200x002","T01.902","T09.600","T37.300","S31.100","T56.400x002","T74.100x001","T81.400x011","T81.800x002","S71.801","T81.209","T43.502","T78.000","S79.900x001","T81.504","F13.900","T05.500x001","T65.800x006","T51.300","T52.300","S81.800x082","F17.000","T88.101","T09.900","T79.800x005","T85.704","T41.500","S31.005","T85.705","S07.900","F19.900x005","F55.x00","T39.901","T53.700x001","T75.000","T42.000","T53.100x002","F13.500","T42.800","T56.700x002","T50.900x002","T81.200x010","S69.900x004","T60.001","T63.100","T81.800x004","T39.900","T81.006","T45.100x002","F19.900x009","S31.006","T05.800x002","T61.800","T64.x02","S61.900x004","T46.600x001","T54.900x002","T49.800x001","T05.600x001","T38.401","N99.900","T42.701","T50.200x002","T67.700","T59.900x002","T81.200x012","T81.218","F17.000x001","T02.400x001","F13.100x001","T59.800x001","F18.600","T81.200x002","T63.300","T39.201","T88.700x002","F19.200","T61.100","T81.200x017","F19.000","T81.000x039","T39.902","T81.809","T81.501","T86.800x809","T62.000x001","T36.300x001","T54.300","S21.201","S31.100x002","T75.300","T44.901","T65.300x003","T85.501","T98.300x006","T45.800x003","T47.700","S51.000","T70.206","S61.000x001","S21.202","T81.000x004","T63.600x003","S38.301","T76.x00","S31.800x021","T47.400","F14.000x001","T39.400x001","T85.600x004","T69.800x002","S47.x01","T80.900x003","T98.200x033","T46.100","T63.400x004","S41.800x022","T11.600","R78.700","S91.700x002","T59.800x005","T70.800x001","T74.000x002","T81.027","F55.x00x401","T36.200","T52.400","T13.100","T81.033","T49.100","T54.202","T56.500x002","T49.201","S98.200x001","T41.100","T51.100","T73.000","T81.000x005","T45.700x001","T42.406","T45.001","T88.700","F13.200","T81.805","T81.811","T85.500x003","T67.600","T67.000x001","T52.000x005","T81.000x022","F18.700","T62.200x003","T79.000","S31.100x005","T38.000x001","T43.000x003","T98.200x011","S91.300x813","T81.000x011","T50.700x002","T02.510","T81.000x002","T81.000x042","T81.206","T56.800x007","T45.100","S31.000x004","T47.300x001","T81.031","T81.700x207","T53.100","F19.900x004","T80.300","S41.100","S77.000","T43.800","T85.700","S69.900x002","T80.601","T62.000x002","S81.000","S71.000","T67.500","T81.412","T63.600x005","T81.019","T49.002","T80.900","T62.202","T56.800x005","T37.000","T98.100","T04.400x001","T44.400x001","T63.400x003","T01.000x001","S21.900x001","T38.300","S67.801","T04.100x001","S69.900x001","T63.200","S21.900x003","T56.900","T50.500","T81.500x007","S61.900","T50.000","T56.801","T48.701","T75.101","T74.000x001","T43.300","S41.802","T81.101","T50.300x002","T59.800x007","T81.700x106","F19.500","T63.001","T80.500","F55.x00x301","T62.800","T78.301","S08.900","T49.300x001","T38.500x002","T78.200","T38.400","F13.700","T54.000x002","T81.025","T37.100x001","T81.215","S81.900","S31.004","T88.300","F19.900x002","T36.500x003","T59.800x009","T60.800","S31.800x003","T67.400x001","T56.600x001","T67.100x002","T70.200x005","S31.805","T44.301","T01.901","S41.801","T42.001","T60.100","T81.203","S21.800x011","T88.200","S31.000x005","T81.016","T88.500x001","S49.900x001","S91.100","T44.500x001","T42.702","T42.602","T81.000x029","T53.600x001","T56.800x001","T75.800x001","T69.100x003","T14.900","S67.800x003","T45.000x001","T81.700x208","T81.000x033","T59.000x001","S68.100x002","S88.000x001","T52.200x002","T57.100x003","T81.214","T43.301","T75.400x001","T78.300x004","T51.200","T81.700x206","S68.400x001","T65.600x003","T05.800x001","T41.300","T41.400","T57.300","T81.000x013","T81.201","T80.602","T53.400","S61.000x002","T39.800","F55.x00x101","T45.100x003","T79.900","T55.x00x002","T59.900x003","T78.101","T85.609","T06.500x002","T62.801","T81.221","F18.000x001","S51.800x011","T81.000x036","T60.900x002","T79.501","T61.000","T64.x00x002","T85.611","T39.200x001","T51.800x001","T74.100x002","T54.300x003","T86.800x814","T46.800x001","T56.800x006","T81.211","T81.700x406","T45.600","T49.000","T81.411","T75.300x002","T81.503","T42.600","T51.900","T47.500","T14.800","T56.401","T81.036","T42.700x001","F17.900","T63.600x004","T67.000x002","T81.801","F19.300","T36.000","T50.200","T57.200x002","T56.800x004","T65.100","T81.500x002","T81.700x305","T44.001","T59.900x005","T42.600x004","T59.900x004","T67.200","T81.800x005","T81.900","T41.200x002","T81.400x014","S91.300x812","T81.024","T46.700x002","T36.300","T57.800x002","T81.700x108","T50.600x003","T49.400x001","T65.800x007","T69.000x001","T81.000x031","T06.500x001","T57.800x003","T63.500x001","T45.100x001","T48.500","F19.900","R78.900","T49.300x002","T66.x01","S19.700","F55.x00x601","T48.600x003","T88.601","T81.301","T38.300x001","S31.802","S47.x00x002","T81.200x016","T81.000x010","T88.501","T36.500","T81.216","T02.410","T56.900x002","T79.800x001","T50.900x007","T81.004","T85.900","T86.805","T42.300","T88.701","T56.800x002","T70.202","T81.000x023","T53.200x002","T56.300x002","T85.803","T47.200","S41.700","T45.202","T57.100x004","T41.000","F17.100x001","T51.300x002","T60.400","T75.100x001","T59.803","T46.500x003","S21.101","S91.700x003","S97.000","S99.900x001","T36.102","T61.200x001","S39.900x002","T48.600","S81.800x011","T45.300x001","T45.101","T46.200x001","T81.217","T65.900","T73.000x001","F19.900x006","T50.900x003","T56.700","T57.000x001","T59.000","T67.300","T81.800x003","T70.207","T39.300x003","T49.800","T05.900","T42.600x005","T65.200x001","F13.000","T81.102","T80.604","T42.100","T88.700x014","T59.101","S67.000x003","T83.900","F18.500","T46.700x001","T49.801","T81.409","T80.603","T61.201","S39.600","T04.700x001","T37.100","T51.200x001","T48.601","S99.700x002","T74.100","T85.500x002","T50.300x001","T65.300x004","S58.100x001","S61.800x011","T45.800x001","T65.000","T46.501","T04.200x001","S31.003","T37.200","T81.200x015","T52.800x003","S71.700","T37.800x001","T65.500x001","T50.600x001","T43.201","T53.600x003","T43.302","T36.900","T04.300x001","T40.900x001","S11.800x021","T54.203","T81.000x034","T88.702","S00.102","T42.301","T50.900x004","T59.100","T69.100x005","S38.100x003","T13.600","T98.300x005","T57.100x005","T45.002","T67.300x001","T80.902","T46.002","T02.610","T65.300x002","T65.500x002","T59.700","F17.500","T81.000x041","T68.x00","F55.x00x501","T81.026","T98.300x003","T81.200x009","T81.220","T81.000x028","T67.800","T49.001","T60.900x003","T81.813","T43.500x002","T63.900","S31.700","T81.210","T43.200x001","S39.908","T50.900x005","T65.901+F02.8*","T46.500x004","T63.400","T81.008","T81.035","T44.900x001","S07.100","S77.200","T36.502","T80.500x001","T53.500","T59.800x010","T43.601","T38.800x001","T61.001","T85.800x801","T44.400x002","T59.500x001","T65.300","T81.000x026","S11.800x011","T38.801","T52.000","T43.000x002","T81.000x009","T85.600x001","T80.100x002","T57.200x001","T38.100x001","T48.201","T40.400x002","S91.200","T52.200","T42.400","T44.000","G25.803","T86.808","T36.700","S09.100x001","T88.700x010","T48.600x002","T37.800","T05.200x001","T45.700x002","T70.205","T80.600x004","S98.200x002","T81.205","F55.x00x703","S31.800x012","S41.800x012","T56.900x003","T44.300","T78.300x003","T81.000x035","T43.501","T42.402","T42.404","T88.700x012","S48.100x001","T81.022","S97.100","T56.600x002","T71.x00x004","T69.000x002","F19.400","T81.400x008","S98.100x001","T59.800","T02.710","T46.400","T52.800x004","T56.200x002","T42.600x002","T48.300","S97.800x002","T81.212","T41.500x003","T71.x00x003","T58.x00","T74.800x001","T69.000x004","F17.700","T81.000x001","T81.000x014","T81.000x021","T56.300x001","T79.800x004","S51.800x021","T07.x00","T46.301","T80.600x005","T53.600","T70.200x006","T39.300","S31.800x022","T57.100x002","T62.802","T85.600x003","T37.500","T53.000x002","T81.018","T81.204","T71.x00x002","T65.800x004","T43.500x004","T46.600","T81.000x027","T81.200x001","S61.800x022","T05.300","T09.800","T51.000","T52.800x005","T54.201","T63.402","F19.900x008","T85.610","T88.700x007","T53.000","T98.300x002","S37.900","S71.800x011","T81.010","F55.x00x201","T56.800x008","S61.100x002","T67.400","S21.800x031","T81.015","T39.200","T40.900x002","S61.100x001","T38.100","T66.x00x002","T78.400","T81.021","T75.300x004","T05.300x002","T43.400x003","T42.601","S68.000x002","T47.900","T81.400x013","T01.900","T45.800x002","T37.400","T51.800","T59.300","T86.806","T43.300x001","T50.100","T50.900x001","T81.407","T81.502","T45.700x003","T60.200x001","S61.900x002","T63.000","T39.801","T80.600x006","T81.020","T01.300x001","T63.600x002","S91.300x822","T71.x00","F17.600","T63.401","S21.901","T01.302","T38.000x002","T69.100","T78.400x002","T81.700x107","T38.300x003","T85.600x009","T85.604","T59.401","T49.600","T43.500x001","T78.201","T81.800x017","T36.101","T39.101","T42.800x001","S61.800x081","T75.300x003","T02.600x001","T53.700","T52.000x002","T09.100","T01.101","F18.100x001","F19.200x001","T50.900","T70.300x004","T75.000x001","T81.213","S41.800x001","S87.801","T81.001","T97.x00x001","S57.000","T52.000x004","T60.000x004","T69.800x001","T81.023","F13.600","T44.900x003","F18.900","S09.700","T59.800x004","S67.001","T40.900x003","T46.500x005","T81.808","T80.400","T65.800x005","S91.300x002","T47.400x001","T63.600x001","T11.100","T45.102","T78.102","T81.807","T57.000x002","T85.800x803","T74.900x002","T02.500x001","S31.100x007","T78.800","T45.200x001","T88.800","T67.901","T81.500x001","S38.300x002","T04.901","T37.900x002","T81.700x307","S31.101","T47.600","T57.100x001","T75.200x001","T47.100x001","T56.200x001","T59.800x006","T60.300x002","T64.x00x001","T80.903","T60.200","T81.400x007","T81.200x013","T81.219","S67.000x001","S67.800x001","T42.200x001","T81.500x006","S31.804","T74.900x001","F19.700","T42.403","F19.100x004","S39.907","T45.003","T61.200x003","T81.000x038","S87.000","T54.100","T59.900","T81.202","T81.003","T36.400","S38.100x004","S57.900","T81.000x018","T67.002","T53.200","T81.810","T06.501","S58.900x001","F13.000x001","T88.102","T05.000","S81.800x083","T48.602","T67.500x001","T41.500x001","T57.900","T65.501","S61.800x012","T85.601","T38.500","T43.401","T42.600x006","T38.600x001","T43.600x004","T44.302","T49.900","T59.802","T49.400x002","T81.200x014","T60.900","T79.800x003","T56.000x002","T44.600x001","S37.700","T56.800","T43.900","T39.100","T81.812","F19.400x001","T52.000x003","T43.500x005","T49.003","T49.700x001","T60.401","T86.800x807","T88.400x002","T65.400","T81.400x010","T75.200x002","T81.600x001","T88.700x004","T01.903","T57.000x003","S31.800x011","T80.901","T41.201","S41.800x021","T69.100x004","T62.001","T42.101","S58.000x001","T59.800x002","T75.200x005","T81.207","S31.000x003","T81.408","T45.501","S21.200x001","S39.903","S18.x00x001","T85.600x010","T88.400x001","S61.800x023","T81.000x024","T81.005","S07.000","T65.900x001","S69.900x003","T62.800x002","F19.600","S38.302","T39.000","T41.100x002","N99.400","T52.000x006","R50.200","F19.201","T50.600x002","T86.800x805","T81.013","S38.101","S38.300x001","T42.800x003","T44.303","T46.302","T65.600x001","T59.900x001","T75.000x002","T81.017","T70.800","T01.600x001","T36.100x003","T63.800x001","T75.100x002","T60.002","S81.800x081","T67.100","S77.100","T75.800x002","S68.800x001","T54.301","T78.300","T81.000x019","T54.900","T05.100x001","F55.x00x001","T48.100","T54.000","T81.700x306","S31.000x006","T49.000x003","T46.001","T60.300x001","T63.400x002","T65.800x003","T88.703","T50.200x001","T69.000x003","T75.100","S71.100","T75.400","T81.400x012","S21.200x002","T36.800","T42.401","T52.800x002","T36.600","T49.000x005","T59.601","S38.303","S71.800x012","T48.400","T86.800x808","T88.900","T56.500x001","S99.700x001","S39.700","T46.901","T81.800x001","T38.500x001","S39.900x004","T43.500x003","T80.200x003","F13.300","T52.200x003","T54.300x002","T81.011","S41.800x011","T47.300","R78.801","T49.300x003","T88.700x003","T05.400x001","T65.200x002","T85.600x008","T48.603","S31.801","T61.100x002","T42.700x003","T65.300x001","S07.800","T67.001","T45.400","T55.x00x003","T46.100x001","T65.600x002","T38.501","T60.300x003","T85.600","T40.901","T81.012","T60.101","T48.000","T56.000x003","T43.100","T45.201","T56.800x003","S38.100x002","S41.000","T62.100x001","T81.208","S61.700","T53.300x001","T85.901","T81.806","S61.800x021","T40.800","T81.000x020","T65.801","T61.900","T53.300","T98.300x004","S91.000","T75.200x004","S88.100x001","T86.800x813","T65.800x002","S78.100x001","T01.100x001","T59.200","T88.800x001","F55.x00x702","T74.200","T81.028","T62.002","S21.700","S41.000x002","T63.100x001","T52.101","T38.301","T46.900x001","T52.800","T06.300x001","T59.800x008","T02.700x001","T75.200x003","T53.600x002","T67.900","T79.201","F19.800","T50.800","T85.600x006","T42.500x001","T02.600x011","T81.700x408","T81.000x037","T55.x00x001","S31.803","T38.000","T70.201","S21.800x021","T50.300","N99.401","F55.x00x704","T62.200x002","T52.900","T01.904","T44.200x001","T46.300x003","T44.100x001","T79.400","T42.302","T46.500x002","T88.100x002","S48.000","T47.800","S97.801","T50.400x001","T11.600x001","T52.800x006","T45.100x004","T56.100x002","S99.900x002","T46.300x002","T38.901","T67.300x002","T81.505","T85.500","T53.900","S91.300x003","T52.800x001","T66.x00x001","S51.700","S30.201","T59.500x002","T64.x01","F13.200x001","S81.800x021","T49.500","T56.001","S98.000x001","T80.100x001","T60.000x003","S31.800x031","T56.101","T46.000","F13.201","T42.800x002","T81.700x407","S71.800x021","T45.500x002","T70.300x002","T43.300x003","T74.100x003","S21.203","T57.800","T44.701","T80.300x001","T62.900x002","T44.700x001","T71.x00x001","T81.200x005","F19.900x003","T50.700x001","T44.800x001","T81.007","T49.400x003","T81.029","T69.100x002","T81.032","T88.600","T36.900x001","S61.800x013","T65.800","T49.200x001","T50.900x006","T81.009","T85.602","S78.000","T42.405","T38.600"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCV入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=VB1_group(record)){
        return result;
    }

    if (result=VC1_group(record)){
        return result;
    }

    if (result=VJ1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合VQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'VQY';
    }

    if (result=VR1_group(record)){
        return result;
    }

    if (result=VS1_group(record)){
        return result;
    }

    if (result=VS2_group(record)){
        return result;
    }

    if (result=VT1_group(record)){
        return result;
    }

    if (result=VZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}