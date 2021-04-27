import { Card, Col, Row, Button, Tabs } from "antd";

const { TabPane } = Tabs;

const Detail: React.FC = () => {
  return (
    <div className="detail">
      <div className="container">
        <Row>
          <Col md={24}>
            <Card bordered={false} style={{ width: "100%" }}>
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
                          屈原站
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
        <Row>
          <Col md={18}>
            <Row>top</Row>
            <Row>di</Row>
          </Col>
          <Col md={6}>right</Col>
        </Row>
      </div>
    </div>
  );
};
export default Detail;
