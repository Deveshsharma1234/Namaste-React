import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Contact from "../../pages/Contact";


 test("Should load contact us component", () => {
  render(<Contact/>);

   const heading = screen.getByRole("heading")

   expect(heading).toBeInTheDocument();
});

test("Should load Button in contact us component", () => {
    render(<Contact/>);
  
     const button = screen.getByRole("button")
  
     expect(button).toBeInTheDocument();
  });


  test("Should load Inpput name in contact us component", () => {
    render(<Contact/>);
  
     const name = screen.getByPlaceholderText("Name");
  
     expect(name).toBeInTheDocument();
  });