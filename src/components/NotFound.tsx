import img from "../dota2/404-two.png";

const NotFound: React.FC = () => (
  <div className="not-found">
    <img src={img} alt="404" />
    <div className="not-found-title">
      <h1>404</h1>
    </div>
  </div>
);

export default NotFound;
