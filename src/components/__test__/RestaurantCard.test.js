import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import RestoCardComponent, {withPromotedRestoCardComponent} from "../RestoCard";
import MOCK_DATA from './mocks/restoCardMock.json'

it("should render restaurant card with mock props", ()=>{
    render(<RestoCardComponent key = {MOCK_DATA.info.id} data = {MOCK_DATA}/>)
    const screenTitle = screen.getByText("Subway")
    expect(screenTitle).toBeInTheDocument() 
})

it("should render restaurant card with promoted mock props", ()=>{
    const PromotedRestoCardComponent = withPromotedRestoCardComponent(RestoCardComponent)
    render(<PromotedRestoCardComponent key = {MOCK_DATA.info.id} data = {MOCK_DATA}/>)
    const screenPromotedTitle = screen.getByText("Promoted")
    expect(screenPromotedTitle).toBeInTheDocument() 
})
