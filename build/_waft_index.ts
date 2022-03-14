// ================ 代码由构建工具自动生成，请勿手动修改 ================
// 内部需要使用到的变量

import { 
  ui_char_t, 
  ui_size_t,
} from 'waft/core/render/reactor';
import { 
  CustomElementRegistry
} from 'waft/core/render/CustomElementRegistry';
const customElements = CustomElementRegistry.instance();
import {
  ComponentGeneratorFunc 
} from 'waft/core/components/generator';
import { 
  CodeWrapper
} from 'waft/utils/codeWrapper';
import {
  onGlobalEventHandle
} from "waft/core/event/globalEventHandler";
import {
  onRenderEventHandle
} from "waft/core/event/renderEventHandler";
import {
  abort
} from "waft/core/error";
import { onBridgeAPICallback } from 'waft/core/bridge/WaftBridge';

// 开发者可调用的API
import {
  App,
  getApp,
  AppConfig,
  Page,
  FunctionPage,
  Component,
  FunctionComponent,
  Props,
  getLaunchData,
  console,
  env,
  IPCBuffer,
  Event
} from 'waft';

const ipcBuffer = new IPCBuffer();

import {
  JSON,
  JSONObject,
  JSONArray,
  JSONBool,
  JSONInteger,
  JSONFloat,
  JSONNull,
  JSONString,
  JSONValue
} from "waft-json";

// 初始化环境变量

env.set("ENV", "dev");


// 引用app代码路径

import { app as AppClass } from '../src/app';


// 引用组件路径，注册组件创建方法


// 引用页面路径


import { Index as Page_1 } from '../src/pages/index/index';



import { Index as Page_2 } from '../src/pages/baike/index';



import { Index as Page_3 } from '../src/pages/sound/index';



