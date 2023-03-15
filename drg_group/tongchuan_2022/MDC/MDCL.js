import {putMessage,intersect,SS_VALID} from '../Base.js';
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
    let mdc_zd=["A02.205+N16.0*","A40.901+N08.0*","A41.902+N08.0*","B65.002+N22.0*","C48.001","C64.x00x001","C64.x00x003","C64.x00x004","C65.x00","C65.x01","C65.x02","C66.x00","C66.x00x002","C66.x00x003","C67.000","C67.100","C67.200","C67.300","C67.400","C67.500","C67.501","C67.600","C67.700","C67.800","C67.900","C67.900x002","C68.000","C68.100","C68.800","C68.800x003","C68.801","C68.802","C68.803","C68.804","C68.805","C68.900","C76.301","C76.303","C79.000x001","C79.001","C79.100x002","C79.101","C79.102","C79.103","C90.004+N16.1*","C90.005+N08.1*","C90.005+N08.1*","C95.900x007+N16.1*","C95.900x017+N16.1*","D09.000","D09.100x001","D09.101","D09.102","D09.103","D09.104","D17.700x016","D18.000x806","D18.000x811","D18.000x819","D21.506","D30.000","D30.100","D30.200","D30.300","D30.301","D30.302","D30.400","D30.701","D30.900","D41.000x001","D41.001","D41.100x001","D41.101","D41.200x001","D41.201","D41.300x001","D41.301","D41.400x001","D41.400x004","D41.401","D41.700","D41.900x001","D41.901","D69.005+N08.2*","D89.101+N08.2*","E10.200x011+N08.3*","E10.200x012+N08.3*","E10.200x013+N08.3*","E10.200x014+N08.3*","E10.200x015+N08.3*","E10.200x016+N08.3*","E10.200x017+N08.3*","E10.200x023+N08.3*","E10.200x024+N08.3*","E10.200x025+N08.3*","E10.200x026+N08.3*","E10.200x027+N08.3*","E10.200x028+N08.3*","E10.200x029+N08.3*","E10.200x030+N08.3*","E10.200x031+N29.8*","E10.200x091+N08.3*","E10.200x092+N08.3*","E10.200x211+N08.3*","E10.200x212+N08.3*","E10.200x213+N08.3*","E10.200x214+N08.3*","E10.200x215+N08.3*","E10.201+N08.3*","E11.200x011+N08.3*","E11.200x012+N08.3*","E11.200x013+N08.3*","E11.200x014+N08.3*","E11.200x015+N08.3*","E11.200x016+N08.3*","E11.200x017+N08.3*","E11.200x023+N08.3*","E11.200x024+N08.3*","E11.200x025+N08.3*","E11.200x026+N08.3*","E11.200x027+N08.3*","E11.200x028+N08.3*","E11.200x029+N08.3*","E11.200x030+N08.3*","E11.200x031+N29.8*","E11.200x091+N08.3*","E11.200x092+N08.3*","E11.200x211+N08.3*","E11.200x212+N08.3*","E11.200x213+N08.3*","E11.200x214+N08.3*","E11.200x215+N08.3*","E11.201+N08.3*","E11.400x380+G99.0*","E11.400x381+N33.8*","E12.200","E13.200x521+N08.3*","E13.201+N08.3*","E14.200x011+N08.3*","E14.200x012+N08.3*","E14.200x013+N08.3*","E14.200x014+N08.3*","E14.200x015+N08.3*","E14.200x016+N08.3*","E14.200x017+N08.3*","E14.200x021+N08.3*","E14.200x023+N08.3*","E14.200x024+N08.3*","E14.200x025+N08.3*","E14.200x026+N08.3*","E14.200x027+N08.3*","E14.200x028+N08.3*","E14.200x029+N08.3*","E14.200x030+N08.3*","E14.200x031+N29.8*","E14.200x091+N08.3*","E14.200x092+N08.3*","E14.200x211+N08.3*","E14.200x212+N08.3*","E14.200x213+N08.3*","E14.200x214+N08.3*","E14.200x215+N08.3*","E14.400x380+G99.0*","E14.400x381+N33.8*","E66.902+N08.4*","E72.006+N29.8*","E72.007","E83.100x008+N16.3*","E85.002","E85.403","E85.411+N29.8*","I12.000x001","I12.900x001","I12.900x002","I12.900x003","I12.900x005","I12.900x006","I12.900x008","I12.900x009","I12.904","I13.100x001","I86.201","M10.001+N16.8*","M10.005+N22.8*","M31.002+N08.5*","M31.003+N08.5*","M31.100","M31.102+N08.5*","M31.305+N08.5*","M31.701+N08.5*","M31.703+N08.5*","M32.101+N08.5*","M32.102+N16.4*","M35.006+N16.4*","M35.007+N16.4*","N00.000","N00.100x001","N00.200","N00.301","N00.400","N00.500","N00.600","N00.700","N00.800x001","N00.801","N00.802","N00.900","N00.900x002","N00.900x006","N00.900x008","N00.900x009","N00.901","N00.902","N01.000","N01.100x002","N01.200x001","N01.300x001","N01.400x001","N01.500x001","N01.600x001","N01.700x001","N01.800","N01.900","N01.900x001","N01.900x002","N01.900x003","N02.001","N02.002","N02.101","N02.102","N02.201","N02.203","N02.301","N02.302","N02.401","N02.502","N02.600","N02.701","N02.702","N02.800x003","N02.801","N02.802","N02.900","N02.900x001","N02.900x002","N03.000","N03.100","N03.200x001","N03.300x001","N03.400","N03.500x003","N03.501","N03.502","N03.503","N03.601","N03.700","N03.800x001","N03.800x003","N03.800x004","N03.801","N03.900","N03.900x002","N03.900x003","N03.900x004","N03.900x005","N03.900x006","N03.900x007","N03.901","N04.001","N04.101","N04.102","N04.200x001","N04.300x001","N04.300x003","N04.400x001","N04.501","N04.502","N04.601","N04.700","N04.800x002","N04.801","N04.900","N04.901","N04.902","N04.903","N05.000x001","N05.000x003","N05.000x004","N05.101","N05.201","N05.301","N05.400","N05.501","N05.600","N05.701","N05.801","N05.802","N05.803","N05.900","N05.900x002","N05.900x003","N05.900x006","N05.900x007","N05.900x009","N06.001","N06.100","N06.200","N06.300","N06.400","N06.500","N06.600","N06.700","N06.800","N06.900","N07.000","N07.100","N07.200","N07.300","N07.400","N07.500","N07.600","N07.700","N07.800","N07.900x001","N10.x00","N10.x01","N10.x02","N11.000x001","N11.100","N11.800x002","N11.800x003","N11.801","N11.802","N11.900","N11.900x001","N11.900x003","N11.901","N12.x00","N12.x01","N12.x02","N12.x03","N13.000","N13.100x001","N13.201","N13.202","N13.203","N13.204","N13.300x005","N13.301","N13.302","N13.400","N13.500x010","N13.501","N13.502","N13.503","N13.504","N13.506","N13.600","N13.600x001","N13.600x002","N13.600x004","N13.601","N13.602","N13.603","N13.604","N13.605","N13.701","N13.801","N13.901","N14.000","N14.101","N14.102","N14.201","N14.301","N14.400","N15.000","N15.101","N15.102","N15.801","N15.900x002","N15.900x003","N15.900x004","N15.901","N17.000","N17.001","N17.002","N17.100","N17.101","N17.200","N17.200x002","N17.200x003","N17.800","N17.900","N17.900x002","N17.900x003","N17.900x004","N17.901","N18.100","N18.200","N18.300","N18.400","N18.500","N18.501","N18.900x011","N18.901","N18.902","N18.904","N19.x00","N19.x01","N19.x02","N19.x03","N20.000","N20.000x001","N20.000x002","N20.000x003","N20.001","N20.002","N20.100","N20.200x001","N20.900","N20.900x001","N20.901","N21.000","N21.001","N21.100","N21.800","N21.900","N23.x00","N25.001","N25.004","N25.100","N25.800x006","N25.802","N25.803","N25.804","N25.805","N25.806","N25.900","N26.x00","N26.x01","N26.x02","N27.000","N27.100","N27.900","N28.001","N28.002","N28.003","N28.004","N28.005","N28.100","N28.101","N28.102","N28.800x001","N28.801","N28.802","N28.803","N28.804","N28.805","N28.806","N28.807","N28.808","N28.809","N28.810","N28.811","N28.812","N28.813","N28.814","N28.815","N28.816","N28.817","N28.818","N28.819","N28.820","N28.821","N28.822","N28.823","N28.824","N28.825","N28.826","N28.827","N28.828","N28.829","N28.830","N28.831","N28.832","N28.833","N28.834","N28.835","N28.836","N28.837","N28.838","N28.839","N28.900x004","N28.900x010","N28.900x013","N28.900x017","N28.900x026","N28.901","N28.902","N30.000","N30.100","N30.201","N30.300","N30.400","N30.800x004","N30.801","N30.802","N30.803","N30.804","N30.805","N30.806","N30.807","N30.808","N30.809","N30.810","N30.900","N30.901","N30.902","N31.000x001","N31.100x001","N31.200x001","N31.200x002","N31.200x003","N31.200x006","N31.200x007","N31.201","N31.201","N31.202","N31.203","N31.800","N31.901","N32.000","N32.001","N32.002","N32.100","N32.101","N32.102","N32.103","N32.104","N32.200","N32.201","N32.202","N32.203","N32.204","N32.300","N32.301","N32.400","N32.800x003","N32.800x008","N32.800x009","N32.800x012","N32.800x014","N32.800x019","N32.801","N32.802","N32.803","N32.804","N32.805","N32.806","N32.807","N32.808","N32.809","N32.810","N32.811","N32.812","N32.813","N32.814","N32.815","N32.900x002","N32.901","N34.000","N34.000x005","N34.001","N34.002","N34.100","N34.101","N34.102","N34.200x003","N34.200x004","N34.200x006","N34.201","N34.202","N34.203","N34.204","N34.205","N34.300","N35.000","N35.000x001","N35.100x001","N35.800","N35.900","N35.901","N36.000","N36.000x007","N36.001","N36.002","N36.003","N36.004","N36.005","N36.100","N36.200","N36.201","N36.300","N36.301","N36.302","N36.802","N36.803","N36.804","N36.805","N36.806","N36.807","N36.808","N36.809","N36.901","N39.000","N39.001","N39.100","N39.200","N39.300","N39.300x002","N39.400","N39.401","N39.402","N39.403","N39.404","N39.405","N39.800","N39.800x001","N39.900","N99.000","N99.001","N99.100","N99.100x003","N99.100x005","N99.101","N99.500","N99.800x006","N99.800x011","N99.803","N99.805","N99.806","N99.808","Q27.305","Q42.200x201","Q51.701","Q60.000","Q60.100","Q60.200","Q60.300","Q60.400","Q60.400x001","Q60.500","Q60.501","Q60.600","Q61.000","Q61.100","Q61.200","Q61.300","Q61.400","Q61.401","Q61.402","Q61.403","Q61.404","Q61.500","Q61.800","Q61.801","Q61.900","Q61.901","Q62.000","Q62.100","Q62.100x802","Q62.100x902","Q62.101","Q62.103","Q62.104","Q62.200","Q62.201","Q62.202","Q62.300x101","Q62.300x301","Q62.300x901","Q62.300x902","Q62.300x903","Q62.300x904","Q62.300x905","Q62.301","Q62.400","Q62.400x001","Q62.400x002","Q62.500","Q62.600","Q62.601","Q62.602","Q62.700","Q62.700x001","Q62.700x101","Q62.700x201","Q62.800","Q63.000","Q63.001","Q63.002","Q63.101","Q63.102","Q63.103","Q63.200","Q63.201","Q63.203","Q63.301","Q63.302","Q63.800x101","Q63.800x902","Q63.801","Q63.900","Q64.000","Q64.100","Q64.100x091","Q64.200","Q64.200x001","Q64.200x021","Q64.301","Q64.302","Q64.303","Q64.304","Q64.400x301","Q64.400x902","Q64.401","Q64.402","Q64.403","Q64.501","Q64.502","Q64.600","Q64.700x201","Q64.700x601","Q64.700x701","Q64.700x801","Q64.700x901","Q64.700x902","Q64.700x904","Q64.701","Q64.702","Q64.703","Q64.704","Q64.705","Q64.706","Q64.707","Q64.708","Q64.800x001","Q64.900","Q85.900x013","Q85.900x029","Q85.903","Q87.800x903","Q87.808","R30.000","R30.000x002","R30.100","R30.100x001","R30.900x001","R31.x00","R32.x00","R32.x01","R33.x00","R34.x01","R34.x02","R35.x00","R35.x00x001","R35.x00x003","R36.x01","R39.000","R39.100x001","R39.100x002","R39.101","R39.200","R39.200x001","R39.801","R79.802","R80.x00","R80.x00x003","R80.x01","R80.x02","R82.000","R82.200","R82.300","R82.500x003","R82.500x004","R82.500x005","R82.500x006","R82.500x007","R82.600x001","R82.700","R82.800","R82.900x002","R82.900x003","R82.901","R82.902","R93.400x001","R93.400x002","R93.400x003","R93.401","R93.402","R93.403","R93.404","R93.405","R94.400","R94.401","R94.402","R94.802","R94.803","S37.000","S37.000x012","S37.000x013","S37.000x015","S37.000x016","S37.000x022","S37.000x023","S37.000x031","S37.000x032","S37.001","S37.002","S37.003","S37.004","S37.010","S37.011","S37.100","S37.101","S37.111","S37.200","S37.200x011","S37.200x022","S37.200x023","S37.200x024","S37.200x081","S37.201","S37.211","S37.300","S37.300x004","S37.300x005","S37.300x011","S37.300x021","S37.300x031","S37.300x081","S37.300x082","S37.300x083","S37.301","S37.302","S37.303","S37.310","S37.813","S37.814","T19.000","T19.100","T19.800x001","T19.801","T19.900","T28.300","T28.800","T28.800x001","T79.500","T79.500x002","T81.800x011","T81.800x014","T83.000x001","T83.001","T83.002","T83.003","T83.004","T83.100","T83.100x001","T83.100x002","T83.100x003","T83.100x004","T83.101","T83.102","T83.103","T83.200","T83.500","T83.500x002","T83.500x003","T83.501","T83.800","T83.800x001","T83.801","T83.802","T83.804","T86.100x001","T86.100x002","T86.100x003","T86.100x005","T86.100x006","T86.100x007","T86.100x008","T86.102","T86.103","T86.104","T86.105","T86.106","T86.107","T86.811","Z45.800x007","Z46.600x001","Z46.601","Z46.602","Z46.603","Z46.800x001","Z46.800x002","Z49.000","Z49.000x002","Z49.000x004","Z49.101","Z49.201","Z52.400"];
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
 
    putMessage('不符合MDCL的ADRG入组条件');
}