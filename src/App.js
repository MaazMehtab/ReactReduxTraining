import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import store from "./store/index";
function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
