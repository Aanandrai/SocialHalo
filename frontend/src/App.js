
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

const router=createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },

])

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
