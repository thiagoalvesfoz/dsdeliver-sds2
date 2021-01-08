import { BrowserRouter, Switch, Route } from "react-router-dom";

//component
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//pages
import Home from "./pages/home";
import Orders from "./pages/orders";

export default function routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/orders" component={Orders} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
