import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router";
import Watch from "./components/watch";
import Body from "./components/Body";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="bg-white">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
