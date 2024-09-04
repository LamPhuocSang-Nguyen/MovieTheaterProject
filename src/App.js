import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/movieProject" element={<Home />} />
    //     {/* <Route path="/detail/:id" element={<ProductDetail />} /> */}
    //     {/* <Route path="/ShowCats" element={<ShowCats />} /> */}
    //     {/* <Route path="/*" element={<NotFound />} /> */}
    //   </Routes>
    // </Router>
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
