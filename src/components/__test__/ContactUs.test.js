import { render, screen } from "@testing-library/react";
import ContactUs from '../ContactUs'
import "@testing-library/jest-dom"

test('should load contact us page', () => { 
    render(<ContactUs/>)
    const text =  screen.getByText("Contact Us")
    expect(text).toBeInTheDocument();
 })