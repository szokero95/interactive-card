import { Provider } from "react-redux";
import store from "./store/store";
import { Container, Form, CardBack, CardFront } from "./components";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container
          small={
            <>
              <CardFront />
              <CardBack />
            </>
          }
          big={<Form />}
        />
      </Provider>
    </div>
  );
}
