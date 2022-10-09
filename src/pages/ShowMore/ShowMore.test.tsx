import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ShowMore from "./ShowMore";

// 100% coverage

describe("Show More", () => {
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
      </QueryClientProvider>,
      { wrapper: BrowserRouter }
    );
  it("should render successfully", () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
  });
  it("is data being entered into input", () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "Hya");
    expect(searchInput).toHaveValue("Hya");
  });
  it("is the button disabled if the length of the input is shorter than 3", () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByText("Search");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "Hy");
    expect(searchButton).toBeDisabled();
  });
  it("If the length of the input is more than 3, the button should not be disabled", () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByText("Search");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "Hya");
    expect(searchButton).not.toBeDisabled();
  });
  it("successful search", async () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByText("Search");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "del");
    userEvent.click(searchButton);
    await waitFor(() => {
      const listItems = screen.getAllByTestId("list-item");
      expect(listItems).toHaveLength(1);
    });
  });
  it("does the page number switch to 1 when searching", async () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByText("Search");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "del");
    userEvent.click(searchButton);
    await waitFor(() => {
      const paginateButtons = screen.getAllByTestId("paginateNumber");
      expect(paginateButtons).toHaveLength(1);
    });
  });
  it("is previous and next disabled", async () => {
    setup();
    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByText("Search");
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, "del");
    userEvent.click(searchButton);
    await waitFor(() => {
      const previousButton = screen.getByTestId("paginatePrevious");
      expect(previousButton).toHaveStyle("color:gray");
    });
    await waitFor(() => {
      const nextButton = screen.getByTestId("paginateNext");
      expect(nextButton).toHaveStyle("color:gray");
    });
  });
  it("does it redirect to the new registration page", () => {
    setup();
    const navigateNewRecord = screen.getByTestId("navigateNewRecord");
    userEvent.click(navigateNewRecord);
    expect(window.location.pathname).toBe("/new-record");
  });
  it("does dropdown open", () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderNameAscending = screen.getByTestId("orderNameAscending");
    expect(orderNameAscending).toBeInTheDocument();
  });
  it("does dropdown close", () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderNameAscending = screen.getByTestId("orderNameAscending");
    expect(orderNameAscending).toBeInTheDocument();
    userEvent.click(isViewDropdown);
    expect(orderNameAscending).not.toBeInTheDocument();
  });
  it("does all data come up when sorted", async () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderNameAscending = screen.getByTestId("orderNameAscending");
    userEvent.click(orderNameAscending);
    await waitFor(() => {
      const listItems = screen.getAllByTestId("list-item");
      expect(listItems).toHaveLength(5);
    });
  });
  it("ascending order by name", () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderNameAscending = screen.getByTestId("orderNameAscending");
    userEvent.click(orderNameAscending);
    const listItems = screen.getAllByTestId("list-item");
    expect(listItems[0]).toHaveTextContent("Brenden Martinez");
  });
  it("descending order by name", () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderNameDescending = screen.getByTestId("orderNameDescending");
    userEvent.click(orderNameDescending);
    const listItems = screen.getAllByTestId("list-item");
    expect(listItems[0]).toHaveTextContent("Lunea Kinney");
  });
  it("ascending order by date", () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderDateAscending = screen.getByTestId("orderYearAscending");
    userEvent.click(orderDateAscending);
    const listItems = screen.getAllByTestId("list-item");
    expect(listItems[0]).toHaveTextContent("Brenden Martinez");
  });
  it("descending order by date", () => {
    setup();
    const isViewDropdown = screen.getByTestId("isViewDropdown");
    userEvent.click(isViewDropdown);
    const orderDateDescending = screen.getByTestId("orderYearDescending");
    userEvent.click(orderDateDescending);
    const listItems = screen.getAllByTestId("list-item");
    expect(listItems[0]).toHaveTextContent("Hyacinth Vincent");
  });
  it("Does the number of pages change when the next button is pressed?", async () => {
    setup();
    const nextButton = screen.getByTestId("paginateNext");
    userEvent.click(nextButton);
    await waitFor(() => {
      const paginateButtons = screen.getAllByTestId("paginateNumber");
      expect(paginateButtons).toHaveLength(2);
    });
  });
  it("Does the number of pages change when the previous button is pressed?", async () => {
    setup();
    const nextButton = screen.getByTestId("paginateNext");
    userEvent.click(nextButton);
    const previousButton = screen.getByTestId("paginatePrevious");
    userEvent.click(previousButton);
    await waitFor(() => {
      const paginateButtons = screen.getAllByTestId("paginateNumber");
      expect(paginateButtons).toHaveLength(2);
    });
  });
});
