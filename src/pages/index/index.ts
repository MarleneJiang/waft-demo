import { JSONObject } from "waft-json";
import { console, getDataSource, Page, Props, Event, history } from "waft";
export class Index extends Page {
  constructor(props: Props) {
    super(props);
    // 设置默认的state
    this.setState(getDataSource());
  }

  enter2animal(e: Event): void {
    // 点击事件
    console.log(e.target.dataset.getString("name"));
    const sentData = new JSONObject;
    sentData.set("name", e.target.dataset.getString("name"));
    sentData.set("img", e.target.dataset.getString("img"));
    sentData.set("audios", e.target.dataset.getString("audios"));
    sentData.set("content", e.target.dataset.getString("content"));
    history.pushState({ url: 'pages/baike/index', query: sentData, dataSource: sentData });
  }

}