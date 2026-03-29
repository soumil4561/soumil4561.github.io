import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Card from "@/components/card/Card";

test("renders title", () => {
  render(<Card title="test-title" />);
  const card = screen.getByText("test-title");

  expect(card).toBeInTheDocument();
});

test("renders subtitle when passed", () => {
  render(<Card subtitle="test-subtitle" title="test-title" />);
  const card = screen.getByText("test-subtitle");

  expect(card).toBeInTheDocument();
});

test("subtitle is absent when not passed", () => {
  render(<Card title="test-title" />);
  const card = screen.queryByText("test-subtitle");

  expect(card).not.toBeInTheDocument();
});

test("onClickExecutor is triggered when card is clicked", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(<Card title="test-title" onClickExecutor={handleClick} />);
  const card = screen.getByTestId("card");

  await user.click(card);

  expect(handleClick).toHaveBeenCalledOnce();
});

test("component does not crash on null onClickExecutor", async () => {
  const user = userEvent.setup();
  const handleClick = null;

  render(<Card title="test-title" onClickExecutor={handleClick} />);
  const card = screen.getByTestId("card");

  await expect(user.click(card)).resolves.not.toThrow();
});

test("adds extra classnames when passed in props", () => {
  render(<Card className="test-class" title="test-title" />);
  const card = screen.getByTestId("card");

  expect(card).toHaveClass("test-class");
});

test("applies background image style", () => {
  render(<Card backgroundImage="test.jpg" title="test-title" />);
  const card = screen.getByTestId("card");

  expect(card).toHaveStyle({
    backgroundImage: "url(test.jpg)",
  });
});

test("handles missing background image gracefully", () => {
  render(<Card title="test-title" />);
  const card = screen.getByTestId("card");

  expect(card.style.backgroundImage).toBe("");
});
