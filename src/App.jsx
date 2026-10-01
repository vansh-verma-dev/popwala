import { Route, Routes } from "react-router-dom";
 import HomePage from "./pages/home";
import PrivacyPolicy from "./pages/Privacypolicy";
import Terms from "./pages/Terms";
import NotFound from "./components/notFound";
import RefundPolicy from "./pages/RefundPolicy";
import CustomerSupport from "./pages/CustomerSupport";
import ReportIssue from "./pages/ReportIssue";
 

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/terms" element={<Terms/>} />
    <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} />
    <Route path="/RefundPolicy" element={<RefundPolicy/>} />
    <Route path="/CustomerSupport" element={<CustomerSupport/>} />
    <Route path="/ReportIssue" element={<ReportIssue/>} />
    <Route path="/*" element={<NotFound/>} />
   </Routes>
    </>
  )
}
export default App;