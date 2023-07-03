import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import NewUserPage from "./pages/login/create.account.page";
import ForgotPasswordPage from "./pages/login/forgot.password.page";
import ForgotUsernamePage from "./pages/login/forgot.username.page";
import DashboardPage from "./pages/dashboard.page";

//CSS IMPORTS
import "./styles/CA.css";
import "./styles/login.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/createaccount" element={<NewUserPage />} />
        <Route path="/updatepassword" element={<ForgotPasswordPage />} />
        <Route path="/getusername" element={<ForgotUsernamePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
