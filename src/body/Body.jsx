import nayan from "../images/nayan.webp";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      <div className="details">
        <h3>Hello, This is Nayan.</h3>
      </div>
      <div className="image">
        <img src={nayan} alt="nayan" />
      </div>
    </div>
  );
}

export default Body;
