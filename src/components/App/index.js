import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import Map from "../Map";
import Profile from "../Profile";
import { withSubscribe } from "../../hoc/withSubscribe";
import { connect } from "react-redux";
import Login from "../Login";
import {PageWrapper} from "./styles";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isLoggedIn: false,
    };
  }

  static getDerivedStateFromError(error) {
    // вызывается после возникновения ошибки у компонента-потомка.
    // Он получает ошибку в качестве параметра и возвращает значение для обновления состояния.
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { isLoggedIn } = this.props;

    if (hasError) {
      return (
        <div className="App" style={{ background: "red" }}>
          error!!!
        </div>
      );
    }

    return (
      <div className="App">
        <PageWrapper>
        <Router>
          <Header className={"header header--red"} />
          <Switch>
            <Route path="/map">{isLoggedIn ? <Map /> : <Redirect to="/login" />}</Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
        </PageWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

export default connect(mapStateToProps)(withSubscribe(App));
