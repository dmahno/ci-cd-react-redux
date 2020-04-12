import React, { Component } from "react";
import "./main.scss";
import "./assets/icons.scss";
import Main from "./pages/main/main.page";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Router, Switch, Route } from "react-router-dom";
import Settings from "./pages/settings/settings.page";
import History from "./pages/history/history.page";
import Details from "./pages/details/details.page";
import NotFoundPage from "./pages/notFound/notFound.page";
import history from "./history";
import Loader from "./components/Loader/Loader";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store';
import BuildModal from './components/BuildModal/BuildModal';
import { EventEmitter } from "./helper-methods";
import { PersistGate } from "redux-persist/integration/react";
import ProtectedRoute from './protected-routes/index';


class App extends Component {
  state = {
    buildModal: {
      isVisible: false
    }
  }

  componentDidMount() {
    // Listen to build modal open event
    EventEmitter.subscribe("onBuildModalOpen", () => {
      this._toggleBuildModal(true);
    })
    // Prod mode
    
  }

  _toggleBuildModal = status => {
    const { buildModal } = this.state;
    buildModal.isVisible = status;
    this.setState({ buildModal });
  }


  render() {
    const { buildModal } = this.state;
    return (
      <Provider store={store}>
        <PersistGate loading={<div></div>} persistor={persistor}>
        <main>
          <Router history={history}>
            <BuildModal isVisible={buildModal.isVisible} onHide={() => this._toggleBuildModal(false)} />
            <Loader />
            <Header />
            <Switch>
              <Route exact={true} path="/settings" component={Settings} />
              <ProtectedRoute path="/history" redirectRoute="/" component={History} />
              <ProtectedRoute path="/details" redirectRoute="/" component={Details} />
              <Route path="/" component={Main} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </Router>
        </main>
        <Footer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
