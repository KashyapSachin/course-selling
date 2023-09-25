import React, { Component } from "react";

class Dialog extends Component {
  constructor(props) {
    super(props);
  }
  hideScreen = () => {
    document.getElementsByName("html")[0].style.overflow = "hidden";
  };
  showScreen = () => {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  };
  render() {
    let theChild = undefined;
    if (this.props.model === true) {
      this.hideScreen();
    } else {
      this.showScreen();
    }
    if (this.props.model) {
      theChild = (
        <div
          className=" overflow-scroll absolute top-0 bottom-0 left-0 right-0 flex"
          style={{
            zIndex: this.props.zIndex ? this.props.zIndex : 20,
            width: "100vw",
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : "rgba(0,0,0,0.5)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: this.props.noBg ? "" : "white",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            {this.props.children}
          </div>
        </div>
      );
    }
    return <div>{theChild}</div>;
  }
}

export default Dialog;
