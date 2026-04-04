import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "@/components/modal/Modal";

const setup = ({ children = <h1>test-content</h1>, ...props }: any = {}) => {
  const user = userEvent.setup();
  const onClose = vi.fn();

  render(
    <Modal onClose={onClose} {...props}>
      {children}
    </Modal>,
  );

  return {
    user,
    onClose,
  };
};

describe("Modal", () => {
  test("renders children", () => {
    setup();

    const heading = screen.getByRole("heading", {
      name: "test-content",
    });

    expect(heading).toBeInTheDocument();
  });

  test("renders with dialog role", () => {
    setup();

    const modal = screen.getByRole("dialog");

    expect(modal).toBeInTheDocument();
  });

  test("clicking outside triggers onClose", async () => {
    const { user, onClose } = setup();

    const backdrop = screen.getByTestId("modal-backdrop");

    await user.click(backdrop);

    expect(onClose).toHaveBeenCalledOnce();
  });

  test("clicking inside does NOT trigger onClose", async () => {
    const { user, onClose } = setup();

    const content = screen.getByTestId("modal-content");

    await user.click(content);

    expect(onClose).not.toHaveBeenCalled();
  });

  test("pressing Escape triggers onClose", async () => {
    const { user, onClose } = setup();

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledOnce();
  });

  test("non-Escape key does NOT trigger onClose", async () => {
    const { user, onClose } = setup();

    await user.keyboard("{Enter}");

    expect(onClose).not.toHaveBeenCalled();
  });

  test("adds extra classnames when passed", () => {
    setup({ className: "test-class" });

    const modal = screen.getByRole("dialog");

    expect(modal).toHaveClass("test-class");
  });

  test("renders without children", () => {
    const onClose = vi.fn();

    render(<Modal onClose={onClose} />);

    const modal = screen.getByRole("dialog");

    expect(modal).toBeInTheDocument();
  });
});
