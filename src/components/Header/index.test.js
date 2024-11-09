import { fireEvent, render, screen, waitFor} from "@testing-library/react";
import Header from ".";
import { Provider } from "react-redux";
import appStore from "../../utils/slices/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import bookDetailsData  from "../../mocks/bookDetailsData.json";
import BookList from "../BookList";
import { act } from "react";


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(bookDetailsData);
      },
    });
  });
  

it("should render header component with heading",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
       );
    expect(screen.getByText("Want to Search Books?")).toBeInTheDocument();
})

it("should enter text in input box and search for books", async () => {
  
    await act(async () => {
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <BookList />
              </Provider>
            </BrowserRouter>
          );
    });
  
    const inputBox = screen.getByRole("textbox");
    const button=screen.getByRole("button");
    fireEvent.change(inputBox, { target: { value: "harry" } });
    fireEvent.click(button)
  })
