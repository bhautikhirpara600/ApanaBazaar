import { Outlet } from "react-router";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Footer, Header } from "./components";

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
