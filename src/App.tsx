import { Outlet } from "react-router";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Outlet></Outlet>
    </>
  );
}
export default App;
