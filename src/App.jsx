import { Route, Routes } from "react-router-dom";
import Comics from "./pages/Comics";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Comics />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    );
}

export default App;
