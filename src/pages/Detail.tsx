import { Progress, Card, Col, Row, Button, Tabs, Divider } from "antd";
import React from "react";

import classNames from "classnames";
import { useState } from "react";
import DetailPreviewCard from "../components/DetailPreview";
import st from "../dota2/st.jpeg";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const Detail: React.FC = () => {
  const [more, setMore] = useState<boolean>(false);

  return (
    <div className="detail">
      <div className="container">
        <Row>
          <Col md={24}>
            <Card
              bordered={false}
              style={{ width: "100%", marginBottom: "20rem" }}
            >
              <div className="detail-header">
                <div className="detail-header-top">
                  <div className="detail-header__left">
                    <div
                      className="detail-header__left-image"
                      style={{
                        backgroundImage:
                          "url(http://127.0.0.1:9009/dota2app/20210426/1/P0v5J3ZD7d.jpeg)",
                      }}
                    />
                    <div className="detail-header__left-body">
                      <div className="detail-header__left-body__title">
                        <span className="title">贞德的猎犬</span>
                        <span className="sub-title">
                          [该条目并非转载，引用的标题封面等基本信息仅用于交流、介绍和评论]
                        </span>
                      </div>
                      <div className="detail-header__left-body__bottom">
                        <Button type="primary" className="evaluate">
                          评价
                        </Button>
                        <Button type="primary" className="sourcestation">
                          去打一把
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="detail-header__right">
                    <div className="title">DOTA2评分</div>
                    <div>
                      <span className="score">1</span>
                      /10
                    </div>

                    <div className="total">10 人评分</div>
                  </div>
                </div>
                <div className="detail-header-bottom">
                  <Tabs defaultActiveKey="1" onChange={() => ({})}>
                    <TabPane tab="主页" key="主页" />
                    <TabPane tab="体验评价" key="体验评价" />
                    <TabPane tab="讨论区" key="讨论区" />
                    <TabPane tab="跑团记录" key="跑团记录" />
                    <TabPane tab="跑团Replay" key="跑团Replay" />
                  </Tabs>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginBottom: "50rem" }}>
          <Col md={18}>
            <Row style={{ marginBottom: "15rem" }}>
              <Col span={24}>
                <DetailPreviewCard />
              </Col>
            </Row>
            <Row style={{ marginBottom: "15rem" }}>
              <Col span={24}>
                <Card style={{ paddingBottom: "20rem" }}>
                  <div
                    className={classNames("detail-content", {
                      "detail-content--less": !more,
                    })}
                  >
                    <p>
                      ◇クトゥルフ神話TRPG◇ 「監獄館殺人事件」
                      本格閉鎖館モノミステリー
                    </p>
                    <p>あなたもミステリー小説の登場人物に</p>
                    <p>この殺人事件には超常的な抜け道は一切存在しない ▼物語</p>
                    <p>探偵事務所に一人の男が訪ねてくる。</p>
                    <p>「どうか、魔犬の正体を暴いてくれませんか」</p>
                    <p>謎に包まれた連続殺人事件。</p>
                    <p>すべてはある一家の周りで巻き起こっていた。</p>
                    <p>
                      あなた方は数奇な運命を辿る様に奇妙な館へと足を踏み入れる。
                    </p>
                    <p>
                      ▼HO（ハンドアウト） 【探偵】
                      あなたは探偵事務所を構えた探偵だ。
                    </p>
                    <p>
                      また、過去に何らかの事件を解決した経験がある。 【助手】
                    </p>
                    <p>
                      あなたはHO探偵の助手だ。 共に調査を行っている。 【刑事】
                    </p>
                    <p>
                      あなたは捜査第一課に所属する刑事だ。
                      とある事件を追っている。
                    </p>
                    <p>▼概要 KP難易度：★★★★☆ PL難易度：★★★★☆</p>
                    <p>舞台設定：現代日本クローズド「監獄館」 推奨人数：3人</p>
                    <p>
                      推定時間：8時間から12時間
                      共通推奨：〈目星〉〈聞き耳〉〈図書館〉
                    </p>
                    <p>共通準推奨：〈心理学〉〈生物学〉〈機械修理〉〈説得〉</p>
                    <p>ロスト・発狂：有り（かなり高い）</p>
                  </div>
                  <Button
                    type={!more ? "primary" : "ghost"}
                    style={{ marginTop: "8rem" }}
                    onClick={() => setMore(!more)}
                  >
                    {more ? "收起来" : "显示全部"}
                  </Button>
                </Card>
              </Col>
            </Row>
            <Row style={{ marginBottom: "15rem" }}>
              <Col span={24}>
                <Card style={{ paddingBottom: "20rem" }}>
                  <div className="detail-summary">
                    <span className="detail-summary__title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        style={{
                          width: "20rem",
                          height: "20rem",
                          marginRight: "5rem",
                        }}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      <span>摘要</span>
                    </span>
                    <Row className="detail-summary__content" gutter={[16, 16]}>
                      <Col md={6} sm={8} xs={8}>
                        <div className="detail-summary__item">
                          <span className="detail-summary__item-data">
                            464万
                          </span>
                          <span className="detail-summary__item-title">
                            本月场次
                          </span>
                        </div>
                      </Col>
                      <Col md={6} sm={8} xs={8}>
                        <div className="detail-summary__item">
                          <span
                            className="detail-summary__item-data"
                            style={{ fontWeight: "bolder" }}
                          >
                            1
                          </span>
                          <span className="detail-summary__item-title">
                            场次排名
                          </span>
                        </div>
                      </Col>
                      <Col md={6} sm={8} xs={8}>
                        <div className="detail-summary__item">
                          <span className="detail-summary__item-data">
                            50.1%
                          </span>
                          <span className="detail-summary__item-title">
                            本月胜率
                          </span>
                        </div>
                      </Col>
                      <Col md={6} sm={8} xs={8}>
                        <div className="detail-summary__item">
                          <span className="detail-summary__item-data">61</span>
                          <span className="detail-summary__item-title">
                            胜率排名
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Divider style={{ borderColor: "gray" }} />

                  <div className="hero-attribute">
                    <div className="hero-attribute__title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        style={{
                          width: "20rem",
                          height: "20rem",
                          marginRight: "5rem",
                        }}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                        />
                      </svg>
                      <span>英雄属性</span>
                    </div>
                    <div className="hero-attribute__level-bar">
                      <Button
                        shape="circle"
                        // onClick={this.decline}
                        icon={<MinusOutlined />}
                      />
                      <Progress
                        className="progress"
                        percent={3.3}
                        showInfo={false}
                      />
                      <Button
                        shape="circle"
                        // onClick={this.increase}
                        icon={<PlusOutlined />}
                      />
                    </div>
                    <Row gutter={[16, 4]} className="hero-attribute__body">
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            攻击力
                          </span>
                          <span className="hero-attribute__body__item-data">
                            67-73
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            护甲
                          </span>
                          <span className="hero-attribute__body__item-data">
                            2.2
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            移动速度
                          </span>
                          <span className="hero-attribute__body__item-data">
                            280
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            DPS(攻速)
                          </span>
                          <span className="hero-attribute__body__item-data">
                            47(1.49)
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            生命值
                          </span>
                          <span className="hero-attribute__body__item-data">
                            762
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            魔法值
                          </span>
                          <span className="hero-attribute__body__item-data">
                            267
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            转身速度
                          </span>
                          <span className="hero-attribute__body__item-data">
                            0.70
                          </span>
                        </div>
                      </Col>
                      <Col md={6} xs={8}>
                        <div className="hero-attribute__body__item">
                          <span className="hero-attribute__body__item-title">
                            攻击前摇
                          </span>
                          <span className="hero-attribute__body__item-data">
                            0.50
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <Divider style={{ borderColor: "gray" }} />

                  <div className="hero-talent">
                    <div className="hero-talent__title">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{
                          width: "20rem",
                          height: "20rem",
                          marginRight: "5rem",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      <span>英雄天赋</span>
                    </div>
                    <Card className="hero-talent-card">
                      <div className="hero-talent__level-item">
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">
                            -14%腐烂减速腐烂减速腐烂减速腐烂减速腐烂减速
                          </span>
                          <div className="item-content">
                            <span>40.8%</span>
                            <span>44.4%</span>
                            <span>3.2%</span>
                          </div>
                        </div>

                        <div className="hero-talent__level-item__level">
                          <span className="level-number">10</span>
                        </div>
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">+4护甲</span>
                          <div className="item-content">
                            <span>56.6%</span>
                            <span>42.8%</span>
                            <span>-2.0%</span>
                          </div>
                        </div>
                      </div>

                      <div className="hero-talent__level-item">
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">-14%腐烂减速</span>
                          <div className="item-content">
                            <span>40.8%</span>
                            <span>44.4%</span>
                            <span>3.2%</span>
                          </div>
                        </div>

                        <div className="hero-talent__level-item__level">
                          <div className="level-line"></div>
                          <span className="level-number">15</span>
                        </div>
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">+4护甲</span>
                          <div className="item-content">
                            <span>56.6%</span>
                            <span>42.8%</span>
                            <span>-2.0%</span>
                          </div>
                        </div>
                      </div>

                      <div className="hero-talent__level-item">
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">-14%腐烂减速</span>
                          <div className="item-content">
                            <span>40.8%</span>
                            <span>44.4%</span>
                            <span>3.2%</span>
                          </div>
                        </div>

                        <div className="hero-talent__level-item__level">
                          <div className="level-line"></div>
                          <span className="level-number">20</span>
                        </div>

                        <div className="hero-talent__level-item__body">
                          <span className="item-title">+4护甲</span>
                          <div className="item-content">
                            <span>56.6%</span>
                            <span>42.8%</span>
                            <span>-2.0%</span>
                          </div>
                        </div>
                      </div>

                      <div className="hero-talent__level-item">
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">-14%腐烂减速</span>
                          <div className="item-content">
                            <span>40.8%</span>
                            <span>44.4%</span>
                            <span>3.2%</span>
                          </div>
                        </div>

                        <div className="hero-talent__level-item__level">
                          <div className="level-line"></div>
                          <span className="level-number">25</span>
                        </div>
                        <div className="hero-talent__level-item__body">
                          <span className="item-title">+4护甲</span>
                          <div className="item-content">
                            <span>56.6%</span>
                            <span>42.8%</span>
                            <span>-2.0%</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row style={{ marginBottom: "15rem" }}>
              <Col span={24}>
                <Card style={{ paddingBottom: "20rem" }}>评价区域</Card>
              </Col>
            </Row>
          </Col>
          <Col md={6} xs={0} sm={0}>
            <Card style={{ paddingBottom: "20rem" }}>
              <div
                className="detail-author"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="detail-author__item">
                  <span>发布于 2021年04月23日</span>
                </div>
                <div className="detail-author__item">
                  作者：
                  <img src={st} alt="" />
                  <span>颜渊白琉璃</span>
                </div>
                <div className="detail-author__item">
                  应用规则：<span> COC</span>
                </div>
                <div className="detail-author__item">
                  人数：<span>人数 2-4 </span>
                </div>
                <div className="detail-author__item">
                  标签：<span> 英国/1920</span>
                </div>
              </div>
              <Button danger style={{ width: "100%" }}>
                举报ta
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Detail;
