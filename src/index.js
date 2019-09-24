import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class App extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div className="item">
          <img src="assets/img/1.jpg" alt="" />
        </div>
        <div className="item">
          <img src="assets/img/2.jpg" alt="" />
        </div>
        <div className="item">
          <img src="assets/img/3.jpg" alt="" />
        </div>
        <div className="item">
          <img src="assets/img/4.jpg" alt="" />
        </div>
        <div className="item">
          <img src="assets/img/5.jpg" alt="" />
        </div>
      </OwlCarousel>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
