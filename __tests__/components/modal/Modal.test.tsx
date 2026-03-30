import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "@/components/modal/Modal";

test(" should render basic modal when a child component is passed", () => {
  const testComponent = <h1>test-content</h1>;
  const onClose = vi.fn();

  render(<Modal onClose={onClose}>{testComponent}</Modal>);
  const heading = screen.getByRole("heading", { name: "test-content" });

  expect(heading).toBeInTheDocument();
});

test("renders with the dialog accessibility role", () => {
  const testComponent = <h1>test-content</h1>;
  const onClose = vi.fn();

  render(<Modal onClose={onClose}>{testComponent}</Modal>);
  const modal = screen.getByRole("dialog");

  expect(modal).toBeInTheDocument();
});

test("clicking outside modal content should trigger onClose", async () => {
  const testComponent = <h1>test-content</h1>;
  const user = userEvent.setup();
  const onClose = vi.fn();

  render(<Modal onClose={onClose}>{testComponent}</Modal>);
  const modalBackdrop = screen.getByTestId("modal-backdrop");

  await user.click(modalBackdrop);
  expect(onClose).toHaveBeenCalledOnce();
});

test("pressing of escape button should trigger onClose", async () => {
  const testComponent = <h1>test-content</h1>;
  const user = userEvent.setup();
  const onClose = vi.fn();

  render(<Modal onClose={onClose}>{testComponent}</Modal>);
  //press escape button
  await user.keyboard("{Escape}");
  expect(onClose).toHaveBeenCalledOnce();
});

test("keypress different than escape should not trigger onClose", async () => {
  const testComponent = <h1>test-content</h1>;
  const user = userEvent.setup();
  const onClose = vi.fn();

  render(<Modal onClose={onClose}>{testComponent}</Modal>);
  //press escape button
  await user.keyboard("{Enter}");
  expect(onClose).not.toHaveBeenCalled();
});

test("clicking inside modal content should not trigger onClose", async () => {
  const testComponent = <h1>test-content</h1>;
  const user = userEvent.setup();
  const onClose = vi.fn();

  render(<Modal onClose={onClose}>{testComponent}</Modal>);
  const modalContent = screen.getByTestId("modal-content");

  await user.click(modalContent);
  expect(onClose).not.toHaveBeenCalled();
});

test("adds extra classnames when passed in props", () => {
  const testComponent = <h1>test-content</h1>;
  const onClose = vi.fn();

  render(
    <Modal className="test-class" onClose={onClose}>
      {testComponent}
    </Modal>,
  );
  const modal = screen.getByRole("dialog");

  expect(modal).toHaveClass("test-class");
});

test("renders with no children passed", () => {
  const onClose = vi.fn();

  render(<Modal onClose={onClose} />);
  const modal = screen.getByRole("dialog");

  expect(modal).toBeInTheDocument();
});
