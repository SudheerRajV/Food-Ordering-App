import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from '../Header'
import { Provider } from "react-redux";
import appStore from  "../../utils/redux/appStore"
import '@testing-library/jest-dom'


it("Should show logout on click login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <HeaderComponent />
        </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument()
})