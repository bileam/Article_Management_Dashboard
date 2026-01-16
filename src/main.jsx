import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyDeleteProvider } from "./Context/Delete.jsx";
import { PublishPorvider } from "./Context/Publish.jsx";
import { MyDraftProvider } from "./Context/Draft.jsx";
import { MyPrevProvider } from "./Context/Preview.jsx";

createRoot(document.getElementById("root")).render(
  <MyPrevProvider>
    <MyDraftProvider>
      <MyDeleteProvider>
        <PublishPorvider>
          <StrictMode>
            <App />
          </StrictMode>
        </PublishPorvider>
      </MyDeleteProvider>
    </MyDraftProvider>
  </MyPrevProvider>
);
