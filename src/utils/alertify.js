import React from "react";
import alertify from "alertifyjs";

import "../../node_modules/alertifyjs/build/css/alertify.css";
import "../../node_modules/alertifyjs/build/css/themes/bootstrap.css";

const notification = () => {
  alertify.set("notifier", "position", "top-right");
  clearTimeout(window.timeout);
  alertify.success("Transaction Added Sucessfully");
  window.timeout = setTimeout(function () {
    alertify.dismissAll();
  }, 2000);
};

export default notification;
