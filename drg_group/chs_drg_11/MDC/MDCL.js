import {putMessage,intersect,SS_VALID} from '../Base.js'
import LA1_group from '../ADRG/LA1.js';
import LA2_group from '../ADRG/LA2.js';
import LB1_group from '../ADRG/LB1.js';
import LB2_group from '../ADRG/LB2.js';
import LC1_group from '../ADRG/LC1.js';
import LD1_group from '../ADRG/LD1.js';
import LE1_group from '../ADRG/LE1.js';
import LF1_group from '../ADRG/LF1.js';
import LJ1_group from '../ADRG/LJ1.js';
import LL1_group from '../ADRG/LL1.js';
import LR1_group from '../ADRG/LR1.js';
import LS1_group from '../ADRG/LS1.js';
import LT1_group from '../ADRG/LT1.js';
import LU1_group from '../ADRG/LU1.js';
import LV1_group from '../ADRG/LV1.js';
import LW1_group from '../ADRG/LW1.js';
import LX1_group from '../ADRG/LX1.js';
import LZ1_group from '../ADRG/LZ1.js';

export default function MDCL_group(record){
    let mdc_zd=["N28.802","N13.000","N17.900","E11.200x014+N08.3*","I12.900x006","T28.800x001","M35.007+N16.4*","E11.200x031+N29.8*","N10.x00","N26.x02","E14.200x025+N08.3*","M31.100","N02.701","Q62.301","N02.900x002","E10.200x092+N08.3*","N28.810","Q64.900","Z52.400","E13.201+N08.3*","N10.x01","R33.x00","E10.200x013+N08.3*","N31.200x002","N02.102","N28.001","E14.200x215+N08.3*","M31.003+N08.5*","N03.800x004","N01.100x002","Q64.200","Q63.002","N30.810","N13.301","D41.001","N02.900x001","N18.901","N15.900x004","N28.820","N20.900x001","T19.000","E11.200x028+N08.3*","Q62.700","T86.100x008","E14.200x214+N08.3*","T83.001","N34.200x006","C64.x00x001","Q64.501","N36.200","N02.002","R30.100x001","N07.300","N15.900x002","Q62.300x101","N34.202","N05.803","E85.002","N32.203","Q62.300x902","Q63.302","Q60.600","C68.804","N28.826","N99.808","N02.301","N28.902","N36.000","E14.400x381+N33.8*","D69.005+N08.2*","E11.200x213+N08.3*","Q60.400x001","N20.000x002","R35.x00x001","N36.808","E10.200x026+N08.3*","D18.000x811","N05.900x009","N32.103","N20.901","N36.804","Z46.800x002","N02.702","T86.103","R82.300","E10.200x029+N08.3*","N32.809","N07.700","D09.103","M31.305+N08.5*","E11.200x027+N08.3*","N07.000","C95.900x007+N16.1*","N13.603","N14.101","Q63.001","N31.200x007","N99.101","Q62.104","Q64.100x091","N32.811","T83.500","N20.200x001","T19.801","N13.501","E72.006+N29.8*","N15.900x003","N06.001","N13.300x005","N39.300","C67.900","N36.807","R80.x02","N17.002","N06.300","N28.800x001","N36.002","C67.900x002","N25.802","E11.200x092+N08.3*","N30.902","N02.401","Q61.400","N00.000","Q64.600","N05.101","N36.809","T83.802","T86.100x007","N99.100x005","N34.203","Q63.000","N36.802","Q62.300x901","D30.000","N01.000","D30.701","N30.100","S37.301","T28.300","R34.x02","N05.000x004","E14.200x015+N08.3*","N31.203","N34.204","R93.400x003","T83.801","Q62.300x301","N05.000x001","N32.301","N13.605","N32.002","Q64.502","E14.400x380+G99.0*","R32.x01","N28.827","T83.100x003","N20.900","N28.831","Q51.701","S37.300x005","N18.300","Q61.800","N14.102","M32.102+N16.4*","N32.801","Q85.900x013","N13.901","N35.901","T86.100x002","E10.200x213+N08.3*","N99.000","N39.001","N05.900","N39.404","N02.203","Q64.708","T83.000x001","D09.104","Q85.900x029","R82.900x003","N01.700x001","N28.823","E10.200x212+N08.3*","N04.501","N20.000x001","R82.700","N01.900x001","N36.805","N21.900","Q62.101","R39.100x002","S37.010","C67.200","D18.000x819","E11.201+N08.3*","T83.103","N01.500x001","R39.000","Z49.000x004","N01.900x002","N34.200x004","N00.100x001","S37.200x081","R93.400x001","N13.201","C64.x00x004","N04.901","Q64.700x701","R93.401","S37.300","N04.700","Z46.800x001","T19.800x001","S37.814","N32.807","D41.400x004","Q63.900","D30.100","N17.901","Q64.706","N02.201","Q64.400x301","Z46.600x001","N99.800x006","T86.811","E72.007","Q61.403","N35.000x001","E10.200x012+N08.3*","Q62.202","C66.x00x003","Q62.200","N03.900x002","N05.900x003","E11.200x026+N08.3*","D09.101","N21.001","I12.900x009","N30.806","M31.002+N08.5*","S37.200x024","E14.200x091+N08.3*","N34.300","C66.x00x002","E85.411+N29.8*","N15.000","S37.300x082","S37.300x004","R36.x01","N32.812","C68.805","Q64.402","E11.200x017+N08.3*","N03.800x001","N03.900","N21.100","Q62.100x902","T83.002","I12.000x001","Q62.300x905","Q62.500","Q60.300","Q62.600","C65.x01","S37.000x031","N06.700","N36.005","D41.400x001","R82.500x005","T83.501","N28.004","N06.600","R39.801","S37.300x083","N13.600x004","N14.400","N35.000","N25.900","N28.804","N03.901","N32.815","N13.701","N28.806","N99.800x011","N03.000","N11.000x001","N11.900x003","E14.200x013+N08.3*","N21.800","T83.500x002","N11.801","Q64.000","E14.200x011+N08.3*","E83.100x008+N16.3*","N30.000","C65.x00","R93.403","T83.800","T86.102","C90.004+N16.1*","N28.814","N28.002","C48.001","N11.800x003","R82.500x003","T19.100","C67.501","N05.501","D30.200","N30.901","N17.000","E14.200x092+N08.3*","M31.703+N08.5*","Q60.100","Q64.401","N28.005","E11.200x091+N08.3*","N05.801","E13.200x521+N08.3*","M10.001+N16.8*","N12.x01","N32.800x012","Q63.801","Q64.403","N03.900x007","C67.500","N39.800","N07.200","Q62.400x001","C68.801","N32.808","T83.003","R32.x00","N35.800","S37.300x031","N04.101","S37.300x021","N32.805","N05.201","D09.000","N28.815","E10.201+N08.3*","E10.200x030+N08.3*","E11.200x029+N08.3*","E14.200x027+N08.3*","N18.904","N13.604","N01.600x001","N25.001","N26.x01","N31.202","N28.805","Q64.703","N03.300x001","N36.803","S37.211","R39.101","N19.x02","T83.101","Z46.603","N32.804","Q60.500","S37.000","S37.003","Q62.100x802","Q63.800x101","N31.800","Q62.300x903","N28.900x017","N30.803","T86.100x006","N13.506","E10.200x214+N08.3*","N34.001","N11.900x001","N11.800x002","B65.002+N22.0*","N34.200x003","N31.100x001","N04.601","C68.802","N28.801","N04.903","N00.500","N04.902","N13.504","N28.813","N00.801","N28.900x026","R82.902","N04.400x001","N00.900","Q64.100","N25.800x006","N01.400x001","N20.001","N99.001","N31.201","Q64.303","N32.800x008","T86.104","R79.802","T83.102","N04.300x003","N17.900x003","C66.x00","N00.900x009","N28.900x010","Q61.401","Z49.201","C68.800x003","C68.000","Q62.000","N02.502","N25.804","N07.100","R82.500x004","N17.200","N05.600","S37.000x012","Q87.808","N04.102","A40.901+N08.0*","N39.100","E11.200x211+N08.3*","D41.300x001","Q64.700x902","N04.800x002","C68.100","M31.102+N08.5*","Q62.103","N34.201","N36.201","Q42.200x201","N34.000x005","D30.302","N00.900x002","N17.200x003","I12.900x008","E11.400x381+N33.8*","N28.828","N28.803","Q62.400x002","N13.204","N03.501","E14.200x029+N08.3*","N06.100","Q63.103","E11.200x012+N08.3*","N18.900x011","C76.303","N00.901","I86.201","N06.400","N28.822","N30.900","S37.004","E14.200x031+N29.8*","N99.100x003","N13.400","C90.005+N08.1*","Q64.705","N32.202","N30.300","D41.900x001","Q64.301","N00.900x008","N13.600x001","N32.400","E11.200x025+N08.3*","S37.303","T79.500","N04.801","T83.500x003","T83.100x001","D09.102","Q60.501","N27.000","D41.901","N31.200x006","N32.802","N17.800","N14.000","N28.003","N39.400","N30.802","N17.900x004","N13.100x001","E11.200x015+N08.3*","R30.100","T86.107","N28.836","N07.500","N39.405","E11.200x024+N08.3*","R82.600x001","Z45.800x007","N00.902","N28.100","N02.801","D30.400","N32.800x003","N15.101","N04.900","N32.001","N02.600","Q63.301","Z46.601","N28.817","N12.x03","Q62.700x201","E14.200x014+N08.3*","A02.205+N16.0*","N11.900","S37.813","N30.807","N28.838","N18.400","N15.901","N00.800x001","R82.901","S37.200x022","Q63.102","N03.900x004","Q64.704","N05.400","Z49.000x002","M10.005+N22.8*","Q64.304","I12.900x003","N31.000x001","E10.200x017+N08.3*","E10.200x091+N08.3*","E10.200x015+N08.3*","R82.900x002","S37.300x081","N35.900","N30.400","N36.001","N30.808","Q60.200","N25.004","Q64.700x901","S37.200x023","T86.100x001","N11.802","N34.102","Q64.700x601","N28.811","N02.302","N35.100x001","N28.901","E10.200x014+N08.3*","N18.500","N28.900x004","S37.000x022","N32.102","E10.200x023+N08.3*","N04.200x001","N32.800x019","E11.400x380+G99.0*","R30.000","N06.200","N06.900","N20.000","D41.000x001","R82.800","R80.x00","Q62.700x101","T83.100","N28.808","N14.201","T83.004","N99.500","N00.900x006","Q61.900","R82.200","S37.000x016","N03.900x003","T86.105","N03.601","N32.101","N34.100","N07.900x001","T81.800x011","Q62.201","N05.900x007","N32.800x014","N20.002","N28.812","N31.901","S37.201","N02.101","N17.200x002","N32.201","N03.801","N11.100","N32.814","E11.200x016+N08.3*","N02.001","E10.200x016+N08.3*","N05.301","N39.403","Q62.300x904","N13.503","N32.300","N03.900x005","N00.301","E11.200x214+N08.3*","R93.402","N28.839","N39.800x001","N01.900","D89.101+N08.2*","C67.000","N28.900x013","N18.100","N32.803","N21.000","N99.805","S37.310","Z49.000","E11.200x013+N08.3*","Q63.201","N32.204","N03.502","N28.824","E10.200x031+N29.8*","T83.100x004","T86.100x005","Q62.700x001","E14.200x021+N08.3*","Q62.100","T86.100x003","E14.200x017+N08.3*","N13.602","E10.200x024+N08.3*","N03.100","N10.x02","S37.000x015","N11.901","T86.106","S37.111","S37.100","I12.900x005","R35.x00","N36.300","R39.200","N01.800","C64.x00x003","Q64.302","R82.500x007","N32.200","Q61.404","N03.200x001","E14.200x212+N08.3*","Q63.101","T83.200","C79.103","N28.102","S37.001","N30.804","D18.000x806","N32.901","R94.402","S37.002","N28.830","R82.500x006","R94.400","Q64.707","M32.101+N08.5*","N99.100","N15.102","N17.100","N28.818","C79.001","N00.200","N04.300x001","N28.825","E14.200x012+N08.3*","N36.000x007","N36.302","N36.901","N19.x00","N30.805","N30.801","N32.810","Q60.400","N04.001","E14.200x016+N08.3*","N18.501","D41.700","N30.809","E12.200","Q61.200","R39.200x001","N00.802","Q64.700x801","N02.900","N34.205","E11.200x011+N08.3*","S37.000x023","S37.011","N07.600","C79.101","E11.200x030+N08.3*","R34.x01","N13.202","C79.102","N17.900x002","Q64.400x902","N13.302","T19.900","N23.x00","D41.201","N03.500x003","N30.800x004","E11.200x215+N08.3*","N01.300x001","Q61.000","R93.400x002","N14.301","N32.900x002","N39.300x002","N13.600","Q62.602","N32.806","A41.902+N08.0*","C67.300","Q61.300","D41.100x001","N39.200","N28.101","N32.104","N13.502","E11.200x023+N08.3*","E66.902+N08.4*","N05.000x003","C68.803","N05.900x006","Q64.800x001","N07.800","N36.003","T81.800x014","D21.506","S37.200","Q61.801","N20.000x003","N17.101","M35.006+N16.4*","M31.701+N08.5*","C95.900x017+N16.1*","N39.401","C67.600","Q62.400","T83.804","N17.001","T83.800x001","N01.900x003","N26.x00","N36.806","E14.200x030+N08.3*","N03.800x003","N27.900","Z49.101","E10.200x028+N08.3*","N19.x01","N32.000","N13.203","S37.101","D30.301","N13.801","Q64.702","T28.800","C67.400","N18.200","N00.700","Q27.305","E14.200x028+N08.3*","Q62.800","N25.806","E11.200x212+N08.3*","N03.700","Q60.000","R30.000x002","N25.100","Q61.500","R94.803","E14.200x213+N08.3*","E10.200x027+N08.3*","N99.803","C68.900","N05.802","N28.819","I13.100x001","N36.301","Q63.203","N18.902","E85.403","N34.002","N02.800x003","Q63.200","N03.900x006","N30.201","C76.301","Q87.800x903","Q85.903","N06.500","Q61.402","S37.000x013","S37.000x032","D41.101","N03.400","T83.100x002","R80.x00x003","N25.803","N39.900","E14.200x026+N08.3*","D41.301","I12.900x002","R93.405","N05.900x002","N01.200x001","C67.700","N34.000","Q61.901","I12.900x001","N19.x03","S37.300x011","N32.813","Q64.700x904","R39.100x001","N07.400","N28.807","N05.701","N28.837","C79.000x001","N25.805","Q62.601","E10.200x215+N08.3*","C67.100","R80.x01","D30.900","N28.809","N28.829","N28.833","R94.401","D41.401","N28.834","E14.200x023+N08.3*","N06.800","R82.000","D30.300","R31.x00","N39.000","N36.100","N34.101","Q64.700x201","T79.500x002","D09.100x001","N13.601","R30.900x001","N12.x02","N27.100","R35.x00x003","N20.100","N00.600","C67.800","N28.835","N12.x00","Q64.200x021","I12.904","E10.200x011+N08.3*","C79.100x002","E14.200x024+N08.3*","Z46.602","N32.800x009","N39.402","N15.801","E14.200x211+N08.3*","Q63.800x902","N13.500x010","Q64.701","E10.200x211+N08.3*","N28.816","C65.x02","N36.004","Q64.200x001","N04.502","Q61.100","C68.800","N00.400","S37.302","N02.802","S37.200x011","N31.200x003","N32.100","N31.200x001","N99.806","N28.832","N28.821","R94.802","R93.404","D41.200x001","D17.700x016","N13.600x002","N03.503","E10.200x025+N08.3*"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCL入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=LA1_group(record)){
        return result;
    }

    if (result=LA2_group(record)){
        return result;
    }

    if (result=LB1_group(record)){
        return result;
    }

    if (result=LB2_group(record)){
        return result;
    }

    if (result=LC1_group(record)){
        return result;
    }

    if (result=LD1_group(record)){
        return result;
    }

    if (result=LE1_group(record)){
        return result;
    }

    if (result=LF1_group(record)){
        return result;
    }

    if (result=LJ1_group(record)){
        return result;
    }

    if (result=LL1_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合LQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'LQY';
    }

    if (result=LR1_group(record)){
        return result;
    }

    if (result=LS1_group(record)){
        return result;
    }

    if (result=LT1_group(record)){
        return result;
    }

    if (result=LU1_group(record)){
        return result;
    }

    if (result=LV1_group(record)){
        return result;
    }

    if (result=LW1_group(record)){
        return result;
    }

    if (result=LX1_group(record)){
        return result;
    }

    if (result=LZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}