const defineRoot = (): void=>{
  customElements.define(
    // 页面ID
    'waft-app-root',    
    // 初始化函数
    null,
    // 其他参数
    {
      // xml模版AST
      template: "{\"type\":\"div\",\"classList\":[\"waft-root\"],\"children\":[{\"type\":\"div\",\"@behavior\":{\"match\":\"invalid != true\"},\"classList\":[\"waft-app\"],\"children\":[{\"type\":\"waft-router-item\",\"attributes\":{\"index\":{\"@binding\":\"index\"},\"url\":{\"@binding\":\"item.url\"},\"pageId\":{\"@binding\":\"item.id\"},\"visible\":{\"@binding\":\"item.visible\"}},\"@behavior\":{\"repeat\":{\"alias\":\"item\",\"expression\":\"routerState.pages\",\"index\":\"index\"}},\"children\":[]}],\"attributes\":{}},{\"type\":\"div\",\"@behavior\":{\"match\":\"invalid == true\"},\"classList\":[\"waft-app\",\"waft-app-invalid\"],\"children\":[{\"type\":\"div\",\"classList\":[\"waft-app-invalid-back\"],\"events\":[{\"type\":\"tap\",\"handler\":\"exitApp\"}],\"children\":[{\"type\":\"image\",\"attributes\":{\"src\":\"https://img.alicdn.com/imgextra/i2/O1CN01Xhmljn1aLOpTfF5K2_!!6000000003313-2-tps-36-36.png\"},\"children\":[]}],\"attributes\":{\"onTap\":\"exitApp\"}},{\"type\":\"div\",\"classList\":[\"waft-app-invalid-tips\"],\"children\":[{\"type\":\"span\",\"innerText\":\"轻服务引擎版本过低，请升级后再试\",\"attributes\":{},\"children\":[]}],\"attributes\":{}}],\"attributes\":{}}],\"attributes\":{}}",
      // css样式AST
      styles: ["{\"rules\":[{\"type\":\"rule\",\"selectors\":[\".waft-root\"],\"declarations\":[{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"}]},{\"type\":\"rule\",\"selectors\":[\".waft-app\"],\"declarations\":[{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"flex-direction\",\"value\":\"row\"}]},{\"type\":\"rule\",\"selectors\":[\".waft-app-invalid\"],\"declarations\":[{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"},{\"property\":\"background-color\",\"value\":\"white\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"flex-direction\",\"value\":\"row\"},{\"property\":\"align-items\",\"value\":\"center\"},{\"property\":\"justify-content\",\"value\":\"center\"}]},{\"type\":\"rule\",\"selectors\":[\".waft-app-invalid-back\"],\"declarations\":[{\"property\":\"position\",\"value\":\"absolute\"},{\"property\":\"left\",\"value\":\"40rpx\"},{\"property\":\"top\",\"value\":\"10rpx\"},{\"property\":\"height\",\"value\":\"68rpx\"},{\"property\":\"width\",\"value\":\"68rpx\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"justify-content\",\"value\":\"center\"},{\"property\":\"align-items\",\"value\":\"center\"}]},{\"type\":\"rule\",\"selectors\":[\".waft-app-invalid-back image\"],\"declarations\":[{\"property\":\"width\",\"value\":\"40rpx\"},{\"property\":\"height\",\"value\":\"40rpx\"}]},{\"type\":\"rule\",\"selectors\":[\".waft-app-invalid-tips\"],\"declarations\":[{\"property\":\"font-size\",\"value\":\"24rpx\"},{\"property\":\"color\",\"value\":\"rgb(98, 181, 249)\"}]}]}"],
      // 默认state
      defaultState: new JSONObject()
    }
  );

  customElements.define(
    // 页面ID
    'waft-router-item',
    // 初始化函数
    null,
    // 其他参数
    {
      // xml模版AST
      template: "{\"type\":\"div\",\"classList\":[\"waft-router-item\"],\"styles\":{\"z-index\":{\"@binding\":\"index\"},\"visibility\":{\"@binding\":\"visible?'visible':'hidden'\"}},\"events\":[{\"type\":\"tap\",\"handler\":\"onRouterItemRap\"}],\"children\":[{\"type\":\"pages-index-index\",\"attributes\":{\"r-p-id\":{\"@binding\":\"pageId\"}},\"@behavior\":{\"match\":\" 'pages/index/index' == url \"},\"classList\":[\"waft-page\"],\"children\":[]},{\"type\":\"pages-baike-index\",\"attributes\":{\"r-p-id\":{\"@binding\":\"pageId\"}},\"@behavior\":{\"match\":\" 'pages/baike/index' == url \"},\"classList\":[\"waft-page\"],\"children\":[]},{\"type\":\"pages-sound-index\",\"attributes\":{\"r-p-id\":{\"@binding\":\"pageId\"}},\"@behavior\":{\"match\":\" 'pages/sound/index' == url \"},\"classList\":[\"waft-page\"],\"children\":[]}],\"attributes\":{\"onTap\":\"onRouterItemRap\"}}",
      // css样式AST
      styles: ["{\"rules\":[{\"type\":\"rule\",\"selectors\":[\".waft-router-item\"],\"declarations\":[{\"property\":\"position\",\"value\":\"fixed\"},{\"property\":\"top\",\"value\":\"0\"},{\"property\":\"left\",\"value\":\"0\"},{\"property\":\"right\",\"value\":\"0\"},{\"property\":\"bottom\",\"value\":\"0\"}]},{\"type\":\"rule\",\"selectors\":[\".slidein\"],\"declarations\":[{\"property\":\"animation-duration\",\"value\":\"1s\"},{\"property\":\"animation-name\",\"value\":\"slidein\"}]},{\"type\":\"keyframes\",\"name\":\"slidein\",\"keyframes\":[{\"values\":[\"from\"],\"declarations\":[{\"property\":\"transform\",\"value\":\"translateX(100%)\"}]},{\"values\":[\"to\"],\"declarations\":[{\"property\":\"transform\",\"value\":\"translateX(0)\"}]}]}]}"],
      // 默认state
      defaultState: new JSONObject()
    }
  );
}

