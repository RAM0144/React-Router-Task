import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css"
import FullStack from "./pages/FullStack"
import HomePage from "./pages/Home";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fullstack" element={<FullStack />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path='*' element={<h1>404 Page Not Found, Please check the URL</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;