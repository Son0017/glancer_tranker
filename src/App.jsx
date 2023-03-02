import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Protected, ProtectedOne } from "./components/Protected";
import Home from "./home/Home";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import { useAuthconfig } from "./hooks/useCantexts";
function App() {
  const { authReady } = useAuthconfig();
  return (
    <div className="App font-myFont">
      {authReady && (
        <Router>
          <Navbar />
          <div className="max-w-5xl mx-auto py-10">
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedOne>
                    <Home />
                  </ProtectedOne>
                }
              />
              <Route
                path="/login"
                element={
                  <Protected>
                    <Login />
                  </Protected>
                }
              />
              <Route
                path="/signup"
                element={<Protected>{<Signup />}</Protected>}
              />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
