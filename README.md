# OpenDRG的目标是成为国家医保局CHS-DRG的开源实现，就像OpenJDK是Java SE的开源实现一样

## 分组器版本
国家医保局CHS-DRG分组器，JavaScript实现版

|分组器版本|实现的分组方案|
|-|-|
|drg_group/chs_drg_11|CHS-DRG 1.1标准版、铜川版、临沂版|
|drg_group/chs_drg_10|CHS-DRG 1.0修订版、西安版、成都版|
|drg_group/yancheng_2023|盐城版|
|drg_group/suzhou_2023|苏州版|
|drg_group/taizhou_2022|泰州版|
|drg_group/wuxi_2022|无锡版|
|drg_group/wuhan_2022|武汉版|
|drg_group/beijing_2022|北京版|
|drg_group/lanzhou_2023|兰州版|
|drg_group/fuzhou_2022|福州版|
|drg_group/zhejiang_2022|浙江版|
|drg_group/wlmq_2022|乌鲁木齐版|
|drg_group/changsha_2022|长株潭衡区域版|
|drg_group/yantai_2023|烟台版|
|drg_group/changzhou_2022|常州版|

&emsp;&emsp;其他地区版本的分组器将逐步发布，敬请关注

## 打包方式&测试方法
安装node.js
在项目根目录执行npm install，系统会自动安装打包工具rollup、webpack

### rollup
在项目根目录执行npm run rollup或者npx rollup --config
打开在项目根目录下的index.html页面进行测试

### webpack
修改package.json，删除"type": "module"（如果用rollup打包则需要加上这一项）
在项目根目录执行npm run webpack或者npx webpack
打开/dist/index.html页面进行测试

## 系统调用方式
rollup打包方式，参考index.html
```javascript
async function group(record,type){
    const {GroupProxy} =await import('./drg_group/'+type+'/GroupProxy.js');
    let grouper=new GroupProxy();
    let result=grouper.group_record_str(record);
    return result;
}
function click(){
    let result=group(input.value,select.value);
    result.then(x=>{
        div_result.innerHTML=JSON.stringify(x);
    });
}
```
webpack打包方式，参考index.js
```javascript
let result = new GroupProxy_chs_drg_11().group_record_str(text);
result.then(x=>{
    let result=GroupResult.toString(x);
    document.getElementById("result").innerHTML = result.replace("\n", "<br>");
})
```

## 接口说明
* group_record_str
> 输入参数为String，格式如"22058878,2,88,32460,,13040503,94,1,K80.302|K80.305|K83.109|K72.905|Z90.408|E14.900x001,51.8803|51.8701|54.5100x005|45.1301"
将MedicalRecord类的11个属性用逗号拼接，其中：zdList、ssList的类型是String[]，多个元素用|分隔；remark字段可选

* group_record
> 传入js对象或字典，属性见MedicalRecord

## 返回结果说明
返回结果为GroupResult类
* Index：带入输入对象MedicalRecord的Index字段，建议使用病案号或住院号，保持唯一性
* status：分组结果，“分组成功”代表分组成功，其他定义见DrgGroupStatus类
* messages：分组过程，列表格式，包括ICD编码转换信息、名称信息，以及DRG分组每一步操作的记录，是什么结果，应用了哪些规则
* mdc：主要诊断大类，分组成功或分入歧义组是有值
* adrg：核心DRG组代码，校验通过后有值，分入歧义组时为QY，没有分到组时为00
* drg：DRG组代码，校验通过后有值，分入歧义组时为*QY，没有分到组时为00

## 联系开发团队
请发邮件至14463966@qq.com
