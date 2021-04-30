import React, { useState } from "react";
import { Card, List, Spin } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import classNames from "classnames";
import InfiniteScroll from "react-infinite-scroller";
import { AxiosResponse } from "axios";

export interface Image {
  id: number;
  path: string;
  checked: boolean;
}

interface PictureSelectorData {
  value?: Image;
  onChange?: (value: Image) => void;
  fetch: ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => Promise<
    AxiosResponse<{
      code: number;
      page: number;
      page_size: number;
      total: number;
      data: {
        id: number;
        path: string;
      }[];
    }>
  >;
}

const PictureSelector: React.FC<PictureSelectorData> = ({
  value,
  fetch,
  onChange,
}) => {
  const [data, setData] = useState<Image[]>([]);
  const [checkedImage, setCheckedImage] = useState<Image | undefined>(value);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(1);

  const loadMore = () => {
    console.log("loadMore");
    setLoading(true);
    fetch({ pageSize: 10, page: page + 1 }).then((res) => {
      const { data: resData, total: resTotal, page } = res.data;
      setData(
        data.concat(
          resData.map(
            (item): Image => ({
              id: item.id,
              path: item.path,
              checked: false,
            })
          )
        )
      );
      setPage(page);
      setTotal(resTotal);
      setHasMore(total > data.length);
      setLoading(false);
    });
  };

  const onSelected = (img: Image) => {
    img.checked = true;
    setCheckedImage(img);
    onChange?.(img);
  };

  return (
    <Card style={{ width: "100%" }}>
      <div className="picture-selector">
        <InfiniteScroll
          initialLoad
          pageStart={0}
          loadMore={loadMore}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            className="picture-selector__list"
            grid={{ gutter: 12, column: 3 }}
            dataSource={data}
            renderItem={(item: Image) => (
              <List.Item>
                <PictureItem
                  onCheck={onSelected}
                  id={item.id}
                  path={item.path}
                  checked={checkedImage?.id === item.id}
                  key={item.id}
                />
              </List.Item>
            )}
          >
            {loading && hasMore && (
              <div className="picture-selector__list--loading">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    </Card>
  );
};

const PictureItem: React.FC<Image & { onCheck: (id: Image) => void }> = ({
  id,
  path,
  checked,
  onCheck,
}) => (
  <div
    className={classNames("item", { "item--selected": checked })}
    onClick={() => onCheck({ id, path, checked })}
  >
    <img src={path} alt="item" />
    {checked ? <CheckCircleOutlined className="item__checked-icon" /> : ""}
  </div>
);

export default PictureSelector;
