
import { Outlet} from "react-router-dom";
import Nav from "./components/Nav";

function MainLayout() {

  return (
    <div>
      <Nav></Nav>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout