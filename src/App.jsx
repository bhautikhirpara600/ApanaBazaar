import { Outlet } from "react-router";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CustomToaster, Footer, Header } from "./components";

function App() {
  return (
    <Provider store={store}>
      <CustomToaster />
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
