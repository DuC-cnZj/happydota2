import React, { useRef, useState } from "react";
import { Carousel, Image, Card } from "antd";
import classNames from "classnames";
import { CarouselRef } from "antd/lib/carousel";
import st from "../dota2/st.jpeg";
import xg from "../dota2/xg.jpeg";
import nw from "../dota2/nw.jpeg";
import sf from "../dota2/sf.jpeg";
import ta from "../dota2/ta.jpeg";

interface Image {
  url: string;
}

const DetailPreviewCard: React.FC = () => {
  const images: string[] = [xg, st, nw, sf, ta, xg, st, nw, sf, ta];
  const s = useRef<CarouselRef>(null);
  const [current, setCurrent] = useState<number>(0);

  return (
    <Card className="detail-preview-card">
      <Image.PreviewGroup>
        <Carousel
          ref={s}
          effect="fade"
          // autoplay={true}
          beforeChange={(from, to) => {
            setCurrent(to);
            console.log(to);
          }}
          style={{
            overflow: "hidden",
            width: "100%",
            height: "400rem",
            marginBottom: "10rem",
          }}
        >
          {images.map((item, index) => (
            <div className="detail-preview-card__item" key={index}>
              <Image src={item} />
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>
      <div style={{ display: "flex" }} className="detail-preview-card__bottom">
        {images.map((item, index) => (
          <div
            className={classNames("detail-preview-card__bottom__image", {
              "detail-preview-card__bottom__image--selected": index === current,
            })}
            style={{ background: `url(${item})` }}
            onClick={() => s.current?.goTo(index)}
          />
        ))}
      </div>
    </Card>
  );
};

export default DetailPreviewCard;
