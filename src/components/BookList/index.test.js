import { fireEvent, render, screen } from "@testing-library/react";
import bookDetailsData from "../../mocks/bookDetailsData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/slices/appStore";
import Header from "../Header";
import BookList from ".";
import Body from "../Body";


global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(bookDetailsData);
      },
    });
  });
  
  it("should enter text in input box and search for books", async () => {
  
        render(
            <BrowserRouter>
              <Provider store={appStore}>
                  <Header/>
                  <Body />
                  <BookList/>
              </Provider>
            </BrowserRouter>
          );
    
    const inputBox = screen.getByRole("textbox");
    const button=screen.getByRole("button");
    fireEvent.change(inputBox, { target: { value: "harry" } });
    fireEvent.click(button)
  })
