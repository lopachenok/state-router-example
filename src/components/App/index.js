import React from "react";
import "./App.css";
import { Header } from "../Header";
import Map from "../Map";
import Profile from "../Profile";
import { AuthContext } from "../../context/authContext";
import {DataProvider} from "../../data/dataprovider";
import {withSubscribe} from "../../hoc/withSubscribe";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "map",
      hasError: false,
      isLoggedIn: false
    };
  }

  static getDerivedStateFromError(error) {
    // вызывается после возникновения ошибки у компонента-потомка.
    // Он получает ошибку в качестве параметра и возвращает значение для обновления состояния.
    return { hasError: true };
  }

  renderPage = page => {
    switch (page) {
      case "map":
      default:
        return <Map props={'ghj'} />;
      case "profile":
        return <Profile />;
    }
  };

  changePage = page => {
    this.setState({ page });
  };

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { page, hasError } = this.state;
    console.log('App', this.props.data);

    if (hasError) {
      return (
        <div className="App" style={{ background: "red" }}>
          error!!!
        </div>
      );
    }

    return (
      <AuthContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, login: this.login, logout: this.logout }}>
        <div className="App">
          <Header className={"header header--red"} changePage={this.changePage} />
          {this.renderPage(page)}
        </div>
      </AuthContext.Provider>
    );
  }
}

export default withSubscribe(App);
