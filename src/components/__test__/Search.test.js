import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BodyComponent from "../Body";
import "@testing-library/jest-dom"
import MOCK_DATA from "./mocks/restoListMock.json"
import { act } from "@testing-library/react";

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () =>{
          //  console.log('MOCK_DATA', {MOCK_DATA})
            return Promise.resolve(MOCK_DATA)
        }
    })
})
it("should render body component", async ()=>{
    await act(async ()=> render(<BrowserRouter>
        <BodyComponent/>
        </BrowserRouter>)
        )
        
        const cardsBeforeSearch = await screen.getAllByTestId("restoCard")
        expect(cardsBeforeSearch.length).toBe(20)
        const searchInput = screen.getByTestId("searchInput")
        const search = screen.getByTestId("search")
        fireEvent.change(searchInput, {target: {value: "burger"}})
        fireEvent.click(search)
        const cardsAfterSearch = screen.getAllByTestId("restoCard")
        expect(cardsAfterSearch.length).toBe(1)
})

it("should render body component with top rated", async ()=>{
    await act(async ()=> render(<BrowserRouter>
        <BodyComponent/>
        </BrowserRouter>)
        )
    
        const cardsBeforeSearch = screen.getAllByTestId("restoCard")
        expect(cardsBeforeSearch.length).toBe(20)
        const topRated = screen.getByTestId("topRated")
        fireEvent.click(topRated)
        const cardsAfterSearch = screen.getAllByTestId("restoCard")
        expect(cardsAfterSearch.length).toBe(10)
})