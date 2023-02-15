import {putMessage,intersect,SS_VALID} from '../Base.js'
import FB1_group from '../ADRG/FB1.js';
import FB2_group from '../ADRG/FB2.js';
import FB3_group from '../ADRG/FB3.js';
import FC1_group from '../ADRG/FC1.js';
import FC2_group from '../ADRG/FC2.js';
import FC3_group from '../ADRG/FC3.js';
import FD1_group from '../ADRG/FD1.js';
import FD2_group from '../ADRG/FD2.js';
import FD3_group from '../ADRG/FD3.js';
import FE1_group from '../ADRG/FE1.js';
import FF1_group from '../ADRG/FF1.js';
import FF2_group from '../ADRG/FF2.js';
import FF3_group from '../ADRG/FF3.js';
import FF4_group from '../ADRG/FF4.js';
import FJ1_group from '../ADRG/FJ1.js';
import FK1_group from '../ADRG/FK1.js';
import FK2_group from '../ADRG/FK2.js';
import FK3_group from '../ADRG/FK3.js';
import FL1_group from '../ADRG/FL1.js';
import FL2_group from '../ADRG/FL2.js';
import FM1_group from '../ADRG/FM1.js';
import FM2_group from '../ADRG/FM2.js';
import FM3_group from '../ADRG/FM3.js';
import FN1_group from '../ADRG/FN1.js';
import FN2_group from '../ADRG/FN2.js';
import FR1_group from '../ADRG/FR1.js';
import FR2_group from '../ADRG/FR2.js';
import FR3_group from '../ADRG/FR3.js';
import FR4_group from '../ADRG/FR4.js';
import FS1_group from '../ADRG/FS1.js';
import FT1_group from '../ADRG/FT1.js';
import FT2_group from '../ADRG/FT2.js';
import FT3_group from '../ADRG/FT3.js';
import FU1_group from '../ADRG/FU1.js';
import FU2_group from '../ADRG/FU2.js';
import FV1_group from '../ADRG/FV1.js';
import FV2_group from '../ADRG/FV2.js';
import FV3_group from '../ADRG/FV3.js';
import FV4_group from '../ADRG/FV4.js';
import FW1_group from '../ADRG/FW1.js';
import FW2_group from '../ADRG/FW2.js';
import FZ1_group from '../ADRG/FZ1.js';

