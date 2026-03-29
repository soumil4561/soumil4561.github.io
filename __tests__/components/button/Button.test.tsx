import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PrimaryButton, DefaultButton } from "@/components/button/Button";

test("should render primary btn", () => {
  render(<PrimaryButton text="test-button" type="button" />);
  const button = screen.getByRole("button", { name: "test-button" });

  expect(button).toBeInTheDocument();
});

test("should render default btn", () => {
  render(<DefaultButton text="test-button" type="button" />);
  const button = screen.getByRole("button", { name: "test-button" });

  expect(button).toBeInTheDocument();
});

test("is disabled when disabled prop is true", () => {
  render(<PrimaryButton disabled={true} text="test-button" type="button" />);
  expect(screen.getByRole("button", { name: "test-button" })).toBeDisabled();
});

test("onClickExecutor is triggered when btn is clicked", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(
    <PrimaryButton
      text="test-button"
      type="button"
      onClickExecutor={handleClick}
    />,
  );

  const button = screen.getByRole("button", { name: "test-button" });

  await user.click(button);

  expect(handleClick).toHaveBeenCalledOnce();
});

test("onClickExecutor should not be triggered when disabled btn is clicked", async () => {
  const user = userEvent.setup();
  const handleClick = vi.fn();

  render(
    <PrimaryButton
      disabled={true}
      text="test-button"
      type="button"
      onClickExecutor={handleClick}
    />,
  );

  const button = screen.getByRole("button", { name: "test-button" });

  await user.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});

test("sets button type correctly", () => {
  render(<PrimaryButton text="test-button" type="submit" />);
  expect(screen.getByRole("button", { name: "test-button" })).toHaveAttribute(
    "type",
    "submit",
  );
});

test("adds extra classnames when passed in props", () => {
  render(
    <PrimaryButton className="test-class" text="test-button" type="button" />,
  );
  expect(screen.getByRole("button", { name: "test-button" })).toHaveClass(
    "test-class",
  );
});
