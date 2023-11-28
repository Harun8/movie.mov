import { Route, Routes } from "react-router-dom";
import LogIn from "./routes/login";
import SignIn from "./routes/signin";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LogIn></LogIn>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
