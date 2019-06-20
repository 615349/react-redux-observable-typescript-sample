import * as React from "react";

import Map from "./Map.connect";
import Weather from "./Weather.connect";

export interface AppProps {
  loading: boolean;
}

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className="app">
        {this.props.loading && <div className="loading" />}
        <div className="main">
          <Weather />
          <Map />
        </div>
        <div className="footer">(c) 2019 ben li</div>
      </div>
    );
  }
}
