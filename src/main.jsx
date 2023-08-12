import React from "react";
// import "dotenv/config";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { store, persistor } from "./redux/mainStore.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import path from "path"; // Import the 'path' module here

// import dotenv from "dotenv";
// dotenv.config({ path: "./config.env" });

// console.log(process.env.REACT_APP_BASE_URL);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
