import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/slices/appStore";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    
    <Provider store={appStore}>
      <BrowserRouter basename="/">
      <ToastContainer/>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<Body />} />
              <Route path="/books/:title" element={<BookList />} />
              <Route path="/works/:bookId" element={<BookDetails />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
