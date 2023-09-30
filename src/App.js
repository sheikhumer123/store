import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./templates/HeadFootTemp";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";

function App() {
  const paths = createBrowserRouter([
    {
      path: "/",
      element: <Template childern={<HomeScreen />} />,
    },
  ]);
  return (
    <div className="App">
      {/* <RouterProvider router={paths} /> */}
      <Navbar />
    </div>
  );
}

export default App;