const definePages = (): void=>{
    // 页面模板设置
  
    // 组件初始化函数
    let generator_Page_1:ComponentGeneratorFunc | null = null;
    
    
    generator_Page_1 = (props: Props): Component=>{
      const newPage = new Page_1(props);
      // 事件自动添加
      
      
      
        newPage.addEventListener("enter2animal", (event: Event, target)=>{
          (target as Page_1).enter2animal(event);// 请在页面pages/index/index添加事件响应函数enter2animal(e: Event): void{}
        });
      
      
      return newPage;
    }
    
    
    // 【组件】样式和模版的解析产物
    customElements.define(
      // 组件ID
      'pages-index-index',
      // 组件初始化函数
      generator_Page_1,
      // 其他参数
      {
        // xml模版AST
        template: "{\"type\":\"div\",\"classList\":[\"warpper\"],\"styles\":{\"background-image\":\"url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.solosea.com%2Fres%2Fupload%2Ffpdown%2Fimg%2Fab364d488a7a42f625ea2b78d9d69ac3.jpg&refer=http%3A%2F%2Fwww.solosea.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649685317&t=f2b993a03b32c546a385891888d45c9c')\"},\"children\":[{\"type\":\"scroller\",\"classList\":[\"scroller\"],\"children\":[{\"type\":\"div\",\"classList\":[\"row\"],\"children\":[{\"type\":\"div\",\"attributes\":{\"data-name\":{\"@binding\":\"item.name\"},\"data-img\":{\"@binding\":\"item.images[0].url\"},\"data-audios\":{\"@binding\":\"item.audios\"},\"data-content\":{\"@binding\":\"item.content\"},\"onTap\":\"enter2animal\"},\"@behavior\":{\"repeat\":{\"alias\":\"item\",\"expression\":\"animal\"}},\"classList\":[\"card\"],\"styles\":{\"background-image\":[\"url('\",{\"@binding\":\"item.images[0].url\"},\"')\"]},\"events\":[{\"type\":\"tap\",\"handler\":\"enter2animal\",\"autoAdd\":true}],\"children\":[{\"type\":\"text\",\"classList\":[\"card-title\"],\"innerText\":[\"\\n              \",{\"@binding\":\"item.name\"},\"\\n            \"],\"attributes\":{},\"children\":[]}]}],\"attributes\":{}}],\"attributes\":{}}],\"attributes\":{}}",
        // css样式AST
        styles: ["{\"rules\":[{\"type\":\"rule\",\"selectors\":[\".warpper\"],\"declarations\":[{\"property\":\"background-color\",\"value\":\"white\"},{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"},{\"property\":\"background-size\",\"value\":\"cover\"}]},{\"type\":\"rule\",\"selectors\":[\".scroller\"],\"declarations\":[{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"},{\"property\":\"display\",\"value\":\"flex !important\"},{\"property\":\"align-items\",\"value\":\"center\"}]},{\"type\":\"rule\",\"selectors\":[\".row\"],\"declarations\":[{\"property\":\"flex-direction\",\"value\":\"row\"}]},{\"type\":\"rule\",\"selectors\":[\".card\"],\"declarations\":[{\"property\":\"height\",\"value\":\"80vh\"},{\"property\":\"width\",\"value\":\"300rpx\"},{\"property\":\"box-shadow\",\"value\":\"0 4px 8px 0 rgb(0 0 0 / 5%)\"},{\"property\":\"display\",\"value\":\"flex !important\"},{\"property\":\"align-items\",\"value\":\"center\"},{\"property\":\"justify-content\",\"value\":\"center\"},{\"property\":\"margin\",\"value\":\"0 30rpx\"},{\"property\":\"border-radius\",\"value\":\"50rpx\"},{\"property\":\"background-size\",\"value\":\"cover\"}]},{\"type\":\"rule\",\"selectors\":[\".card-title\"],\"declarations\":[{\"property\":\"font-size\",\"value\":\"100rpx\"},{\"property\":\"color\",\"value\":\"white\"}]}]}"],
        // 默认state
        defaultState: JSON.parseObject("{\"scrollDirection\":0,\"scrollLeft\":0,\"showScrollbar\":0,\"scrollTop\":0,\"animal\":[{\"name\":\"大象\",\"audios\":\"https://entityimg.alicdn.com/kgsearch/audio/audio_museum/20220118105803f_k4mk2x1q.mp3\",\"images\":[{\"url\":\"http://entityimg.alicdn.com/kg/95676534/f7b667e2fb37bbe1.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/95676534/120930d994857b52.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/94380080/7bf7843577265274.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/103887758/1da9e32665ae3f35.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/95676534/193c828a14e49d7d.jpg\"}],\"content\":\" 据史料记载，大象很早就成了人类的朋友，并能为人类提供帮助。大象非常聪明，能开辟场地，还能把死去的同伴安埋在落叶枯枝之中。大象寿命很长，一般能活到70岁左右，它在10岁到15岁性成熟，怀孕期长达22个月。大象分布极广，大约在四千万年以前，除了大洋洲和南极洲以外，各洲都有它的足迹，然而现在主要有亚洲象和非洲象两大类。 [1] 2020年5月至6月，博茨瓦纳奥卡万戈三角洲，数百头大象因不明原因死亡。国家公园救援联合创始人马克·希利称这次大象死亡事件为“本世纪影响大象的最大灾难之一”。\"},{\"name\":\"长颈鹿\",\"audios\":\"https://entityimg.alicdn.com/kgsearch/audio/audio_museum/20220118105759f_k4mijtjb.mp3\",\"images\":[{\"url\":\"http://entityimg.alicdn.com/kg/102843225/5857e2fd3cf88b9d.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/102843225/5857e2fd3cf88b9d.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/102843225/83b36ea76855eec5.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/102843225/cdcb5ac586bb99d6.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/102843225/64fcca758c64c806.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/102843225/ca0d41e3fceb9061.jpg\"}],\"content\":\"长颈鹿:是一种生长在非洲的反刍偶蹄动物、拉丁文名字的意思是\\\"长着豹纹的骆驼\\\"。它们是世界上现存最高的陆生动物。站立时由头至脚可达6-8米、体重约700千克、刚出生的幼仔就有1.5米高；皮毛颜色花纹有斑点和网纹型、头的额部宽、吻部较尖、耳大竖立、头顶有1对骨质短角、角外包覆皮肤和茸毛；颈特别长、颈背有1行鬃毛；体较短；四肢高而强健、前肢略长于后肢、蹄阔大；尾短小、尾端为黑色簇毛。牙齿为原始的低冠齿、不能以草为主食、只能以树叶为主食；舌较长、可以用于取食；具短角、角上被有毛的皮肤覆盖。生活于非洲稀树草原地带、是草食动物、以树叶及小树枝为主食。\"},{\"name\":\"斑马\",\"audios\":\"https://entityimg.alicdn.com/kgsearch/audio/audio_museum/20220118105753f_k4mijtfz.mp3\",\"images\":[{\"url\":\"http://entityimg.alicdn.com/kg/97935326/ce3d312ad255e415.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/97935326/ce3d312ad255e415.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/97935326/e868774325e18296.jpg\"}],\"content\":\"斑马:是现存的奇蹄目马科马属3种兽类的通称。因身上有起保护作用的斑纹而得名。没有任何动物比斑马的皮毛更与众不同。斑马周身的条纹和人类的指纹一样——没有任何两头完全相同。斑马为非洲特产。非洲东部、中部和南部产平原斑马,由腿至蹄具条纹或腿部无条纹。东非还产一种格式斑马,体格最大,耳长而宽,全身条纹窄而密,因而又名细纹斑马。南非洲产山斑马,与其它两种斑马不同的是,它有一对象驴似的大长耳朵。除腹部外,全身密布较宽的黑条纹,雄体喉部有垂肉。斑马是草食性动物。除了草之外,灌木、树枝、树叶甚至树皮也是它们的食物。适应能力较强的消化系统,令斑马可以在低营养条件下生存,比其他草食性动物优胜。\"},{\"name\":\"海豚\",\"audios\":\"https://entityimg.alicdn.com/kgsearch/audio/k4mjrigk.mp3\",\"images\":[{\"url\":\"http://entityimg.alicdn.com/kg/101215773/f4a2f177794aa0fe.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/101215773/f4a2f177794aa0fe.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/101215773/1bebd17446d7f068.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/101215773/d693cfd0c7000ecf.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/101215773/52e1cbd2533e6016.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/101215773/53fe5bda250f29c5.jpg\"}],\"content\":\"海豚具有齿鲸类典型的形态学性状:纺锤形的身体;单个新月形的呼吸孔;头骨套叠,上颌骨向后扩展与额骨重叠;颅顶偏左的不对称;圆锥形或钉状的齿等。各种间最明显的变异与喙、上下颌、牙齿等摄食器官有关。喙的长短和大小,牙齿的多少和大小,反映了不同物种所占有的生态位的范围。如牙齿总数从仅10枚左右到共有250枚。外形也呈大幅度的变异。只有少数种类如虎鲸和领航鲸为显著性二型,更多种类则可为身体大小、形状、颜色,和背鳍形状的轻微性二型。身体大小从小于1.5米到超过9米。喙的变异自很长到很短,还有几个属完全无喙。\"},{\"name\":\"喜鹊\",\"audios\":\"https://entityimg.alicdn.com/kgsearch/audio/audio_museum/20220118105822f_k4mk2x3g.mp3\",\"images\":[{\"url\":\"http://entityimg.alicdn.com/kg/94893804/386a11b2f69becf1.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/94893804/386a11b2f69becf1.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/94893804/2655befab051ea2b.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/94893804/a19db9ed8888dbf3.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/94893804/f62d6e61f11729d9.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/94893804/a9284df8ae39e3af.jpg\"}],\"content\":\"喜鹊是鸟纲鸦科的一种鸟类。共有10个亚种。体长40-50厘米，雌雄羽色相似，头、颈、背至尾均为黑色，并自前往后分别呈现紫色、绿蓝色、绿色等光泽，双翅黑色而在翼肩有一大形白斑，尾远较翅长，呈楔形，嘴、腿、脚纯黑色，腹面以胸为界，前黑后白。留鸟。栖息地多样，常出没于人类活动地区，喜欢将巢筑在民宅旁的大树上。全年大多成对生活，杂食性，在旷野和田间觅食，繁殖期捕食昆虫、蛙类等小型动物，也盗食其他鸟类的卵和雏鸟，兼食瓜果、谷物、植物种子等。每窝产卵5-8枚。卵淡褐色，布褐色、灰褐色斑点。雌鸟孵卵，孵化期18天左右，1个月左右离巢。除南美洲、大洋洲与南极洲外，几乎遍布世界各大陆。中国有4个亚种，见于除草原和荒漠地区外的全国各地。\"},{\"name\":\"青蛙\",\"audios\":\"https://entityimg.alicdn.com/kgsearch/audio/audio_museum/20220118105815f_k4mk2x2x.mp3\",\"images\":[{\"url\":\"http://entityimg.alicdn.com/kg/104004624/c02663e889483162.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/104004624/c02663e889483162.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/104004624/3e4f47643dceaece.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/104004624/1a9a2599485249f5.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/104004624/325fe2bcc056a2d2.jpg\"},{\"url\":\"http://entityimg.alicdn.com/kg/104004624/a710a48f7335b0b2.jpg\"}],\"content\":\"青蛙属于脊索动物门、两栖纲、无尾目、蛙科的两栖类动物,成体无尾,卵产于水中,体外受精,孵化成蝌蚪,用鳃呼吸,经过变异,成体主要用肺呼吸,兼用皮肤呼吸。绝大部分青蛙通过体外受精繁殖,受精卵在母体外孵化成蝌蚪。全球只有10至12种青蛙进化至体内受精,部分会把受精卵排出体外孵化成蝌蚪。但青蛙在动物学上特指的是黑斑侧褶蛙。青蛙一向被认为是卵生动物,不过科学家发现,一种生活在印度尼西亚苏拉威西岛雨林的青蛙能够产下蝌蚪。这种青蛙是全球6000多种青蛙中唯一一种能够“下蝌蚪”的青蛙。蛙体型较苗条,多善于游泳。颈部不明显,无肋骨。前肢的尺骨与桡骨愈合,后肢的胫骨与腓骨愈合,因此爪不能灵活转动,但四肢肌肉发达。\"}]}")
      }
    );
  
    // 组件初始化函数
    let generator_Page_2:ComponentGeneratorFunc | null = null;
    
    
    generator_Page_2 = (props: Props): Component=>{
      const newPage = new Page_2(props);
      // 事件自动添加
      
      
      
        newPage.addEventListener("enter2sound", (event: Event, target)=>{
          (target as Page_2).enter2sound(event);// 请在页面pages/baike/index添加事件响应函数enter2sound(e: Event): void{}
        });
      
      
      
        newPage.addEventListener("return2index", (event: Event, target)=>{
          (target as Page_2).return2index(event);// 请在页面pages/baike/index添加事件响应函数return2index(e: Event): void{}
        });
      
      
      return newPage;
    }
    
    
    // 【组件】样式和模版的解析产物
    customElements.define(
      // 组件ID
      'pages-baike-index',
      // 组件初始化函数
      generator_Page_2,
      // 其他参数
      {
        // xml模版AST
        template: "{\"type\":\"div\",\"classList\":[\"warpper\"],\"styles\":{\"background-image\":\"url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pptjia.com%2Fimage%2F20180607%2Ff52517266d706af75594b213abcc5425.jpg&refer=http%3A%2F%2Fimg.pptjia.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1649690574&t=671fce1c6e974ef9ee08352d89fb4c41')\"},\"children\":[{\"type\":\"div\",\"classList\":[\"header\"],\"children\":[{\"type\":\"span\",\"innerText\":{\"@binding\":\"animal_name\"},\"attributes\":{},\"children\":[]}],\"attributes\":{}},{\"type\":\"div\",\"classList\":[\"content\"],\"children\":[{\"type\":\"div\",\"classList\":[\"img\"],\"styles\":{\"background-image\":[\"url('\",{\"@binding\":\"animal_img\"},\"')\"]},\"attributes\":{},\"children\":[]},{\"type\":\"div\",\"classList\":[\"description\"],\"children\":[{\"type\":\"span\",\"innerText\":{\"@binding\":\"animal_content\"},\"attributes\":{},\"children\":[]}],\"attributes\":{}}],\"attributes\":{}},{\"type\":\"div\",\"classList\":[\"footer\"],\"children\":[{\"type\":\"div\",\"attributes\":{\"data-name\":{\"@binding\":\"animal_name\"},\"data-img\":{\"@binding\":\"animal_img\"},\"data-audios\":{\"@binding\":\"animal_audios\"},\"data-content\":{\"@binding\":\"animal_content\"},\"onTap\":\"enter2sound\"},\"classList\":[\"button\"],\"events\":[{\"type\":\"tap\",\"handler\":\"enter2sound\",\"autoAdd\":true}],\"children\":[{\"type\":\"span\",\"innerText\":[\"聆听\",{\"@binding\":\"animal_name\"},\"的声音\"],\"attributes\":{},\"children\":[]}]},{\"type\":\"div\",\"classList\":[\"button\"],\"events\":[{\"type\":\"tap\",\"handler\":\"return2index\",\"autoAdd\":true}],\"children\":[{\"type\":\"span\",\"innerText\":\"了解其他动物\",\"attributes\":{},\"children\":[]}],\"attributes\":{\"onTap\":\"return2index\"}}],\"attributes\":{}}],\"attributes\":{}}",
        // css样式AST
        styles: ["{\"rules\":[{\"type\":\"rule\",\"selectors\":[\".warpper\"],\"declarations\":[{\"property\":\"background-color\",\"value\":\"white\"},{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"}]},{\"type\":\"rule\",\"selectors\":[\".header\"],\"declarations\":[{\"property\":\"display\",\"value\":\"block\"},{\"property\":\"margin\",\"value\":\"30rpx\"},{\"property\":\"font-size\",\"value\":\"80rpx\"}]},{\"type\":\"rule\",\"selectors\":[\".content\"],\"declarations\":[{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"flex-direction\",\"value\":\"row\"},{\"property\":\"justify-content\",\"value\":\"space-evenly\"}]},{\"type\":\"rule\",\"selectors\":[\".img\"],\"declarations\":[{\"property\":\"width\",\"value\":\"30vw\"},{\"property\":\"height\",\"value\":\"300rpx\"},{\"property\":\"border-radius\",\"value\":\"50rpx\"},{\"property\":\"background-size\",\"value\":\"cover\"}]},{\"type\":\"rule\",\"selectors\":[\".description\"],\"declarations\":[{\"property\":\"padding\",\"value\":\"30rpx\"},{\"property\":\"font-size\",\"value\":\"30rpx\"},{\"property\":\"width\",\"value\":\"50vw\"},{\"property\":\"height\",\"value\":\"300rpx\"},{\"property\":\"box-shadow\",\"value\":\"0 4px 8px 0 rgb(0 0 0 / 5%)\"},{\"property\":\"border-radius\",\"value\":\"50rpx\"},{\"property\":\"overflow\",\"value\":\"hidden\"},{\"property\":\"background-color\",\"value\":\"white\"}]},{\"type\":\"rule\",\"selectors\":[\".footer\"],\"declarations\":[{\"property\":\"width\",\"value\":\"100vw\"},{\"property\":\"height\",\"value\":\"80rpx\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"flex-direction\",\"value\":\"row\"},{\"property\":\"justify-content\",\"value\":\"space-evenly\"},{\"property\":\"align-items\",\"value\":\"center\"},{\"property\":\"position\",\"value\":\"absolute\"},{\"property\":\"bottom\",\"value\":\"0\"},{\"property\":\"background-color\",\"value\":\"rgb(255 255 255 / 48%)\"}]},{\"type\":\"rule\",\"selectors\":[\".button\"],\"declarations\":[{\"property\":\"height\",\"value\":\"50rpx\"},{\"property\":\"font-size\",\"value\":\"30rpx\"},{\"property\":\"padding\",\"value\":\"0 20rpx\"},{\"property\":\"background-color\",\"value\":\"white\"},{\"property\":\"border-radius\",\"value\":\"50rpx\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"justify-content\",\"value\":\"center\"}]}]}"],
        // 默认state
        defaultState: JSON.parseObject("{\"animal_name\":\"test\",\"animal_img\":\"\",\"animal_audios\":\"\",\"animal_content\":\"\"}")
      }
    );
  
    // 组件初始化函数
    let generator_Page_3:ComponentGeneratorFunc | null = null;
    
    
    generator_Page_3 = (props: Props): Component=>{
      const newPage = new Page_3(props);
      // 事件自动添加
      
      
      
        newPage.addEventListener("return2index", (event: Event, target)=>{
          (target as Page_3).return2index(event);// 请在页面pages/sound/index添加事件响应函数return2index(e: Event): void{}
        });
      
      
      return newPage;
    }
    
    
    // 【组件】样式和模版的解析产物
    customElements.define(
      // 组件ID
      'pages-sound-index',
      // 组件初始化函数
      generator_Page_3,
      // 其他参数
      {
        // xml模版AST
        template: "{\"type\":\"div\",\"classList\":[\"warpper\"],\"children\":[{\"type\":\"video\",\"attributes\":{\"src\":{\"@binding\":\"animal_audios\"},\"id\":\"video2music\",\"scale-type\":\"fit-xy\",\"controls\":{\"@binding\":\"true\"}},\"styles\":{\"height\":\"100%\",\"width\":\"100%\",\"background-image\":[\"url('\",{\"@binding\":\"animal_img\"},\"')\"],\"background-size\":\"cover\"},\"children\":[]},{\"type\":\"div\",\"classList\":[\"footer\"],\"children\":[{\"type\":\"div\",\"classList\":[\"button\"],\"events\":[{\"type\":\"tap\",\"handler\":\"return2index\",\"autoAdd\":true}],\"children\":[{\"type\":\"span\",\"innerText\":\"返回\",\"attributes\":{},\"children\":[]}],\"attributes\":{\"onTap\":\"return2index\"}},{\"type\":\"div\",\"classList\":[\"title\"],\"children\":[{\"type\":\"span\",\"innerText\":[{\"@binding\":\"animal_name\"},\"的声音\"],\"attributes\":{},\"children\":[]}],\"attributes\":{}}],\"attributes\":{}}],\"attributes\":{}}",
        // css样式AST
        styles: ["{\"rules\":[{\"type\":\"rule\",\"selectors\":[\".warpper\"],\"declarations\":[{\"property\":\"background-color\",\"value\":\"white\"},{\"property\":\"width\",\"value\":\"100%\"},{\"property\":\"height\",\"value\":\"100%\"},{\"property\":\"background-size\",\"value\":\"cover\"}]},{\"type\":\"rule\",\"selectors\":[\".footer\"],\"declarations\":[{\"property\":\"width\",\"value\":\"100vw\"},{\"property\":\"height\",\"value\":\"80rpx\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"flex-direction\",\"value\":\"row\"},{\"property\":\"justify-content\",\"value\":\"flex-start\"},{\"property\":\"align-items\",\"value\":\"center\"},{\"property\":\"position\",\"value\":\"absolute\"},{\"property\":\"top\",\"value\":\"0\"},{\"property\":\"padding\",\"value\":\"0 20rpx\"}]},{\"type\":\"rule\",\"selectors\":[\".button\"],\"declarations\":[{\"property\":\"height\",\"value\":\"50rpx\"},{\"property\":\"font-size\",\"value\":\"30rpx\"},{\"property\":\"padding\",\"value\":\"0 20rpx\"},{\"property\":\"background-color\",\"value\":\"white\"},{\"property\":\"border-radius\",\"value\":\"50rpx\"},{\"property\":\"display\",\"value\":\"flex\"},{\"property\":\"justify-content\",\"value\":\"center\"}]},{\"type\":\"rule\",\"selectors\":[\".title\"],\"declarations\":[{\"property\":\"padding\",\"value\":\"0 20rpx\"},{\"property\":\"font-size\",\"value\":\"50rpx\"},{\"property\":\"color\",\"value\":\"white\"}]}]}"],
        // 默认state
        defaultState: JSON.parseObject("{\"animal_name\":\"test\",\"animal_img\":\"\",\"animal_audios\":\"\",\"animal_content\":\"\"}")
      }
    );
  
}

