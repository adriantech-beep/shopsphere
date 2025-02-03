import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsProvider } from "./contexts/ProductsContext";
import { lazy, Suspense } from "react";
import SpinnerFullpage from "./components/SpinnerFullpage";

const HomePage = lazy(() => import("./pages/HomePage"));
const Deals = lazy(() => import("./pages/Deals"));
const WhatsNew = lazy(() => import("./pages/WhatsNew"));
const Delivery = lazy(() => import("./pages/Delivery"));

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Suspense fallback={<SpinnerFullpage />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="deals" element={<Deals />} />
            <Route path="whatsnew" element={<WhatsNew />} />
            <Route path="delivery" element={<Delivery />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
