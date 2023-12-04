import { Route, Routes } from "react-router-dom";
import LogIn from "./routes/login";
import SignIn from "./routes/signin";
import Homepage from "./hompage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
