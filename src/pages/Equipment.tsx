import { Input, Drawer, Button, Col, Row, Divider, Select, Space } from "antd";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

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
                <Button style={{width: "100%"}}>清除</Button>
              </Space>
            </Drawer>
          </div>
        </div>
      </div>
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col md={16}>
            <div className="equipment-search">
              <Search
                size="large"
                placeholder="输入英雄/物品/比赛来搜索"
                enterButton={
                  <>
                    <SearchOutlined />
                    &nbsp;&nbsp;搜索
                  </>
                }
              />
            </div>
            <div className="search-result">
              搜索到xxx条数据aa
              <Divider />
            </div>
          </Col>
          <Col md={8}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Equipment;
