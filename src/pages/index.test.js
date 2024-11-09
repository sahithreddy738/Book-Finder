import { render, screen } from "@testing-library/react"
import Home from "./Home"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/slices/appStore";



it("should render home component",() => {
    render(<BrowserRouter>
      <Provider store={appStore}>
           <Home/>
      </Provider>
    </BrowserRouter>)
    expect(screen.getByText("Want to Search Books?")).toBeInTheDocument();
})