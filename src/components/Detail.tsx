import { Col, Row } from "antd";

const Detail: React.FC = () => {
  return (
    <div className="detail">
      <div className="container">
        <Row>
          <Col>header</Col>
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
