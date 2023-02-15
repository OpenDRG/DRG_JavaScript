const div_grouper=document.createElement('div');
div_grouper.innerHTML='DRG分组器';
const div_record=document.createElement('div');
div_record.innerHTML='病案信息：';
const input=document.createElement('input');
input.size=150;
input.value='22139971,1.0,73.0,27006.0,,13030305.0,8.0,1.0,"G20.x03,R90.803,F41.101,I10.x00x002,N39.000,E77.801,E87.600",,BU21';
const select=document.createElement('select');
select.add(new Option('CHS-DRG 1.1标准分组','chs_drg_11'));
select.add(new Option('苏州2022细分组','suzhou_2022'));
select.add(new Option('泰州2022细分组','taizhou_2022'));
select.add(new Option('无锡2022细分组','wuxi_2022'));
select.add(new Option('武汉2022细分组','wuhan_2022'));
select.add(new Option('北京2022细分组','beijing_2022'));
const btn=document.createElement('button');
btn.innerHTML='提交';
btn.onclick=click;
div_record.appendChild(input);
div_record.appendChild(select);
div_record.appendChild(btn);
const div_result=document.createElement('div');
div_grouper.appendChild(div_record);
div_grouper.appendChild(div_result);
document.body.appendChild(div_grouper);
async function group(record,type){
    const {GroupProxy} =await import('./drg_group/'+type+'/GroupProxy.js');
    let grouper=new GroupProxy();
    let result=grouper.group_record_str(record);
    return result;
}
async function get_DRG(type){
    const {DRG} =await import('./drg_group/'+type+'/Base.js');
    return DRG;
}
function click(){
    let result=group(input.value,select.value);
    let DRG=get_DRG(select.value);
    result.then(x=>{
        DRG.then(y=>{
            div_result.innerHTML='record='+JSON.stringify(x.record)+'<br>'+x.drg+'-'+y[x.drg]+'<br>'+JSON.stringify(x.messages);
        })
    });
}