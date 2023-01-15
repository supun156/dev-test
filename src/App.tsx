import RoutesList from "./XYT";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
