import { Route, Routes } from "react-router-dom";
 import HomePage from "./pages/home";
import PrivacyPolicy from "./pages/Privacypolicy";
import Terms from "./pages/Terms";
import CheckoutModal from "./pages/checkout";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/Terms" element={<Terms/>} />
    <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
    <Route path="/*" element={<NotFound/>} />
   </Routes>
    </>
  )
}
export default App;