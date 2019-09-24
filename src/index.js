import React from "react";
import ReactDOM from "react-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class App extends React.Component {
  render() {
    return (
      <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img src="assets/img/1.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/2.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/3.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/4.jpg" />
        </div>
        <div class="item">
          <img src="assets/img/5.jpg" />
        </div>
      </OwlCarousel>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