export default function MDCF_group(record){
    let mdc_zd=["S26.800x011","Q25.800x004","M34.800x009+I52.8*","I48.100x003","I22.800x012","I73.901","I51.400x006","I47.100x004","S75.100x003","S85.100x001","I42.201","I21.200x030","S25.700","Q27.800x031","I25.103","T82.500x001","I72.400","I70.014","I10.x08","I48.400","T82.401","I74.303","I70.200x005","I97.804","I74.800x009","I70.200x004","R57.800x003","Z45.002","Q26.200x003","I25.300x013","I74.401","I72.400x110","I08.100x004","T80.100","S35.200x006","I38.x00x002","I34.101","S65.000x001","I08.100x002","Q21.900","A52.000x001+I52.0*","E63.901+I43.2*","I71.000x025","I51.900x001","I82.900x001","I08.300x007","T81.700x002","S65.500","T82.800x106","I77.800x011","J09.x03+I41.1*","S15.700x001","Q26.800x010","I25.800x002","I44.300x003","I27.200x006","I72.900x003","I77.800x018","I44.102","I50.002","I72.000x023","I87.802","I45.600x005","I27.201","S75.700x001","I27.900x002","I10.x10","T82.003","Q26.800x003","I25.302","Q25.800x002","I42.200x002","I21.210","A52.005+I52.0*","D15.101","I77.806","I21.402","I22.800x005","R94.301","S45.700x001","I08.301","I74.901","D18.000x003","I71.205","I77.100x018","I49.400x001","I86.801","I21.103","I80.800x006","I71.000x002","I27.200x004","I08.000x008","I21.200x003","I72.400x030","S75.200x001","I87.801","I74.402","I77.805","I08.800x003","I50.908","R94.300x012","I80.101","Q26.800x004","I27.200x018","I72.400x212","Q26.200x005","I08.100x003","I74.300x210","I06.100","I27.200x020","T81.700x103","I24.800x007","I30.102","I45.901","Q20.802","I71.100","I20.001","Q87.400","A39.500","T82.500x003","I74.200x001","I31.000x002","S26.800x021","Q82.800x015","I49.800x005","Q23.801","R00.800x001","E13.500x541+I79.2*","I42.500x001","I80.300x006","Q25.400x012","I34.900","I72.806","I87.116","R55.x00x001","I80.208","I50.900x018","T81.700x005","I08.801","I10.x00x015","Q25.900","Q20.500x001","I09.100x001","Q27.806","T82.800x009","T82.800x006","I22.100x001","Q24.800x025","T79.101","R55.x00x002","I42.001","I87.112","I51.600x002","I99.x01","I77.114","I71.101","I77.121","I78.101","Q25.400x010","Q27.800x020","I45.501","I74.500x009","I49.800x001","T82.800x408","Q27.306","I45.102","I80.209","Q25.701","I71.600x005","I35.805","I22.000x005","I49.403","I31.200x001","I27.200x015","S35.700x001","I25.102","I22.800x004","I45.600x007","I20.101","I45.800x002","Q87.203","Q21.202","Q24.503","I83.903","I30.100x007","T82.811","I10.x12","I42.300","I44.000","I72.800x061","I77.300x003","I95.800x001","I07.100x001","I21.204","T82.800x404","I33.008","I70.200x063","I97.000x002","I45.103","I20.102","S55.800","I01.900","I06.800x001","D15.104","Q25.301","I77.127","R55.x00x005","T70.200x007","I70.219","T82.503","E11.501+I79.2*","I45.500x002","I45.200","I13.900x001","J11.801+I41.1*","I06.000","C75.500x001","I51.304","D35.601","I71.203","S35.700x003","I72.101","I25.800x003","Q22.100","T82.901","I72.800x102","S35.500x007","Q20.900","I73.902","Q25.406","I51.800x006","I71.000x026","J10.800x003+I41.1*","S35.800x001","Q24.810","I70.902","I36.900","I74.200x004","Q22.801","T82.807","I44.400","I31.904","I31.302","S25.001","I66.205+G46.2*","I50.105","S35.500x003","I71.000x022","T82.100x011","I82.800x004","S35.903","Q26.301","I24.800x004","I46.100x001","I74.300x112","I80.804","E10.502+I79.2*","I86.816","T81.700x303","I77.204","I95.200","S25.101","E11.700x023","E76.300x002+I52.8*","A18.820+I39.8*","I74.300x222","I24.000x010","Q26.901","S75.001","I70.000x011","T82.800x201","T82.800x206","I21.200x009","I77.300x002","I87.100x008","I74.300x223","I95.100","S25.000","I80.902","Q24.813","I87.111","Q27.800x037","I49.401","I08.008","I20.806","M05.306+I41.8*","I77.800x013","Q25.404","I10.x05","I70.800x006","I97.800x010","I70.209","I51.706","I33.000x008","T82.202","I77.800x019","I08.004","I27.200x016","R55.x00x003","I30.100x005","S85.700x001","I21.004","T81.700x003","I09.100x002","Q22.301","I22.800x001","I34.000x001","T86.300x001","I45.400x001","I73.800x007","R55.x00x008","T86.200x002","I20.802","T82.100x002","T82.100","T82.800x003","T82.301","I72.002","S35.501","I74.310","I87.201","R93.100x002","Q25.401","T82.800x403","I33.010","I51.700x004","I35.804","I24.901","I49.301","S35.100","I15.000","S45.101","I25.500","I77.800x021","I42.800x006","C79.800x819","I48.900x004","Q25.601","C79.800x807","Q21.105","I10.x00x017","S45.301","Q24.505","I51.704","T82.806","I51.701","I42.800x005","D48.712","I72.804","I71.003","I22.800x013","I49.800x006","I86.814","S25.400","Q24.800x010","I83.200x001","Q25.405","R94.304","A52.008+I32.0*","I28.000x002","I47.000","I27.000x008","R94.306","Q27.808","E05.900x004+I43.8*","I35.802","T82.001","I27.200x022","I49.802","D15.106","I33.003","I49.300x005","Q21.104","I22.800x017","I21.300x005","I42.401","I77.600x012","S75.100x001","I87.102","Q24.800","A39.503+I41.0*","I15.102","I87.805","I87.900","Q24.812","S35.300x003","I05.000","I45.401","I86.815","I02.000x001","I51.001","T82.800x410","I37.800","I72.501","T81.702","Q27.812","S75.800","I72.300x022","I74.202","I71.204","I72.000x031","A18.809+I32.0*","C79.800x863","E16.800x101","Q21.102","Q21.106","S35.500x001","S85.400x001","I45.601","I47.100x013","I74.300x510","I73.800x003","E85.416+I43.1*","I71.000x008","I72.100x005","C75.501","I71.004","I09.200x003","I72.400x130","I06.200","Q27.200x003","Q28.900","I08.000x003","I80.300x005","I20.807","S35.503","I72.300x013","I72.300x033","I51.900x002","I72.800x042","S35.200x004","I25.401","R07.301","D44.700","T82.800x105","I42.803","R00.200","I25.400x005","S35.701","I77.005","K55.000x015","Z03.400","I50.104","Q27.900","I10.x00x016","I74.200x007","I73.800x001","B33.200x004+I41.1*","I74.005","D15.103","I72.000x011","E10.700x011","I20.002","I77.109","I25.800x011","I11.001","A39.501+I32.0*","I07.100","S35.300x005","I08.302","Q21.805","I74.300x420","R00.801","T81.700x104","I77.500","T82.814","I24.000x004","I08.200x002","I28.000x003","Q27.817","I08.201","T82.800x401","I70.810","S25.801","I70.900x004","I50.001","I27.200x012","I25.800x010","I28.801","I51.709","I70.911","I74.300x132","T82.800x005","I08.000x007","I70.204","I21.200x010","Q24.807","I51.500x006","I33.009","I51.500x002","I77.000x014","I72.808","I23.601","I77.202","I73.100","I72.200","I33.002","Q23.901","I09.802","A52.000x011+I39.0*","I31.901","I87.117","I87.110","I42.802","B57.201+I98.1*","I51.900x003","S65.000x002","I47.103","I05.200x001","I71.000x027","Q24.509","Q24.800x011","I47.200x007","Q27.308","I72.400x223","I97.803","T82.801","I72.000x012","I70.207","I45.500x004","I86.806","I77.100x005","I77.600x016","Z45.001","S95.200","Q27.800x042","I89.001","I34.801","I08.300x006","I71.000x013","Q27.809","I71.206","I36.800x003","T82.904","I97.800x002","T82.800x306","T82.800x207","I72.800x121","I82.204","I22.100x002","I71.000x015","T81.700x202","I51.400x005","R96.001","I38.x00x006","I70.900x007","T82.800x008","A39.502+I39.8*","R00.300","S35.200x005","I70.000x006","I77.604","I72.400x320","I74.001","I09.900x002","S75.000","I77.800x012","I42.600","T82.100x007","B05.803","I07.200","I74.504","I28.803","D44.702","I77.014","I77.800x015","I72.000x022","S65.800","I08.007","I27.200x009","I40.000x007","I47.200x003","I71.200x011","T82.800x202","I49.805","I74.300x122","I70.000x012","T82.800x307","I70.200x065","I51.707","I22.800x008","S35.001","I47.200x008","I49.501","I27.900","I87.001","I72.000x321","I74.300x310","I70.802","Q24.508","I77.100x032","I31.001","I10.x00x008","I25.800x012","I08.103","I27.200x019","S75.000x004","I27.001","I71.000x016","Q21.200","I25.902","Q25.300","I74.500x011","I08.304","I87.113","S85.801","T82.501","I70.912","I05.200","J10.802+I41.1*","I72.302","I50.900x002","Q25.400x009","T82.100x012","T82.800x001","I49.801","I73.805","Q24.506","I86.805","I01.200","Q24.803","S35.201","I31.101","C79.808","I74.300x230","R01.100","I77.800x002","I33.000x011","S35.902","S85.200","I72.300x006","Q20.200","I34.102","I47.107","I05.800","I71.000x003","I74.300x213","D18.000x005","I20.900","I74.300x131","I15.800x006","Q25.400x013","I22.800x018","T82.600","I72.304","I77.103","I31.100","Q20.601","I77.125","I09.000","I89.100x003","R93.102","I33.000x006","M31.400","I33.005","I86.807","T82.100x009","I44.101","I74.300x330","I74.300x220","I77.100x014","I74.003","R57.803","T81.700x403","I40.000x006","E14.700x023","D15.105","I08.102","S75.900x002","Q25.402","Q82.800x016","I21.200x021","I42.800x002","I71.002","I71.201","T82.800x402","I37.000","T81.700x105","R07.200","I77.800x010","I97.001","I35.200","I40.001","Q24.200","S35.700x004","T82.800x004","I10.x13","I51.200x001","I70.001","I38.x02","I71.000x028","Q23.200x003","I87.103","I10.x04","T82.300","T82.800x204","R55.x02","R01.200x003","I08.300x002","I09.900","T13.400","Q23.000","I34.803","Q24.507","I74.300x113","Q20.101","S85.101","S25.500","Z45.006","D18.000x841","E85.408","I77.107","I37.900","S75.100x002","I34.802","I25.300x009","I70.201","R57.100","I11.901","I71.000x017","I33.004","I07.000x001","I74.301","I97.800x005","T81.700x102","I77.000x011","Q22.000","I50.100","I21.207","Q20.000","I33.011","I49.800x003","I51.801","I49.404","S55.200x001","J94.000","R09.800x082","Q25.408","Q25.700x006","Q25.100","I74.800x001","I74.300x320","I83.100x001","Q22.102","I08.800x002","I25.400","Q82.812","S25.200x001","I77.203","I07.900","R57.200","S35.400x001","I47.109","I28.100","Q23.300x002","Q23.401","I15.800x002","I08.009","I51.700x009","T82.800x301","M05.304+I52.8*","I82.801","I77.600","I74.807","I74.500x007","I25.300x006","T82.502","I97.800x001","S45.300x001","I51.702","I38.x03","Q21.800x003","Q26.200x004","S35.402","I45.101","T82.800x411","S35.000","I70.000x008","I87.000","T82.100x006","S25.300x001","I74.102","I83.901","T82.201","D18.000x837","I22.900x001","I77.100x015","I74.502","I72.004","I45.300","I51.502","A52.004+I39.1*","I51.901","R57.900","Q27.800x008","I48.900x015","I25.300x012","I27.200x021","I21.303","I44.602","I80.901","I08.200x001","I48.300","Q24.300","Q26.800x001","Q27.818","I23.200x001","A18.821+I41.0*","S35.205","I71.300","I47.105","Q25.700x008","Q26.400","C49.300x006","D35.600x001","I77.200","I80.201","I80.800x002","I72.100x003","I77.100x031","I51.705","S65.700x001","I77.600x004","Q25.403","I51.803","S25.802","I82.800x003","B58.800x001+I41.2*","I77.111","Q24.809","I30.100x006","I82.804","I80.800","I31.900x010","T82.800x208","B37.600+I39.8*","E16.800x021","I23.500x001","I70.206","I71.005","I21.302","I82.802","I08.300x004","I72.400x133","I42.100x002","I74.006","S26.900","I82.202","I78.803","T82.800x302","A52.003+I79.0*","I42.800x007","I74.300x111","I74.503","Q24.601","A48.300","Q27.309","I50.103","I70.200x011","I49.804","I74.300x520","I74.308","R94.300x011","I74.801","I78.000","I72.900","I15.103","I28.804","S85.102","I80.803","Q26.800x002","I51.302","S35.500x002","I20.800x006","I10.x00x002","S55.000x001","I73.803","R55.x00x004","I72.400x420","I70.110","B57.202+I41.2*","S85.000","I25.800x004","I37.100","I24.000x009","I08.000x005","I72.900x002","I97.800x011","T82.803","B26.803+I41.1*","I72.000x032","I72.600","Q24.900","T81.700x004","I51.400","I72.103","T82.903","I77.605","I72.400x121","I70.111","I72.100x007","E74.008+I43.1*","T81.700x308","I31.300","R07.400","I08.300x003","R96.000x001","E16.804","C49.402","I33.000x001","A52.000+I98.0*","I77.110","I45.600x003","D15.100","I10.x01","I47.200x013","I87.118","T82.103","B57.002+I41.2*","I09.200x004","I74.307","I70.000x010","Q23.200x004","I77.117","I74.300x430","Q25.700x012","I42.905","A36.802+I41.0*","I47.200x001","Q23.800x008","I77.006","I71.000x004","I33.001","I87.114","I22.000x003","I78.900","I77.106","I49.002","I50.907","Q26.800x006","S75.900x001","I74.300x410","S35.401","I70.000x007","I77.100x004","T81.700x204","R94.300x010","I87.106","Q24.513","Q26.000x004","I72.400x410","I25.300","I33.000x022","I10.x00x009","Q21.204","Q23.001","I77.800x016","T82.809","I70.208","I25.400x001","I77.800x006","I74.305","T82.800x407","A01.000x016+I41.0*","I97.800x015","I87.104","I21.200x019","I47.111","I51.903","I77.129","I25.100x003","B25.803+I41.1*","Q21.203","Q24.510","I74.200x005","I77.800x020","I50.900x019","Q22.900","Q25.407","I71.000x023","T82.800x303","S35.500x008","I20.000x004","T82.100x014","R07.101","T82.800x102","I77.104","D15.102","S25.301","I46.000","I80.100x003","I44.601","Q21.804","I21.900x001","I47.101","I77.112","I33.000x007","I74.500x012","E11.502+I79.2*","I08.101","A52.002+I79.1*","T82.601","Q20.600x001","Q22.800x004","R57.901","I50.900","I48.301","I97.100x004","Q27.815","I72.400x310","S65.100x002","T82.804","I13.000x001","Q26.902","Z03.500x001","I01.100","Q22.400x003","I71.800","I27.200x002","I86.804","Q26.200x002","I71.500","I77.800x017","I25.301","E83.103","I72.000","Q27.301","F01.101","I72.800x101","S55.700x001","I07.900x001","Q25.700x011","Q23.900x001","S26.811","I51.402","I50.000x005","Q20.600","I31.800x003","S45.200x002","A54.805+I32.0*","S35.300x002","D48.711","I27.200x013","I51.802","I71.903","I72.300x012","I70.900x002","I21.200x014","I20.800x007","I97.800x014","I21.105","S26.813","S35.101","R55.x00x009","I74.004","S25.900","I72.805","I87.100x003","I47.100x001","T82.302","I44.500","I97.800x008","Q23.805","I71.902","I82.900x002","I25.403","I71.000x024","B33.200x001+I32.1*","D18.000x836","I77.603","Q26.800x008","I72.100x004","I21.400x003","T80.000","I21.200x022","I22.800x015","I70.805","S95.900x001","I72.400x230","I47.900","I34.800x003","I49.303","I86.800x011","I25.800x006","S25.501","T82.702","I42.501","I95.900","I09.200x001","S35.502","A52.006+I39.8*","Q27.001","I70.211","S26.800x082","I74.500x002","I49.001","I74.201","S25.100x002","Q85.900x048","I22.000x001","T81.700x405","I72.400x233","Q24.800x027","T81.700x404","Q26.302","I47.100x005","I08.300x001","I25.104","B33.200","B57.001+I98.1*","Q25.703","R55.x00x010","S85.100x002","I45.500x005","I72.814","I97.102","I70.000x003","I27.200x017","S85.900x001","I70.218","I25.600x001","I77.803","E03.900x004+I43.8*","I72.300x003","I74.800x007","T82.100x005","Z52.700","I71.900x002","S45.800","I42.301","S65.401","I34.000","I47.201","I72.400x210","I35.900","I44.200","E10.700x031","Q25.600","B33.201+I41.1*","I21.200x029","T82.000x001","I33.900","I15.900","S26.010","I24.003","I80.800x007","T82.800x409","I80.303","I22.800x016","I07.000","I35.100","I27.000x007","I71.100x003","I77.201","S95.700x001","I74.300x233","E10.700x022","I28.800x003","I36.800x002","I21.300x008","I30.100x008","I36.200","I49.101","Q23.100","Q20.801","Q27.400","T82.800x405","A39.504+I52.0*","I70.000x013","I77.131","S35.300x004","I30.101","I28.800x008","Q24.800x014","T86.300x002","C49.900x001","Q24.100","R94.305","I72.900x004","E14.500x031+I43.8*","S35.200x001","T82.800x103","Z45.800x006","I50.000","I83.001","I71.900x004","S85.800x001","I50.000x006","I34.202","Q22.200","I71.000x029","I49.800x016","I50.900x001","I24.801","I30.900x001","I70.217","I30.103","Q23.800","C38.000","I72.400x132","I70.901","I87.119","I80.301","R55.x00x006","I08.100","T82.800x304","R00.800","T82.900x001","I21.200x024","I42.800x001","I74.500x013","I78.102","R00.001","I28.900x001","I21.200x020","I42.100","I97.900","S35.801","I22.000x004","I08.000x010","I72.300x032","I74.800x006","I82.900x003","I71.000x006","Q21.206","M31.700","I74.000x003","I51.700x015","E88.907+I43.1*","R09.800x081","S75.000x005","Q24.800x028","Z03.501","I42.904","I36.800x005","I70.900x003","I34.800x002","I27.801","I20.801","I40.000x003","I15.800x004","Q23.200x002","Q26.300","I72.001","I47.202","I86.800x015","I51.700x003","I73.800x008","I77.100x028","I49.800x002","S26.800x083","I30.900x003","T82.000","I22.800x002","A18.808+I32.0*","I51.900","I71.600x004","I33.006","I77.000x008","I72.400x222","I24.100x001","I71.200x006","I45.600x004","I15.200x001","I70.200x031","I47.106","I70.002","Q23.800x004","I27.202","I20.000x005","I33.000x024","D48.100x024","C38.000x004","I47.200x009","I34.800x005","I35.803","E16.800x102","I25.300x005","I08.100x001","I08.300","I42.000x001","I70.200x064","M05.200x092","I72.300x023","I74.800x005","I77.126","I35.200x001","I33.000x012","S55.100x001","I30.100","I51.800x005","I44.700","I71.000x011","S75.000x003","Q20.301","Q23.101","I08.006","I21.106","I83.101","I42.900","T81.700x304","S26.000x002","I08.005","T81.700x302","I72.100x006","I47.200x011","S45.900x001","E13.500x241+I79.2*","I77.807","I35.807","R03.001","I72.003","S65.300","I77.900","I21.300x003","S26.810","I33.000x021","D18.109","I24.000x005","I70.112","I74.002","T82.002","Q20.200x002","C38.002","T82.700","I21.300x004","I24.002","I97.800x006","I33.007","I25.300x011","I77.108","I87.200x001","I47.100","Q20.400","I89.007","I77.105","I72.000x033","I80.002","I22.800x009","I50.100x006","T82.600x001","Q26.500","I72.404","I49.402","I77.804","S65.200","D21.400x004","I51.301","I77.000x015","Q25.705","T82.800x203","I08.303","Q27.800x035","Q25.702","I71.200x010","S45.300x002","I49.500","D86.800x005+I41.8*","I36.100","I72.400x232","I82.200x001","I51.800x004","S35.203","S26.910","T82.000x002","I80.204","Q26.000x003","I08.901","I72.800x093","I10.x03","I45.800x004","I80.207","R01.000","T82.800x305","I05.900","S75.901","I87.115","T82.100x015","I82.800x009","Q21.100","G90.800x004","Q24.502","I45.000","I47.200x010","I45.900x002","I70.012","T82.101","S35.300x001","S26.000x001","I08.000x002","I21.200x018","I21.200x023","I87.100x007","I74.800x008","Q28.200x008","I15.200x003","I08.800","I42.901","I80.102","I31.900x009","I31.800x001","I77.802","E14.500x032+I43.8*","T81.700x401","I45.801","I44.302","E11.400x311+G99.0*","Q27.800x034","C79.800x830","Q82.811","I21.002","I49.800x010","R55.x00x011","T82.303","I21.001","M05.307+I39.8*","I25.900","B49.x15","I38.x00x007","Q26.500x001","Q20.300x002","I72.400x520","I50.900x017","I71.200x014","I97.801","I71.006","T82.808","Q22.500","I71.401","I74.802","S45.701","Q24.800x018","I70.010","T81.701","S95.800","I40.800x001","I25.000x001","I15.200x004","I71.000x007","Q21.101","I15.800x001","I06.900","I74.500x008","R94.300x007","I80.103","I10.x06","I74.200x006","I34.800x006","I71.000x005","I31.903","I48.000","I21.205","Q24.901","I10.x09","Q21.205","I42.902","I47.200x005","Q27.803","I51.501","I71.202","Q28.200x007","I82.800x005","I72.300x031","Q24.504","I45.900x003","Q27.800x041","I20.808","Q24.814","T82.100x008","I08.200","S35.900x001","C38.001","I77.800x008","I71.400x002","I47.200x014","I77.102","Q26.600","I47.100x014","I83.904","I67.200x003","I25.402","Q24.600x002","I87.202","S85.300x001","I31.301","Q26.000x002","R55.x00x012","M32.104+I43.8*","I71.000x012","I72.400x112","I35.000","I28.802","I35.801","I49.800x015","I08.900","I80.206","I21.003","Q27.811","S35.302","I86.800x005","S26.812","I33.000x019","I35.100x003","I31.100x001","D18.000x004","Q87.809","I35.101","C38.800","Q26.801","I80.001","Q24.000x002","I72.800x151","I83.902","I74.300x133","I40.900","T82.800x308","I34.200","Q23.400","I82.806","I71.000x014","S65.900x001","T82.504","I72.005","S25.800x003","I86.800x017","I40.800x003","S35.100x003","I70.203","I01.000","I08.000x009","Q24.800x012","I35.800x003","I45.600","I73.800x006","I25.800x009","I21.200x025","Q21.800","I82.201","I21.200x026","I51.303","I10.x00x007","I42.701","I31.900x008","I74.304","I70.003","S65.501","I72.400x122","I72.305","I77.800x022","R94.308","I40.002","E10.700x023","D18.000x835","I51.403","I22.800x003","I71.402","I25.300x008","I72.400x330","I35.806","I08.000x001","I20.000","I21.212","Q26.000x001","I48.900x003","I08.306","I21.208","T82.810","T82.800x101","I70.013","Q27.800x039","I74.806","I49.300x002","R68.800x001","S95.100","I10.x14","I77.800x009","I08.305","R55.x00x014","I72.000x013","S45.000","S25.201","I97.800x013","M32.109+I39.8*","I70.910","I80.104","I08.003","Q26.800x007","I77.113","T82.400","I70.011","Q24.400x003","I80.202","Q24.400","I23.400x001","A18.818+I79.8*","I73.001","I86.813","Q22.800x007","Q27.300x009","I23.800x001","I09.200","I07.800","Q24.800x026","T82.805","I31.000","R94.300","I44.201","M31.804","M31.600","D18.000x840","S35.901","I21.206","A52.000x006+I39.1*","I46.901","I15.800x003","I87.100x009","I74.300x123","D18.000x822","T81.800x010","B33.200x002+I39.8*","I28.800x007","S26.801","I51.404","I45.804","R57.801","I08.100x005","I23.300x001","Q24.511","I73.802","I47.203","I95.000","I21.200x011","S45.201","E14.700x022","I38.x01","I77.800x024","S75.200","I08.000","I97.800x020","I51.100x001","Z45.005","I21.200x016","D21.300x005","I72.400x220","M10.004+I43.8*","S35.500x004","S55.101","I97.800x016","I70.000x005","I70.210","I77.100x012","Q20.302","R94.300x003","R57.900x002","I20.803","A52.009+I39.3*","Q23.200","Q20.800x003","I22.100x003","I97.800x009","I47.200x006","Q24.811","I72.300x021","I71.007","A52.007+I41.0*","D18.000x001","I77.600x013","I72.800x103","I08.300x005","Q24.512","I70.800x005","Q27.303","I45.502","I51.700x014","I71.000x021","I24.800x001","I83.000","I74.300x212","I70.900x006","I05.900x001","I37.200","S65.400","I72.400x430","I35.000x003","I82.803","I77.118","Q21.400x001","I21.211","I31.902","I20.005","I34.001","Q24.000x003","I38.x00x005","Q25.303","I25.802","I50.101","I25.901","Q23.803","T81.700x205","I22.000x002","S26.800x031","T81.700x201","T82.703","I77.801","I25.800x005","S35.202","Q25.000","I15.100x001","I77.800x014","Q24.804","I77.100x029","I15.200x002","I73.804","I71.600x001","I40.800x002","I82.203","I51.703","I70.200x061","I27.200x003","I30.900","Q21.103","I34.100","T82.100x003","I70.200x062","I44.303","I49.302","I71.100x002","I42.801","I27.200x005","Q21.100x001","I24.000x003","I48.100","I72.301","I50.906","I21.104","I21.901","I25.300x010","Q21.300x002","I27.100","I47.104","I78.801","R57.000","T81.703","B01.800x001+I41.1*","A38.x00x002+I41.0*","I20.003","R03.100","I72.400x530","R02.x00","I72.400x113","I48.401","Q24.501","S09.000x001","T80.000x001","I74.300x030","Q21.300x001","I82.100x001","I72.800x051","C45.200","D18.010","M05.200","I21.200x015","T82.102","I97.000","I70.200x021","I72.300","E16.800x011","Q25.200","I05.100","T81.700x402","I74.902","I23.000x001","T82.100x010","T81.700x301","I22.800x014","I48.200","I71.901","I47.102","I74.300x232","I08.000x004","Q21.300x003","I72.400x213","I49.800x007","Q26.100","I49.900","Q20.300","I70.200x002","I22.800x007","I70.812","R57.101","I47.200","I51.700","I73.903","I77.100x027","I83.905","Q26.200x001","Q27.800x018","I26.001","T82.100x013","B57.200x003","S35.204","I08.000x006","I36.801","I21.401","I77.601","I72.100","Q23.300","I27.000x009","I72.405","I74.302","I82.805","I51.700x006","I51.600x003","I05.000x001","I15.200x005","I72.800x053","I23.100x001","M32.105+I32.8*","I51.700x007","S35.200x003","T81.700x101","I11.002","I33.000x020","Q22.400","R00.100x001","I74.501","S85.500","I77.123","I74.300x121","I77.101","S35.200x007","I72.303","Q20.100","I20.004","I72.401","Q21.802","R94.307","I27.000x010","I49.100x001","Q24.800x030","S95.000","S35.301","Q26.800x005","I21.000x005","I67.200x004","R93.101","R93.103","I08.104","I40.000x005","I77.600x014","E05.903+I43.8*","I70.004","I44.100","I97.800x018","I97.802","I35.808","I72.400x131","I21.200x027","R94.303","A54.804+I41.0*","I08.001","M05.305+I32.8*","I77.011","I97.101","S55.900x001","R57.802","S75.000x002","Z45.003","S35.400x002","I28.800x005","I72.006","Q21.000","B57.200x001","B67.903","S35.800x002","I51.000x001","I70.000x009","Q24.806","Q20.500","T11.400","I08.002","I31.300x005","Q27.200x002","R00.800x003","D18.006","I82.900x004","T81.700x203","I30.801","S35.500x005","Q27.800x007","I51.708","I74.101","I70.804","I86.802","I49.200x001","I70.213","A52.000x007+I39.1*","R00.000","I72.800x111","Q24.800x017","Q21.201","I25.300x007","Q25.500","I21.900","S45.001","I34.201","I15.101","Q27.307","I10.x02","Q22.800x005","I80.302","I83.102","I50.102","I72.400x111","Q22.802","I47.204","I77.600x015","Q24.603","I72.403","I24.900x001","I80.203","R55.x00x013","A32.802+I39.8*","I77.800x007","I97.800x004","I48.100x002","E12.500","M05.302+I43.8*","T82.704","I45.602","E11.500x021+I79.2*","Q24.805","Q22.600","Q25.700x007","I77.602","T82.800x406","I22.800x006","I72.901","I77.120","I33.000x004","S75.700x002","I09.801","I71.801","Q22.302","Q24.300x002","I40.100","I77.115","Q24.815","E10.400x311+G99.0*","I36.800x004","I22.800x010","I72.400x010","Q24.808","Q24.602","I40.000x004","T82.800x104","I44.304","I30.000","I87.101","I21.213","Q25.302","I07.200x001","E11.700x022","I21.200x017","I24.001","T82.800x205","S65.100x001","I47.108","I47.110","I51.401","I67.203","I71.001","I77.013","T82.900x002","I20.006","T86.200x001","Q28.900x001","I72.402","I36.000","I42.800x004","I01.800x001","I97.800x017","I70.214","I83.900x004","I72.800x023","T82.500x002","Q23.802","I95.101","Q25.704","I72.400x123","A54.802+I39.8*","S35.500x006","I35.000x002","S35.102","R00.100","I77.012","I72.813","I77.007","I22.800x011","Q23.804","I74.500x010","I77.600x001","R55.x00x007","Q27.100"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCF入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=FB1_group(record)){
        return result;
    }

    if (result=FB2_group(record)){
        return result;
    }

    if (result=FB3_group(record)){
        return result;
    }

    if (result=FC1_group(record)){
        return result;
    }

    if (result=FC2_group(record)){
        return result;
    }

    if (result=FC3_group(record)){
        return result;
    }

    if (result=FD1_group(record)){
        return result;
    }

    if (result=FD2_group(record)){
        return result;
    }

    if (result=FD3_group(record)){
        return result;
    }

    if (result=FE1_group(record)){
        return result;
    }

    if (result=FF1_group(record)){
        return result;
    }

    if (result=FF2_group(record)){
        return result;
    }

    if (result=FF3_group(record)){
        return result;
    }

    if (result=FF4_group(record)){
        return result;
    }

    if (result=FJ1_group(record)){
        return result;
    }

    if (result=FK1_group(record)){
        return result;
    }

    if (result=FK2_group(record)){
        return result;
    }

    if (result=FK3_group(record)){
        return result;
    }

    if (result=FL1_group(record)){
        return result;
    }

    if (result=FL2_group(record)){
        return result;
    }

    if (result=FM1_group(record)){
        return result;
    }

    if (result=FM2_group(record)){
        return result;
    }

    if (result=FM3_group(record)){
        return result;
    }

    if (result=FN1_group(record)){
        return result;
    }

    if (result=FN2_group(record)){
        return result;
    }

    if (false && record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合FQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'FQY';
    }

    if (result=FR1_group(record)){
        return result;
    }

    if (result=FR2_group(record)){
        return result;
    }

    if (result=FR3_group(record)){
        return result;
    }

    if (result=FR4_group(record)){
        return result;
    }

    if (result=FS1_group(record)){
        return result;
    }

    if (result=FT1_group(record)){
        return result;
    }

    if (result=FT2_group(record)){
        return result;
    }

    if (result=FT3_group(record)){
        return result;
    }

    if (result=FU1_group(record)){
        return result;
    }

    if (result=FU2_group(record)){
        return result;
    }

    if (result=FV1_group(record)){
        return result;
    }

    if (result=FV2_group(record)){
        return result;
    }

    if (result=FV3_group(record)){
        return result;
    }

    if (result=FV4_group(record)){
        return result;
    }

    if (result=FW1_group(record)){
        return result;
    }

    if (result=FW2_group(record)){
        return result;
    }

    if (result=FZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}