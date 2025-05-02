import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Sidebar from "./components/Sidebar";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router";
import Watch from "./components/Watch";
import Body from "./components/Body";
import OTP from "./components/OTP";
import FolderFileExplorere from "./components/Folder-File-Explorere";
import Menu_Toggle from "./components/Menu_Toggle";
import { ThemeProvider } from "./utils/context/ToggleThemeContext";
import Todo from "./components/Todo";

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
    {
      path: "/otp",
      element: <OTP />,
    },
    {
      path: "/demo",
      // element: <Menu_Toggle />,
      // element: <PasswordInput />,
      element: <Todo />,
    // },
    },
    {
      path: "/fileExplorer",
      element: <FolderFileExplorere />,
    },
  ]);
  return (
    <ThemeProvider>
      <Provider store={appStore}>
      <div className="bg-white">
        <RouterProvider router={router} />
      </div>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
