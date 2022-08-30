import React from "react";
import CanvasLogoWordless from "../assets/canvas-logo-wordless.png";

class NotifPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.showNotification = this.showNotification.bind(this);
  }
  componentDidMount() {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification.");
    } else {
      Notification.requestPermission();
    }
  }
  showNotification() {
    const notification = new Notification("Reminder!", {
      body: this.props.message,
      icon: CanvasLogoWordless
    });
    setTimeout(() => {
      notification.close();
    }, 5000);
  }
  render() {
    return (
      <div>
        <button onClick={this.showNotification}>Check Time</button>
      </div>
    );
  }
}

export default NotifPlugin;
