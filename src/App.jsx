import { Outlet } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
