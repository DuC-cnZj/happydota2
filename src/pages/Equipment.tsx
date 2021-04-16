import {
  Input,
  Drawer,
  Button,
  Col,
  Row,
  Divider,
  Select,
  Space,
  List,
  Card,
  Rate,
} from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import jugg from "../dota2/hero-jugg.jpeg";
import luna from "../dota2/hero-luna.jpeg";
import yemo from "../dota2/hero-ym.jpeg";
import houzi from "../dota2/hero-hz.jpeg";
import xuemo from "../dota2/hero-xm.jpeg";

const { Search } = Input;
const { Option } = Select;

interface cardItem {
  rate: number;
  name: string;
  description?: string;
  imgPath: string;
}

const CardItem: React.FC<cardItem> = ({rate,name, description = "这个英雄很安静",imgPath}) => {
  return (
    <Card
      hoverable
      style={{ width: "100%", border: "none" }}
      cover={
        <div className="card-item-img">
          <div
            className="card-item-bg"
            style={{ backgroundImage: "url(" + imgPath + ")" }}
          ></div>
          <div className="card-item-mask"></div>
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
        <h2 style={{ textAlign: "center", fontSize: "18rem" }}>
          <span>{name}</span>
          <div  style={{ display: "flex" }}>
            <Space>
              <span style={{fontSize: "10rem"}}>难易程度:</span>
              <Rate style={{ fontSize: "10rem" }} disabled defaultValue={rate} />
            </Space>
          </div>
        </h2>
        <span style={{ fontSize: "6rem" }}>
          {description}
        </span>
      </div>
    </Card>
  );
};

type listItem = cardItem[]

const Equipment: React.FC = () => {
  const [state, setState] = useState<{ visible?: boolean; placement?: string }>(
    { visible: false, placement: "left" }
  );

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val: any) => {
    console.log("search:", val);
  };

  const data: listItem = [
    {
      name: "剑圣",
      rate: 3,
      description: "我的刀可以切穿盔甲，切到里面的番茄",
      imgPath: jugg,
    },
    {
      name: "露娜",
      rate: 4,
      description: "夜色下的天空更加开阔",
      imgPath: luna,
    },
    {
      name: "暗夜魔王",
      rate: 4,
      description: "恐惧使魔法更有效",
      imgPath: yemo,
    },
    {
      name: "幻影长矛手",
      rate: 5,
      description: "把你抓走真是一点问题都没有啊",
      imgPath: houzi,
    },
    {
      name: "血魔",
      rate: 2,
      description: "开始收集鲜血",
      imgPath: xuemo,
    },
  ];

  return (
    <div className="equipment">
      <div className="search-result-fixed">
        <div className="search-result-fixed-list">
          <span>搜索到xxx条数据</span>
          <div>
            <svg
              onClick={() => showDrawer()}
              style={{
                display: "flex",
                cursor: "pointer",
                justifyContent: "center",
                alignContent: "center",
                width: "18rem",
                height: "18rem",
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <Drawer
              title={
                <span style={{ fontSize: "18rem", letterSpacing: "2rem" }}>
                  筛选
                </span>
              }
              onClose={() => onClose()}
              visible={state.visible}
              maskClosable={true}
            >
              <Space direction="vertical">
                <Select
                  showSearch
                  allowClear
                  style={{ width: 200 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={() => onFocus()}
                  onBlur={() => onBlur()}
                  onSearch={onSearch}
                >
                  <Option value="jack">近战</Option>
                  <Option value="lucy">远程</Option>
                  <Option value="tom">法师</Option>
                </Select>
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="select one country"
                  defaultValue={["china"]}
                  onChange={() => ({})}
                  optionLabelProp="label"
                >
                  <Option value="china" label="China">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="China">
                        🇨🇳
                      </span>
                      China (中国)
                    </div>
                  </Option>
                  <Option value="usa" label="USA">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="USA">
                        🇺🇸
                      </span>
                      USA (美国)
                    </div>
                  </Option>
                  <Option value="japan" label="Japan">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="Japan">
                        🇯🇵
                      </span>
                      Japan (日本)
                    </div>
                  </Option>
                  <Option value="korea" label="Korea">
                    <div className="demo-option-label-item">
                      <span role="img" aria-label="Korea">
                        🇰🇷
                      </span>
                      Korea (韩国)
                    </div>
                  </Option>
                </Select>
                <Button style={{ width: "100%" }}>清除</Button>
              </Space>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col md={16} sm={24} xs={24}>
            <div className="equipment-search">
              <Search
                placeholder="输入英雄/物品/比赛来搜索"
                allowClear
                size="large"
                enterButton={
                  <Button type="primary" icon={<SearchOutlined />}>
                    搜索
                  </Button>
                }
              />
            </div>
            <div className="search-result">
              搜索到xxx条数据aa
              <Divider />
            </div>
            <div className="list-items">
              <List
                grid={{ gutter: 16, sm: 3, md: 4, lg: 4, xl: 4 }}
                dataSource={data}
                renderItem={(item: cardItem) => (
                  <List.Item>
                    <CardItem name={item.name} rate={item.rate} imgPath={item.imgPath} description={item.description} />
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col md={8} sm={0} xs={0}>
            right
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Equipment;
