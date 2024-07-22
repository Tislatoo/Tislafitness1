import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import UserSide from "./pages/UserSide";
import PricingPlan1 from "./pages/PricingPlan1";
import PricingPlan2 from "./pages/PricingPlan2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pricing-plan-2":
        title = "";
        metaDescription = "";
        break;
      case "/pricing-plan-3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserSide />} />
      <Route path="/pricing-plan-2" element={<PricingPlan1 />} />
      <Route path="/pricing-plan-3" element={<PricingPlan2 />} />
    </Routes>
  );
}
export default App;
