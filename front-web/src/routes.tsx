import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//component
import Navbar from "./components/navbar";
import Footer from "./components/footer";

//pages
import Home from "./pages/home";
import Orders from "./pages/orders";

export default function routes() {
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4,
  };

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Navbar />
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/orders" component={Orders} />
          </Switch>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </BrowserRouter>
  );
}
