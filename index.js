import './style.css';

const div_grouper = document.createElement('div');
const div_input = document.createElement('div');
div_input.innerHTML = '病案信息：';
const input = document.createElement('input');
input.size = 150;
input.value = '22139971,1.0,73.0,27006.0,,13030305.0,8.0,1.0,"G20.x03,R90.803,F41.101,I10.x00x002,N39.000,E77.801,E87.600",,BU21';
const select = document.createElement('select');
select.add(new Option('CHS-DRG 1.1标准分组/盐城', 'yancheng_2022'));
select.add(new Option('苏州2022细分组', 'suzhou_2022'));
select.add(new Option('泰州2022细分组', 'taizhou_2022'));
select.add(new Option('无锡2022细分组', 'wuxi_2022'));
select.add(new Option('武汉2022细分组', 'wuhan_2022'));
select.add(new Option('北京2022细分组', 'beijing_2022'));
const btn = document.createElement('button');
btn.innerHTML = '提交';
btn.onclick = click;
div_input.appendChild(document.createElement('br'));
div_input.appendChild(input);
div_input.appendChild(document.createElement('br'));
div_input.appendChild(select);
div_input.appendChild(document.createElement('br'));
div_input.appendChild(btn);
const div_result = document.createElement('div');
const div_record = document.createElement('div');
const div_drg = document.createElement('div');
div_drg.classList.add('red');
const div_pay = document.createElement('div');
const div_msg = document.createElement('div');
div_result.appendChild(div_record);
div_result.appendChild(document.createElement('br'));
div_result.appendChild(div_drg);
div_result.appendChild(div_pay);
div_result.appendChild(div_msg);
div_grouper.appendChild(div_input);
div_grouper.appendChild(div_result);
document.body.appendChild(div_grouper);
async function group(record, type) {
    const { GroupProxy } = await import('./drg_group/' + type + '/GroupProxy.js');
    let grouper = new GroupProxy();
    let result = grouper.group_record_str(record);
    return result;
}
async function get_Payment(type) {
    // const {DRG} =await import('./drg_group/'+type+'/Base.js');
    const { Payment } = await import('./drg_group/' + type + '/DATA/Payment.js');
    return Payment;
}
function click() {
    let result = group(input.value, select.value);
    let Payment = get_Payment(select.value);
    result.then(x => {
        Payment.then(y => {
            console.log(y);
            div_record.innerHTML = 'record=' + JSON.stringify(x.record);
            let payment=y[x.drg];
            div_drg.innerHTML = x.drg + '-' + payment['DRG名称'];
            delete payment['DRG名称'];
            buildTable(div_pay,payment);
            buildList(div_msg,x.messages);
            
        })
    });
}
function buildTable(div,data) {
    let obj;
    if(obj=div.firstElementChild){
        obj.remove();
    }
    let table = document.createElement("table");
    div.appendChild(table);
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    let tr;
    tr = document.createElement("tr");
    for (let i of Object.keys(data)) {
        let th = document.createElement("th");
        th.innerText = i;
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    tr = document.createElement("tr");
    for (let i of Object.values(data)) {
        let td = document.createElement("td");
        td.innerText = i;
        tr.appendChild(td);
    }
    thead.appendChild(tr);
}
function buildList(div,data){
    let obj;
    if(obj=div.firstElementChild){
        obj.remove();
    }
    const ul = document.createElement('ul');
    div.appendChild(ul);
    data.forEach(i => {
        let li = document.createElement('li');
        li.innerHTML = i;
        ul.appendChild(li);
    });
}