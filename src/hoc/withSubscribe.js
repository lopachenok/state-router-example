import * as React from "react";
import { DataProvider } from "../data/dataprovider";

export const withSubscribe = WrappedComponent => {
  return class extends React.Component {
    static displayName = `WithSubscribe(${WrappedComponent.displayName})`;

    constructor(props) {
      super(props);

      this.state = {
        data: "",
      };
    }

    componentDidMount() {
      DataProvider.getInstance().subscribe(this.handler);
    }

    handler = data => {
      this.setState({ data });
    };

    componentWillUnmount() {
      DataProvider.getInstance().unsubscribe(this.handler);
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};
