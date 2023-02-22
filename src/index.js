import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "@/assets/css/index.less";
import "normalize.css";
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
// import 'antd/dist/reset.less';
// import 'antd/dist/antd.less';

import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Suspense>
      <Provider store={store}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b96b",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </Provider>
    </Suspense>
  </HashRouter>
  // </React.StrictMode>
);
