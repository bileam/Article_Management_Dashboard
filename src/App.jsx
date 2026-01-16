import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Utama from "./Main/Utama";
import AllPost from "./Pages/AllPost";
import Addpost from "./Pages/AddPost";
import Preview from "./Pages/Preview";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Utama />}>
          <Route index element={<AllPost />} />
          <Route path="/all-post" element={<AllPost />} />
          <Route path="/add-new" element={<Addpost />} />
          <Route path="/preview" element={<Preview />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
