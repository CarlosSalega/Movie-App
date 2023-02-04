import Main from "./components/main";
import Detail from "./components/detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main url={url} />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
