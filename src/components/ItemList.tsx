import React from "react";
import { List, Card, Rate } from "antd";
import { useHistory } from "react-router";

export interface cardItem {
  rate: number;
  name: string;
  description?: string;
  imgPath: string;
}

const CardItem: React.FC<cardItem> = ({
  rate,
  name,
  description = "这个英雄很安静",
  imgPath,
}) => {
  const history = useHistory();
  const showDetail = () => {
    history.push("/detail");
  };
  return (
    <Card
      className="list-item-card"
      style={{
        border: "none",
        height: "350rem",
        overflow: "hidden",
      }}
      cover={
        <div className="card-item-img" onClick={showDetail}>
          <div
            className="card-item-bg"
            style={{ backgroundImage: `url(${imgPath})` }}
          />
          <div className="card-item-mask" />
        </div>
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <span className="hero-name">{name}</span>
          <div className="level-group">
            <span className="level">难易程度:</span>
            <Rate className="rate" disabled defaultValue={rate} />
          </div>
        </div>
        <span className="card-item-desc">{description}</span>
      </div>
    </Card>
  );
};

interface IProps {
  data: cardItem[];
}

const ItemList: React.FC<IProps> = ({ data }) => (
  <List
    className="item-list"
    grid={{
      gutter: 16,
      column: 4,
      xs: 2,
      md: 4,
      sm: 3,
    }}
    dataSource={data}
    renderItem={(item: cardItem) => (
      <List.Item>
        <CardItem
          name={item.name}
          rate={item.rate}
          imgPath={item.imgPath}
          description={item.description}
        />
      </List.Item>
    )}
  />
);

export default ItemList;
