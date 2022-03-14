import { JSONObject } from "waft-json";
import { console, getDataSource, Page, Props, Event, history } from "waft";
export class Index extends Page {
  constructor(props: Props) {
    super(props);
    // 设置默认的state

    this.setState(getDataSource());
  }

  return2index(e: Event): void {
    // 点击事件
    history.pushState({
      url: 'pages/index/index',
      query: null,
      dataSource: null
    });
  }

  enter2sound(e: Event): void {
    // 点击事件
    const sentData = new JSONObject;
    sentData.set("name", e.target.dataset.getString("name"));
    sentData.set("img", e.target.dataset.getString("img"));
    sentData.set("audios", e.target.dataset.getString("audios"));
    sentData.set("content", e.target.dataset.getString("content"));
    history.pushState({ url: 'pages/sound/index', query: sentData, dataSource: sentData });
  }

  onLoad(query: JSONObject): void {
    // 页面加载后
    console.log('page onLoad:' + query.getString("name"));
    const state = new JSONObject();
    state.set('animal_name', query.getString("name"));
    state.set("animal_img", query.getString("img"));
    state.set("animal_audios", query.getString("audios"));
    state.set("animal_content", query.getString("content"));
    this.setState(state);

  }

}