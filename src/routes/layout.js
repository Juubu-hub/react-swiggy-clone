import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/header";
import Footer from "../components/foot";
import store from "../reduxCounter/store";
import { Provider } from "react-redux";

const style = {
  body: {
    marginLeft: "145px",
  },
  head: {
    marginLeft: "155px",
  },
};
const Layout = () => (
  <Provider store={store}>
    <>
      <HeaderComponent />

      <div style={style.body}>
        <Outlet />
      </div>
      <Footer />
    </>
  </Provider>
);

export default Layout;