const defineComponents = (): void=>{
    // 组件模板设置
  
}

// 应用加载入口
function onLoad(str_ref: ui_char_t, str_size: ui_size_t): void {
  /*
  * 无屏功能初始化
  */
  console.debug('--> app onLoad start');
  let launchData:string = '{}';
  // 启动参数
  if (str_size) {
   launchData = String.UTF8.decodeUnsafe(str_ref, str_size);
   console.debug('real launchData = ' + launchData);
  }
  // mock launchData
  
    // mock launchData only in dev mode
    if(launchData == "{}") {
      launchData = "{\"dataSource\":{\"desc\":\"搞笑呢？\",\"percent\":42}}";
      console.debug('mock launchData = ' + launchData);
    }; 
  // 初始化appConfig
  const appConfig = new AppConfig(JSON.parseObject("{\"pages\":[\"pages/index/index\",\"pages/baike/index\",\"pages/sound/index\"],\"default\":\"pages/index/index\",\"viewport\":{\"width\":1024,\"height\":600,\"scaleMode\":\"fixedHeight\"}}"));
  // 初始化app
  console.debug('--> new App');
  const launchDataObj = JSON.parseObject(launchData);
  
  const app = new AppClass(launchDataObj);
  
  app.config = appConfig;
  app.onLaunch(launchDataObj);

  /*
  * 渲染引擎初始化
  */
  console.debug('--> setupRender');
  // 初始化渲染引擎
  app.setupRender();
  // 模板定义
  console.debug('--> defineRoot');
  defineRoot();
  console.debug('--> definePages');
  definePages();
  console.debug('--> defineComponents');
  defineComponents();
  console.debug('--> start render');
  // 开始渲染
  app.render();

  console.debug('--> app onLoad finish');
}

function growIPCBuffer(size: ui_size_t, capacity: ui_size_t, start: ui_size_t): ArrayBuffer {
  
  return ipcBuffer.grow(size, capacity, start);
}

export function __retain(ptr: usize): usize {
    return __pin(ptr);
}

export function __release(ptr: usize): void {
    __unpin(ptr);
}

export { 
  // 页面生命周期类回调
  onLoad,
  // 通信辅助函数
  growIPCBuffer,

  // 处理页面和组件监听事件的回调
  onRenderEventHandle, 

  // 处理全局的回调
  onGlobalEventHandle,

  // 处理JSAPI调用回调
  onBridgeAPICallback
};