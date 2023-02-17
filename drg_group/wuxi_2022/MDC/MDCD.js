import {putMessage,intersect,SS_VALID} from '../Base.js';
import DA1_group from '../ADRG/DA1.js';
import DB1_group from '../ADRG/DB1.js';
import DB2_group from '../ADRG/DB2.js';
import DB3_group from '../ADRG/DB3.js';
import DC1_group from '../ADRG/DC1.js';
import DC2_group from '../ADRG/DC2.js';
import DD1_group from '../ADRG/DD1.js';
import DD2_group from '../ADRG/DD2.js';
import DE1_group from '../ADRG/DE1.js';
import DE2_group from '../ADRG/DE2.js';
import DG1_group from '../ADRG/DG1.js';
import DG2_group from '../ADRG/DG2.js';
import DJ1_group from '../ADRG/DJ1.js';
import DK1_group from '../ADRG/DK1.js';
import DR1_group from '../ADRG/DR1.js';
import DS1_group from '../ADRG/DS1.js';
import DT1_group from '../ADRG/DT1.js';
import DT2_group from '../ADRG/DT2.js';
import DU1_group from '../ADRG/DU1.js';
import DV1_group from '../ADRG/DV1.js';
import DW1_group from '../ADRG/DW1.js';
import DZ1_group from '../ADRG/DZ1.js';

export default function MDCD_group(record){
    let mdc_zd=["A18.200x002","A18.200x005","A18.201","A18.202","A18.203","A18.205","A18.400x018","A18.400x019","A18.600","A18.601+H67.0*","A18.800x006+K93.8*","A18.800x025+K93.8*","A18.800x034+K93.8*","A18.802+K93.8*","A18.803+M63.0*","A18.804+K93.8*","A18.805+K93.8*","A36.000","A36.000x002","A36.000x003","A36.000x004","A36.100","A36.200","A36.200x002","A52.700x003+J99.8*","A52.700x004+J99.8*","A52.703+J99.8*","A66.501+J99.8*","A69.000","A69.000x002","A69.100x001","A69.100x002","A69.100x003","B00.200x001","B00.201","B00.203","B02.800","B02.801+H62.1*","B05.300+H67.1*","B08.000x003","B08.500","B08.501","B08.802","B36.902+H62.2*","B36.903+H62.2*","B37.000","B37.001","B37.002","B37.003","B37.200x005+H62.2*","B37.800x084","B44.200x001+J99.8*","B44.800x001","B44.800x004+H62.2*","B44.800x006","B44.800x007","B44.804","B48.100","B48.300x002+K93.8*","B49.x05","B49.x06","B49.x07","B49.x08","B49.x09","B49.x10","B87.300x002+J99.8*","B87.400x001+H94.8*","C00.000","C00.001","C00.002","C00.100","C00.101","C00.102","C00.200","C00.200x002","C00.300","C00.301","C00.302","C00.303","C00.304","C00.400","C00.401","C00.402","C00.403","C00.404","C00.500","C00.500x002","C00.500x003","C00.500x004","C00.500x005","C00.600","C00.800","C00.900","C01.x00","C01.x00x003","C01.x01","C02.000","C02.000x002","C02.100","C02.100x001","C02.101","C02.200","C02.200x002","C02.201","C02.300","C02.300x002","C02.300x003","C02.400","C02.800","C02.900","C02.900x002","C03.000","C03.000x002","C03.001","C03.100","C03.100x002","C03.101","C03.900","C03.900x001","C03.901","C04.000","C04.100","C04.800","C04.900","C05.000","C05.100","C05.200","C05.800","C05.900","C05.900","C05.900x002","C06.000","C06.001","C06.100","C06.100x002","C06.100x003","C06.100x004","C06.100x005","C06.101","C06.102","C06.200","C06.800","C06.900","C06.901","C06.902","C07.x00","C07.x00x003","C08.000","C08.100","C08.800","C08.800x001","C08.900","C08.900x001","C09.000","C09.100","C09.100x001","C09.100x002","C09.100x003","C09.800","C09.900","C09.901","C09.902","C10.000","C10.100","C10.101","C10.102","C10.200","C10.300","C10.400","C10.800","C10.800x002","C10.900","C11.000","C11.001","C11.100","C11.101","C11.102","C11.200","C11.200x002","C11.201","C11.202","C11.300","C11.300x001","C11.300x004","C11.300x005","C11.300x006","C11.301","C11.302","C11.800","C11.801","C11.900","C11.901","C12.x00x002","C13.000","C13.100x001","C13.100x002","C13.101","C13.200","C13.800","C13.900","C13.901","C14.000","C14.001","C14.002","C14.003","C14.200","C14.800","C14.800x001","C14.800x002","C14.800x003","C14.800x004","C14.800x005","C14.800x006","C14.800x007","C30.000","C30.001","C30.002","C30.003","C30.004","C30.005","C30.100","C30.101","C30.102","C30.103","C31.000","C31.100","C31.200","C31.300","C31.800","C31.801","C31.900x001","C32.000","C32.001","C32.100","C32.100x004","C32.101","C32.102","C32.103","C32.104","C32.200","C32.300","C32.800","C32.900","C39.000","C39.801","C41.000x018","C41.000x019","C41.000x020","C41.000x021","C41.000x023","C41.000x025","C41.000x027","C41.001","C41.002","C41.003","C41.004","C41.005","C41.006","C41.007","C41.008","C41.009","C41.010","C41.011","C41.012","C41.100","C43.000","C43.200x001","C43.200x003","C43.201","C43.300","C43.302","C43.400x002","C43.401","C44.000","C44.200x001","C44.201","C44.300","C44.300x005","C44.300x006","C44.302","C44.304","C44.305","C44.306","C44.307","C44.400x004","C44.401","C46.200","C47.000x004","C47.000x005","C47.000x006","C47.000x007","C47.000x008","C47.000x009","C47.000x010","C47.000x011","C49.000x004","C49.000x005","C49.001","C49.002","C49.004","C49.005","C71.900x009","C71.900x010","C76.000x002","C76.000x007","C76.001","C76.002","C76.003","C76.004","C76.005","C76.006","C77.000x005","C77.001","C77.002","C77.003","C77.004","C77.005","C77.006","C77.007","C77.008","C78.300x004","C78.300x005","C78.300x006","C78.300x008","C78.300x010","C78.301","C78.302","C78.303","C78.305","C79.200x008","C79.201","C79.202","C79.203","C79.500x004","C79.500x007","C79.500x016","C79.500x028","C79.502","C79.503","C79.504","C79.505","C79.800x806","C79.800x812","C79.800x824","C79.800x825","C79.800x826","C79.800x828","C79.800x833","C79.800x840","C79.800x843","C79.800x844","C79.800x845","C79.801","C79.802","C79.803","C79.804","C79.830","C79.831","C79.832","C79.834","C79.835","D00.000x005","D00.000x007","D00.000x008","D00.001","D00.002","D00.003","D00.004","D00.005","D00.006","D00.007","D00.008","D00.009","D00.010","D00.011","D00.012","D00.013","D02.000","D02.000x003","D02.000x004","D02.001","D02.002","D02.300","D02.301","D02.302","D02.303","D03.000","D03.200x002","D03.201","D03.301","D03.400x002","D03.401","D04.000","D04.200x001","D04.201","D04.300x001","D04.300x002","D04.400x001","D04.401","D09.701","D10.000","D10.000x002","D10.000x003","D10.000x004","D10.000x005","D10.100","D10.101","D10.200","D10.200x002","D10.300x005","D10.300x007","D10.301","D10.302","D10.303","D10.305","D10.306","D10.307","D10.308","D10.309","D10.400","D10.401","D10.402","D10.500x001","D10.500x002","D10.501","D10.502","D10.503","D10.504","D10.600","D10.601","D10.602","D10.603","D10.700","D10.701","D10.900","D11.000","D11.701","D11.702","D11.900","D11.900x001","D14.000x005","D14.000x006","D14.000x007","D14.000x009","D14.000x010","D14.001","D14.002","D14.003","D14.004","D14.005","D14.006","D14.007","D14.008","D14.100","D14.100x002","D14.101","D14.102","D14.103","D16.400x013","D16.400x018","D16.400x019","D16.400x025","D16.401","D16.402","D16.403","D16.404","D16.405","D16.406","D16.407","D16.409","D16.410","D16.411","D16.500","D16.500x002","D17.000x003","D17.001","D17.002","D17.700x003","D17.700x006","D17.700x007","D17.700x020","D17.700x021","D17.700x032","D18.000x021","D18.000x501","D18.000x503","D18.000x504","D18.000x505","D18.000x506","D18.000x507","D18.000x508","D18.000x510","D18.000x511","D18.000x807","D18.000x808","D18.000x809","D18.000x823","D18.000x844","D18.000x845","D18.000x858","D18.001","D18.003","D18.004","D18.100x004","D18.100x007","D18.100x010","D18.100x011","D18.100x013","D18.100x021","D18.100x027","D18.101","D18.102","D21.000x002","D21.000x007","D21.000x008","D21.001","D21.002","D21.004","D21.005","D21.006","D21.007","D22.000","D22.200x002","D22.201","D22.301","D22.302","D22.400x002","D22.401","D23.000","D23.200x002","D23.200x003","D23.200x008","D23.201","D23.300x003","D23.300x004","D23.301","D23.303","D36.700x004","D36.700x005","D36.700x006","D36.700x007","D36.701","D36.702","D36.703","D37.000x001","D37.000x002","D37.000x003","D37.000x004","D37.000x005","D37.000x006","D37.000x007","D37.000x008","D37.000x009","D37.000x010","D37.000x011","D37.000x012","D37.000x013","D37.000x014","D37.000x015","D37.001","D37.002","D37.003","D37.004","D37.005","D37.006","D37.007","D37.008","D37.009","D37.010","D37.011","D37.012","D37.013","D37.014","D37.015","D37.016","D37.017","D37.018","D37.019","D38.000x001","D38.000x002","D38.001","D38.002","D38.003","D38.500x001","D38.500x003","D38.500x004","D38.500x005","D38.501","D38.502","D38.503","D38.504","D38.505","D38.506","D38.507","D38.508","D38.509","D44.600x002","D48.200x002","D48.200x003","D48.200x004","D48.200x005","D48.200x006","D48.200x007","D48.200x008","D48.200x009","D48.518","D48.519","D48.700x007","D48.700x025","D48.701","D48.702","D86.802","E10.600x031","E10.600x032","E11.600x031","E11.600x032","E14.600x031","E14.600x032","E34.800x005","E85.400x006","E85.401","E85.402","E85.405","E85.409","E85.410","G47.300","G47.300x001","G47.300x031","G47.300x033","G47.300x035","G47.300x036","G47.300x037","G47.301","G47.302","G47.303","G47.304","H60.000","H60.000x002","H60.000x004","H60.000x005","H60.001","H60.002","H60.100","H60.100x001","H60.100x002","H60.200","H60.300","H60.300x002","H60.300x003","H60.300x005","H60.300x006","H60.301","H60.302","H60.303","H60.400","H60.400x004","H60.401","H60.500x006","H60.500x007","H60.501","H60.502","H60.503","H60.801","H60.900","H60.901","H61.000","H61.001","H61.100x002","H61.100x005","H61.100x006","H61.100x007","H61.100x009","H61.101","H61.102","H61.103","H61.104","H61.105","H61.200","H61.300","H61.800x005","H61.801","H61.802","H61.803","H61.804","H61.805","H61.806","H61.901","H61.902","H65.000x002","H65.101","H65.102","H65.200","H65.300","H65.300x001","H65.400","H65.400x001","H65.900","H65.900x001","H65.901","H66.000","H66.001","H66.001","H66.101","H66.102","H66.200","H66.301","H66.400","H66.900","H66.900x002","H66.900x003","H68.000","H68.100","H68.100x003","H68.101","H69.000","H69.800","H69.900","H70.000","H70.000x007","H70.000x009","H70.001","H70.002","H70.003","H70.004","H70.100","H70.101","H70.102","H70.103","H70.200","H70.201","H70.800","H70.800x001","H70.800x002","H70.900","H71.x00","H71.x01","H71.x02","H71.x03","H71.x04","H71.x05","H72.000","H72.001","H72.100","H72.101","H72.200","H72.800","H72.900","H73.000","H73.001","H73.100","H73.101","H73.102","H73.800x005","H73.801","H73.802","H73.803","H73.804","H73.900","H74.000","H74.101","H74.201","H74.300","H74.300x003","H74.300x004","H74.400","H74.801","H74.802","H74.900","H80.000x001","H80.000x002","H80.100x001","H80.100x002","H80.200","H80.800x001","H80.900","H81.000","H81.100","H81.101","H81.200","H81.301","H81.302","H81.303","H81.400","H81.400x003","H81.800","H81.900","H81.901","H81.902","H83.000","H83.000x001","H83.000x002","H83.100","H83.101","H83.200","H83.200x001","H83.200x002","H83.200x003","H83.300x001","H83.301","H83.302","H83.800x002","H83.800x003","H83.800x004","H83.801","H83.900x001","H90.000","H90.100","H90.200","H90.300","H90.400","H90.500","H90.501","H90.502","H90.600","H90.700","H90.801","H91.000","H91.001","H91.100","H91.200","H91.200x001","H91.300x001","H91.801","H91.900","H91.900x002","H91.900x004","H91.901","H92.000","H92.100","H92.100x001","H92.200","H93.001","H93.100","H93.101","H93.102","H93.103","H93.200x002","H93.200x005","H93.201","H93.300","H93.301","H93.800x001","H93.900x001","H93.901","H95.000x001","H95.101","H95.102","H95.800","H95.900","H95.900x001","H95.900x002","I77.001","I77.003","I86.000","I88.101","I88.102","I88.103","I88.104","I88.900x004","I88.900x007","I89.000x014","J00.x00","J00.x00x004","J00.x00x006","J00.x00x007","J00.x00x008","J01.000","J01.001","J01.100","J01.200","J01.300","J01.400","J01.800","J01.900","J01.900x003","J01.901","J02.000","J02.801","J02.802","J02.900","J02.900x002","J02.900x005","J02.901","J02.902","J02.903","J02.905","J03.000","J03.800","J03.900","J03.900x001","J03.900x006","J03.901","J03.902","J04.000","J04.000x004","J04.000x006","J04.000x008","J04.001","J04.002","J04.003","J04.004","J04.005","J04.100","J04.200","J05.000","J05.100","J06.000","J06.000x002","J06.800x001","J06.900","J06.900x001","J09.x05+H67.1*","J10.100","J10.100x001","J10.100x002","J10.100x003","J10.100x004","J10.101","J10.800","J10.803+H67.1*","J11.100x001","J11.100x002","J11.100x003","J11.100x004","J11.102","J11.802+H67.1*","J30.000","J30.100","J30.101","J30.200","J30.300x001","J30.300x002","J30.400","J31.000","J31.001","J31.002","J31.003","J31.004","J31.005","J31.100","J31.200","J31.201","J31.202","J31.203","J31.204","J32.000","J32.000x005","J32.000x009","J32.001","J32.002","J32.003","J32.004","J32.005","J32.006","J32.100","J32.100x005","J32.101","J32.102","J32.200","J32.200x004","J32.200x005","J32.201","J32.300","J32.300x004","J32.301","J32.302","J32.400","J32.400x001","J32.800x001","J32.800x002","J32.800x003","J32.800x004","J32.800x006","J32.800x007","J32.800x008","J32.800x009","J32.800x011","J32.801","J32.802","J32.803","J32.900","J32.900x007","J32.900x008","J32.900x009","J32.900x010","J32.900x011","J32.901","J32.902","J32.903","J32.904","J32.905","J32.906","J33.000","J33.000x002","J33.001","J33.002","J33.003","J33.100","J33.800x002","J33.801","J33.802","J33.803","J33.804","J33.805","J33.900","J34.000x004","J34.000x010","J34.001","J34.002","J34.003","J34.004","J34.005","J34.006","J34.007","J34.008","J34.100x008","J34.101","J34.102","J34.103","J34.104","J34.105","J34.106","J34.107","J34.108","J34.200","J34.300","J34.800x001","J34.800x002","J34.800x004","J34.800x006","J34.800x009","J34.800x019","J34.800x020","J34.800x033","J34.800x034","J34.801","J34.802","J34.803","J34.804","J34.805","J34.806","J34.807","J34.809","J34.810","J34.811","J34.812","J34.813","J35.000","J35.100","J35.200","J35.300","J35.800x008","J35.800x009","J35.801","J35.802","J35.803","J35.804","J35.805","J35.806","J35.807","J35.808","J35.809","J35.901","J36.x00","J36.x00x001","J36.x00x003","J36.x00x004","J37.000","J37.001","J37.002","J37.003","J37.004","J37.005","J37.100","J38.000x001","J38.000x002","J38.000x005","J38.000x006","J38.000x011","J38.000x012","J38.000x021","J38.000x022","J38.000x031","J38.000x032","J38.001","J38.002","J38.101","J38.102","J38.200","J38.200x001","J38.200x002","J38.201","J38.300x008","J38.300x011","J38.300x013","J38.300x015","J38.300x016","J38.300x018","J38.301","J38.302","J38.303","J38.304","J38.305","J38.307","J38.308","J38.309","J38.310","J38.311","J38.312","J38.313","J38.400","J38.400x002","J38.400x003","J38.400x004","J38.401","J38.402","J38.500","J38.600","J38.601","J38.700x001","J38.700x003","J38.700x007","J38.700x009","J38.700x013","J38.700x017","J38.700x021","J38.700x022","J38.700x027","J38.701","J38.702","J38.703","J38.704","J38.705","J38.706","J38.707","J38.708","J38.709","J38.710","J38.711","J38.712","J38.714","J38.715","J38.716","J38.717","J38.718","J38.719","J38.720","J38.721","J39.000x001","J39.001","J39.002","J39.003","J39.101","J39.200x004","J39.200x008","J39.200x009","J39.200x015","J39.200x016","J39.200x020","J39.201","J39.202","J39.203","J39.204","J39.205","J39.206","J39.207","J39.208","J39.209","J39.210","J39.212","J39.213","J39.214","J39.215","J39.216","J39.217","J39.218","J39.219","J39.220","J39.221","J39.222","J39.223","J39.224","J39.225","J39.300","J39.809","J39.811","J39.900","J95.000","J95.000x001","J95.000x002","J95.000x007","J95.001","J95.002","J95.003","J95.004","J95.005","J95.400","J95.500","J95.501","J95.800x001","J95.800x013","J95.803","J95.805","J95.806","J95.807","J95.809","K00.000","K00.000x003","K00.000x004","K00.001","K00.002","K00.100x001","K00.101","K00.200x001","K00.200x002","K00.200x003","K00.200x005","K00.200x009","K00.200x010","K00.201","K00.202","K00.203","K00.204","K00.205","K00.206","K00.207","K00.300x002","K00.301","K00.400","K00.400x001","K00.400x002","K00.400x004","K00.401","K00.402","K00.500x002","K00.501","K00.502","K00.503","K00.600x002","K00.600x006","K00.600x007","K00.600x008","K00.601","K00.602","K00.603","K00.604","K00.605","K00.608","K00.700","K00.800x002","K00.801","K00.900","K01.000","K01.100","K02.000","K02.001","K02.100","K02.101","K02.200","K02.300","K02.400x001","K02.400x002","K02.400x003","K02.500","K02.800x001","K02.800x002","K02.800x003","K02.800x005","K02.800x006","K02.800x007","K02.800x008","K02.900x001","K02.901","K03.000","K03.000x002","K03.001","K03.100x001","K03.101","K03.102","K03.103","K03.104","K03.105","K03.106","K03.200x002","K03.201","K03.202","K03.203","K03.204","K03.300","K03.300x001","K03.300x002","K03.300x003","K03.400","K03.401","K03.500","K03.600x001","K03.601","K03.602","K03.603","K03.604","K03.700","K03.800x001","K03.800x002","K03.800x003","K03.800x005","K03.801","K03.900","K04.000","K04.000x007","K04.000x008","K04.001","K04.002","K04.006","K04.007","K04.100","K04.101","K04.200","K04.200x003","K04.201","K04.300","K04.400","K04.401","K04.500","K04.500x001","K04.501","K04.600","K04.700","K04.701","K04.702","K04.703","K04.800","K04.801","K04.802","K04.803","K04.900","K04.901","K04.902","K05.000","K05.000x002","K05.100","K05.100x005","K05.100x008","K05.100x010","K05.100x011","K05.100x012","K05.100x013","K05.101","K05.102","K05.103","K05.104","K05.105","K05.106","K05.200","K05.200x002","K05.201","K05.202","K05.203","K05.204","K05.300","K05.300x002","K05.301","K05.400","K05.400x002","K05.500x001","K05.500x002","K05.500x003","K05.500x005","K05.600","K06.000","K06.000x002","K06.000x003","K06.000x004","K06.100","K06.100x001","K06.100x002","K06.100x003","K06.200","K06.800x009","K06.800x012","K06.800x013","K06.800x014","K06.800x015","K06.801","K06.802","K06.803","K06.804","K06.805","K06.806","K06.807","K06.808","K06.809","K06.810","K06.900","K06.901","K07.000x002","K07.000x004","K07.000x007","K07.000x008","K07.000x009","K07.000x011","K07.000x012","K07.000x013","K07.002","K07.003","K07.004","K07.005","K07.006","K07.007","K07.008","K07.009","K07.010","K07.011","K07.012","K07.100x008","K07.100x009","K07.100x010","K07.100x011","K07.100x012","K07.100x014","K07.100x015","K07.100x016","K07.100x017","K07.101","K07.102","K07.103","K07.104","K07.105","K07.106","K07.107","K07.108","K07.109","K07.110","K07.200x001","K07.200x002","K07.200x003","K07.200x005","K07.200x011","K07.200x012","K07.200x013","K07.200x014","K07.201","K07.202","K07.203","K07.204","K07.205","K07.300x003","K07.300x005","K07.300x006","K07.300x007","K07.300x008","K07.300x009","K07.301","K07.302","K07.303","K07.304","K07.305","K07.500x002","K07.600","K07.600x001","K07.600x003","K07.602","K07.603","K07.604","K07.800x001","K07.900","K07.901","K07.902","K07.903","K08.000","K08.101","K08.102","K08.103","K08.104","K08.201","K08.202","K08.203","K08.204","K08.300x002","K08.302","K08.801","K08.802","K08.803","K08.804","K08.805","K08.806","K08.807","K08.808","K08.809","K08.900","K09.000","K09.000x005","K09.000x007","K09.001","K09.002","K09.003","K09.004","K09.005","K09.100x001","K09.100x003","K09.100x004","K09.100x006","K09.102","K09.103","K09.200","K09.200x001","K09.201","K09.202","K09.203","K09.204","K09.205","K09.800x005","K09.801","K09.804","K09.805","K09.806","K09.807","K09.808","K09.809","K09.900x001","K10.000","K10.000x002","K10.000x003","K10.000x004","K10.001","K10.002","K10.100","K10.100x001","K10.100x003","K10.101","K10.102","K10.103","K10.200","K10.201","K10.202","K10.203","K10.204","K10.205","K10.206","K10.207","K10.208","K10.209","K10.210","K10.211","K10.212","K10.213","K10.214","K10.300x003","K10.301","K10.302","K10.800x002","K10.800x005","K10.800x006","K10.800x008","K10.800x010","K10.800x011","K10.800x012","K10.801","K10.802","K10.803","K10.804","K10.805","K10.808","K10.809","K10.900x002","K10.901","K11.000","K11.100x002","K11.100x004","K11.101","K11.102","K11.200","K11.200x009","K11.200x011","K11.200x012","K11.200x014","K11.201","K11.202","K11.203","K11.204","K11.205","K11.206","K11.207","K11.208","K11.209","K11.210","K11.211","K11.300","K11.301","K11.302","K11.303","K11.400","K11.400x003","K11.401","K11.402","K11.404","K11.500x003","K11.500x005","K11.501","K11.503","K11.600","K11.600x005","K11.600x008","K11.601","K11.602","K11.603","K11.604","K11.605","K11.606","K11.700x001","K11.700x002","K11.700x003","K11.701","K11.800","K11.800x002","K11.800x006","K11.800x007","K11.800x010","K11.801","K11.802","K11.803","K11.804","K11.805","K11.806","K11.807","K11.900x004","K11.901","K11.902","K11.903","K12.000","K12.000x001","K12.001","K12.002","K12.003","K12.100x002","K12.100x011","K12.100x012","K12.100x013","K12.101","K12.102","K12.103","K12.105","K12.106","K12.107","K12.108","K12.109","K12.110","K12.111","K12.112","K12.114","K12.115","K12.116","K12.117","K12.200x003","K12.200x011","K12.200x012","K12.200x017","K12.200x018","K12.200x019","K12.201","K12.202","K12.203","K12.204","K12.205","K12.206","K12.207","K12.208","K12.209","K12.210","K12.211","K12.212","K12.213","K12.214","K12.215","K12.216","K12.217","K12.218","K12.301","K12.302","K12.303","K12.304","K12.305","K13.000x001","K13.000x006","K13.000x007","K13.000x012","K13.000x014","K13.000x016","K13.000x017","K13.000x018","K13.000x023","K13.001","K13.002","K13.003","K13.004","K13.005","K13.006","K13.007","K13.008","K13.009","K13.010","K13.011","K13.012","K13.013","K13.014","K13.015","K13.016","K13.100","K13.101","K13.200x004","K13.200x005","K13.200x006","K13.200x007","K13.200x009","K13.200x010","K13.200x011","K13.201","K13.202","K13.203","K13.204","K13.205","K13.206","K13.207","K13.208","K13.209","K13.210","K13.300","K13.400","K13.400x001","K13.400x002","K13.400x004","K13.401","K13.402","K13.403","K13.500","K13.500x002","K13.600","K13.600x001","K13.601","K13.602","K13.603","K13.700","K13.700x001","K13.700x003","K13.700x004","K13.700x006","K13.700x007","K13.700x009","K13.700x010","K13.700x011","K13.700x013","K13.700x018","K13.700x019","K13.700x021","K13.700x022","K13.700x023","K13.700x024","K13.700x025","K13.700x026","K13.702","K13.703","K13.704","K13.705","K13.706","K13.707","K13.709","K13.710","K13.711","K13.714","K13.715","K14.000","K14.000x006","K14.000x007","K14.001","K14.002","K14.003","K14.004","K14.100x001","K14.102","K14.200","K14.300","K14.300x001","K14.300x003","K14.300x004","K14.301","K14.302","K14.400","K14.400x001","K14.401","K14.500x001","K14.500x002","K14.600x001","K14.800x003","K14.800x005","K14.800x010","K14.800x012","K14.800x013","K14.801","K14.802","K14.803","K14.804","K14.805","K14.807","K14.808","K14.809","K14.900x002","K14.900x003","K14.900x004","K14.901","L02.000","L04.001","L04.002","L04.003","M31.300","M31.301","M35.900x011","M85.000x081","M85.000x083","M95.001","M95.002","M95.003","M95.005","M95.006","M95.007","M95.100","M95.201","M95.202","M95.203","M95.204","M95.205","M95.206","M95.207","M95.208","M95.209","M95.210","Q16.000","Q16.101","Q16.102","Q16.103","Q16.200","Q16.300","Q16.301","Q16.400","Q16.401","Q16.500","Q16.501","Q16.900","Q16.901","Q17.000","Q17.000x003","Q17.000x005","Q17.001","Q17.002","Q17.003","Q17.100","Q17.200","Q17.300x002","Q17.300x004","Q17.300x005","Q17.300x006","Q17.301","Q17.302","Q17.303","Q17.400","Q17.400x002","Q17.500","Q17.501","Q17.800x004","Q17.801","Q17.802","Q17.803","Q17.900","Q18.001","Q18.002","Q18.003","Q18.100x003","Q18.100x006","Q18.100x008","Q18.100x009","Q18.101","Q18.102","Q18.103","Q18.104","Q18.200","Q18.200x003","Q18.200x004","Q18.300","Q18.400","Q18.400x004","Q18.500","Q18.600","Q18.700","Q18.800x001","Q18.800x002","Q18.800x003","Q18.800x004","Q18.801","Q18.802","Q18.804","Q18.805","Q18.806","Q18.807","Q18.900x002","Q18.903","Q27.300x007","Q27.300x010","Q27.302","Q27.800x021","Q27.800x024","Q27.800x026","Q27.800x027","Q27.800x028","Q27.800x030","Q27.800x036","Q27.800x040","Q27.802","Q30.000","Q30.001","Q30.100x001","Q30.101","Q30.200x001","Q30.201","Q30.300","Q30.800x003","Q30.800x004","Q30.800x005","Q30.800x006","Q30.800x007","Q30.800x008","Q30.801","Q30.802","Q30.804","Q30.805","Q30.900","Q31.000","Q31.100","Q31.200","Q31.301","Q31.500","Q31.800x003","Q31.800x004","Q31.800x005","Q31.801","Q31.802","Q31.803","Q31.804","Q31.805","Q31.806","Q31.900","Q32.000","Q32.100","Q32.101","Q34.801","Q35.100","Q35.101","Q35.300","Q35.301","Q35.302","Q35.500","Q35.500x004","Q35.501","Q35.502","Q35.700","Q35.900","Q35.901","Q35.902","Q35.903","Q35.907","Q36.000","Q36.001","Q36.002","Q36.003","Q36.004","Q36.005","Q36.006","Q36.100","Q36.900","Q36.900x003","Q36.901","Q36.902","Q36.903","Q36.904","Q36.905","Q36.906","Q37.000","Q37.100","Q37.200","Q37.300","Q37.400","Q37.500","Q37.800","Q37.900","Q38.000x003","Q38.000x005","Q38.000x006","Q38.000x007","Q38.001","Q38.002","Q38.003","Q38.004","Q38.100","Q38.200","Q38.300","Q38.300x003","Q38.300x005","Q38.300x007","Q38.301","Q38.303","Q38.304","Q38.305","Q38.400","Q38.400x001","Q38.400x002","Q38.500x002","Q38.500x003","Q38.500x005","Q38.500x006","Q38.500x007","Q38.500x009","Q38.501","Q38.502","Q38.600x001","Q38.600x002","Q38.600x004","Q38.600x006","Q38.601","Q38.700","Q38.701","Q38.801","Q38.802","Q67.200","Q67.300","Q67.400x202","Q67.400x906","Q67.401","Q67.402","Q67.403","Q67.404","Q67.405","Q67.406","Q67.407","Q75.200x001","Q75.400","Q75.801","Q75.804","Q75.805","Q75.900x005","Q85.900x012","Q85.900x031","Q85.900x035","Q85.900x037","Q85.900x038","Q85.905","Q87.000x301","Q87.004","Q87.006","Q89.202","Q89.800x903","Q89.800x904","Q89.800x905","Q89.800x906","Q89.800x907","Q89.800x908","Q89.800x909","R04.000","R04.100","R04.801","R06.501","R06.700","R07.000","R43.800x002","R44.201","R49.000","R49.001","R49.100","R49.201","R49.202","R59.000x004","R59.900","S00.000x053","S00.001","S00.002","S00.003","S00.004","S00.300","S00.300x051","S00.302","S00.400","S00.400x052","S00.401","S00.402","S00.403","S00.404","S00.500","S00.500x051","S00.500x052","S00.501","S00.700","S00.800x053","S00.800x054","S00.800x055","S00.800x056","S00.801","S00.802","S00.803","S00.804","S00.900","S01.000","S01.001","S01.200x011","S01.200x021","S01.200x031","S01.200x091","S01.200x092","S01.300x002","S01.300x011","S01.300x012","S01.300x031","S01.300x051","S01.300x061","S01.300x071","S01.300x081","S01.301","S01.302","S01.400x011","S01.400x021","S01.400x031","S01.401","S01.500x001","S01.500x021","S01.500x022","S01.500x042","S01.500x051","S01.500x052","S01.501","S01.502","S01.503","S01.504","S01.505","S01.506","S01.700","S01.802","S01.803","S01.804","S01.900","S02.200","S02.201","S02.211","S02.400x001","S02.400x003","S02.400x005","S02.401","S02.411","S02.412","S02.500","S02.500x002","S02.501","S02.600","S02.600x011","S02.600x021","S02.600x031","S02.600x041","S02.600x051","S02.600x061","S02.600x081","S02.600x091","S02.611","S02.612","S02.700x004","S02.711","S02.800x003","S02.802","S02.803","S02.810","S02.812","S02.813","S02.901","S02.912","S03.000","S03.000x001","S03.100","S03.200","S03.301","S03.400","S03.400x001","S03.400x002","S03.501","S08.000","S08.100","S08.800","S08.801","S09.101","S09.200","S09.800x002","S09.800x003","S09.801","S09.900","S09.900x006","S09.901","S09.902","S09.903","S09.904","S09.905","S09.906","S09.907","S10.000x003","S10.001","S10.002","S10.003","S10.004","S10.101","S10.102","S10.700","S10.801","S10.900","S10.901","S10.902","S11.001","S11.002","S11.003","S11.004","S11.100x001","S11.201","S11.700","S11.800x081","S11.800x082","S11.900","S12.803","S12.813","S12.814","S12.815","S13.400","S13.400x003","S13.400x005","S13.401","S13.402","S13.403","S13.500","S13.500x003","S13.500x004","S13.500x005","S13.500x006","S13.500x007","S13.500x008","S13.500x009","S13.500x010","S13.500x011","S13.501","S13.502","S13.601","S15.001","S15.002","S15.003","S15.004","S15.005","S15.100","S15.200","S15.300","S15.301","S15.800x002","S15.800x003","S15.801","S15.900x001","S17.000x001","S17.000x002","S17.001","S17.800","S17.801","S17.900","S19.800x002","S19.800x004","S19.801","S19.802","S19.900","T16.x00","T16.x00x001","T16.x00x002","T17.000","T17.001","T17.002","T17.101","T17.200","T17.200x001","T17.300","T18.000","T18.001","T18.002","T27.000x002","T27.000x002","T27.000x003","T27.000x003","T27.401","T27.402","T28.000x002","T28.000x002","T28.000x003","T28.501","T28.501","T28.502","T70.000","T70.100","T81.800x008","T81.800x013","T81.804","T85.606","T85.607","T85.800x804","T85.800x810","T85.800x811","T86.802","T90.800","Z41.102","Z41.103","Z42.000x002","Z42.000x015","Z42.000x019","Z42.002","Z42.005","Z42.006","Z42.007","Z42.008","Z42.009","Z42.010","Z43.000","Z43.000x002","Z43.001","Z45.301","Z45.302","Z45.303","Z45.304","Z45.801","Z46.100","Z46.300x001","Z46.400"];
    let dept_list=[];
    if (!(true && mdc_zd.includes(record.zdList[0]))){
        return '';
    }
    
    putMessage('符合MDCD入组条件，匹配规则：主诊断匹配');
    let result;

    if (result=DA1_group(record)){
        return result;
    }

    if (result=DB1_group(record)){
        return result;
    }

    if (result=DB2_group(record)){
        return result;
    }

    if (result=DB3_group(record)){
        return result;
    }

    if (result=DC1_group(record)){
        return result;
    }

    if (result=DC2_group(record)){
        return result;
    }

    if (result=DD1_group(record)){
        return result;
    }

    if (result=DD2_group(record)){
        return result;
    }

    if (result=DE1_group(record)){
        return result;
    }

    if (result=DE2_group(record)){
        return result;
    }

    if (result=DG1_group(record)){
        return result;
    }

    if (result=DG2_group(record)){
        return result;
    }

    if (result=DJ1_group(record)){
        return result;
    }

    if (result=DK1_group(record)){
        return result;
    }

    if (record.ssList && intersect(SS_VALID,record.ssList)){
        putMessage('符合DQY入组条件，存在有效手术操作：'+record.ssList.filter(x=>SS_VALID.includes(x)).join(','));
        return 'DQY';
    }

    if (result=DR1_group(record)){
        return result;
    }

    if (result=DS1_group(record)){
        return result;
    }

    if (result=DT1_group(record)){
        return result;
    }

    if (result=DT2_group(record)){
        return result;
    }

    if (result=DU1_group(record)){
        return result;
    }

    if (result=DV1_group(record)){
        return result;
    }

    if (result=DW1_group(record)){
        return result;
    }

    if (result=DZ1_group(record)){
        return result;
    }
 
    putMessage('不符合MDCA的ADRG入组条件');
}