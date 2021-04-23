import { Button, Card, Col, Empty, Row } from "antd";
import tf from "../dota2/tf.png";

const Notification: React.FC = () => {
  return (
    <div className="notification">
      <div className="container">
        <Row>
          <Col md={18} sm={24} xs={24}>
            <Card
              title="消息中心"
              extra={
                <Button type="primary" style={{ fontSize: "12rem" }}>
                  全部已读
                </Button>
              }
              bordered={false}
            >
              <Empty
                image={tf}
                imageStyle={{ height: "200rem" }}
                description="暂无消息"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Notification;
