import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./templates/HeadFootTemp";

//Screens
import HomeScreen from "./screens/HomeScreen";
import Signup from "./screens/Signup";

function App() {
  const paths = createBrowserRouter([
    {
      path: "/",
      element: <Template childern={<HomeScreen />} />,
    },
    {
      path: "signup",
      element: <Template childern={<Signup />} />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={paths} />
    </div>
  );
}

export default App;
