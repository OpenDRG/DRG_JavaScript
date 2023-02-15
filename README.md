# OpenDRG的目的是成为国家医保局CHS-DRG的开源实现，就像OpenJDK是Java SE的开源实现一样

## 业务背景

&emsp;&emsp;疾病诊断相关组（Diagnosis Related Groups，DRG）是用于衡量医疗服务质量效率以及进行医保支付的重要工具。国家医疗保障局要求从2022到2024年，三年内全面完成DRG/DIP付费方式改革，很多地区的医保局已经开始采用DRG与医院进行医保资金的结算。

&emsp;&emsp;DRG分组器是医院端DRG信息管理系统的基础和核心，也是难点所在。国家医保局已经发布了1.0版、1.0修正版、1.1版这三个版本的DRG分组方案，即将发布2.0版，但各地市甚至各医院版本更新的进度不一致，同一地区不同医院版本各不相同，甚至可能同一医院多版本并存或者是合集。

&emsp;&emsp;通过大量的研究和实践，采用“知识库+规则库”的思路，研发了此款DRG分组器，具备的优势如下：
* 严格按照医保局规则进行分组，其正确性经过多个地区、多家医院的实际验证
* 分组性能达到单线程每秒5000份病案，满足业务处理、数据分析等多种业务场景
* 支持Java、C#、python、js等多种语言实现
* 不需要部署服务器，支持以插件方式嵌入医院业务系统运行

## 分组器版本(Javascript)说明
国家医保局CHS-DRG分组器，C#实现版

|DRG分组方案|分组器源代码路径|DRG组数|说明|
|-|-|-|-|
|CHS-DRG 1.1<br>标准细分组|drg_group/chs_drg_11|628组| 适用于没有本地化细分组的城市，如江苏省盐城市（如本城市已经有本地化DRG细分组，则不适用）|
|CHS-DRG 1.1<br>苏州2022细分组|drg_group/suzhou_2022|667组<br>含19个歧义组| 适用于江苏省苏州市2022版细分组|
|CHS-DRG 1.1<br>泰州2022细分组|drg_group/taizhou_2022|758组| 适用于江苏省泰州市2022版细分组|
|CHS-DRG 1.1<br>无锡2022细分组|drg_group/wuxi_2022|599组| 适用于江苏省无锡市2022版细分组|
|CHS-DRG 1.0修订版<br>武汉2022细分组|drg_group/wuhan_2022|660组| 适用于湖北省武汉市2022版细分组|
|CHS-DRG 1.1<br>北京版细分组|drg_group/beijing_2022|696组| 适用于北京版细分组|

&emsp;&emsp;目前已经研究过DRG分组规则的地区，包括：
* 北京
* 浙江
* 江苏：盐城、苏州、泰州、徐州、无锡
* 湖南：长沙、株洲、衡阳、湘潭
* 山东：济南
* 辽宁：沈阳
* 甘肃：兰州、庆阳
* 新疆：乌鲁木齐
* 云南：昆明

&emsp;&emsp;其他地区版本的分组器将逐步发布，敬请关注

## 打包方式&测试方法
安装node.js
在项目根目录执行npm install，系统会自动安装打包工具rollup、webpack

### rollup
在项目根目录执行npm run rollup或者npx rollup --config
打开在项目根目录下的index.html页面进行测试

### webpack
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

## 联系作者
14463966@qq.com