import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShowMore from "pages/ShowMore/ShowMore";
import { BrowserRouter } from "react-router-dom";
import NewRecord from "./NewRecord";

// 100% coverage

describe("Do you have the right elements", () => {
  it("name input available", () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //Name Input var mı
    const nameInput = screen.getByTestId("nameSurname");
    expect(nameInput).toBeInTheDocument();
  });
  it("country input available", () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //Country Input var mı
    const countryInput = screen.getByTestId("country");
    expect(countryInput).toBeInTheDocument();
  });
  it("city input available", () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //City Input var mı
    const cityInput = screen.getByTestId("city");
    expect(cityInput).toBeInTheDocument();
  });
  it("email input available", () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //Email Input var mı
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
  });
  it("submit button available", () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //Submit Button var mı
    const submitButton = screen.getByText("Add");
    expect(submitButton).toBeInTheDocument();
  });
});
describe("incorrect data check", () => {
  it("empty email check", async () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //Email Input var mı
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: "Add" });
    fireEvent.click(submitButton);
    const errorMessages = await screen.findAllByTestId("errorMessage");
    expect(errorMessages[3]).toHaveTextContent("Required");
  });
  it("invalide  email check", async () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    //Email Input var mı
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, "test");
    //test girdim email doğru değil
    const submitButton = screen.getByRole("button", { name: "Add" });
    userEvent.click(submitButton);
    await waitFor(() => {
      const errorMessages = screen.getAllByTestId("errorMessage");
      expect(errorMessages[3]).toHaveTextContent("Invalid email");
    });
  });
  it("no error when the correct data is entered", async () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();

    //Email Input var mı
    const emailInput = screen.getByTestId("email");
    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, "1sahinomer1@gmail.com");
    const submitButton = screen.getByRole("button", { name: "Add" });
    userEvent.click(submitButton);
    await waitFor(() => {
      const errorMessages = screen.getAllByTestId("errorMessage");
      expect(errorMessages[3]).not.toBe("Invalid email");
    });
  });
});
describe("successful referral", () => {
  it("successful referral", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnMount: false,
          refetchOnWindowFocus: false,
        },
      },
    });
    const setup = () =>
      render(
        <QueryClientProvider client={queryClient}>
          <ShowMore />
          <NewRecord />
        </QueryClientProvider>,
        { wrapper: BrowserRouter }
      );
    setup();
    const navigateBack = screen.getByTestId("navigateBack");
    userEvent.click(navigateBack);
    await waitFor(() => {
      expect(screen.getByTestId("orderText")).toBeInTheDocument();
    });
  });
  it("check onsubmit", async () => {
    const setup = () => render(<NewRecord />, { wrapper: BrowserRouter });
    setup();
    const emailInput = screen.getByTestId("email");
    userEvent.type(emailInput, "1sahinomer@gmail.com");
    const nameSurnameInput = screen.getByTestId("nameSurname");
    userEvent.type(nameSurnameInput, "Sahin Omer");
    const countryInput = screen.getByTestId("country");
    userEvent.type(countryInput, "Turkey");
    const cityInput = screen.getByTestId("city");
    userEvent.type(cityInput, "Istanbul");
    const submitButton = screen.getByRole("button", { name: "Add" });
    userEvent.click(submitButton);
    await waitFor(() => {
      const enteredData = screen.getByTestId("enteredData");
      expect(enteredData).toBeInTheDocument();
    });
  });
});
