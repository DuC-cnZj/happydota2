import { Image, Card, Col, Row, Button, Tabs } from "antd";
import classNames from "classnames";
import { useState } from "react";
import DetailPreviewCard from "../components/DetailPreview";

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
                      <span className="score">1</span>/10
                    </div>

                    <div className="total">10 人评分</div>
                  </div>
                </div>
                <div className="detail-header-bottom">
                  <Tabs defaultActiveKey="1" onChange={() => ({})}>
                    <TabPane tab="主页" key="主页"></TabPane>
                    <TabPane tab="体验评价" key="体验评价"></TabPane>
                    <TabPane tab="讨论区" key="讨论区"></TabPane>
                    <TabPane tab="跑团记录" key="跑团记录"></TabPane>
                    <TabPane tab="跑团Replay" key="跑团Replay"></TabPane>
                  </Tabs>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
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
                <Card style={{paddingBottom: "20rem"}}>
                  评价区域
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6}>right</Col>
        </Row>
      </div>
    </div>
  );
};
export default Detail;
