import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Tooltip from "@/components/tooltip/Tooltip";

const setup = ({
  children = <span>test-content</span>,
  ...props
}: any = {}) => {
  const onDismiss = vi.fn();

  render(
    <Tooltip onDismiss={onDismiss} {...props}>
      {children}
    </Tooltip>,
  );

  return {
    onDismiss,
  };
};

describe("Tooltip", () => {
  test("tooltip should be rendered when isVisible prop is true", () => {
    setup({ isVisible: true });
    const tooltip = screen.getByTestId("tooltip");

    expect(tooltip).toBeInTheDocument();
  });

  test("tooltip should not be rendered when isVisible prop is false", () => {
    setup({ isVisible: false });
    const tooltip = screen.queryByTestId("tooltip");

    expect(tooltip).not.toBeInTheDocument();
  });

  test("mousedown triggers onDismiss when visible", () => {
    const { onDismiss } = setup({ isVisible: true });

    window.dispatchEvent(new MouseEvent("mousedown"));

    expect(onDismiss).toHaveBeenCalledOnce();
  });

  test("keydown triggers onDismiss when visible", () => {
    const { onDismiss } = setup({ isVisible: true });

    window.dispatchEvent(new KeyboardEvent("keydown"));

    expect(onDismiss).toHaveBeenCalledOnce();
  });

  test("blur triggers onDismiss when visible", () => {
    const { onDismiss } = setup({ isVisible: true });

    window.dispatchEvent(new Event("blur"));

    expect(onDismiss).toHaveBeenCalledOnce();
  });

  test("does not trigger onDismiss when not visible", () => {
    const { onDismiss } = setup({ isVisible: false });

    window.dispatchEvent(new MouseEvent("mousedown"));

    expect(onDismiss).not.toHaveBeenCalled();
  });

  test("removes event listeners when unmounted", () => {
    const onDismiss = vi.fn();

    const { unmount } = render(
      <Tooltip isVisible={true} onDismiss={onDismiss}>
        test
      </Tooltip>,
    );

    unmount();

    window.dispatchEvent(new MouseEvent("mousedown"));

    expect(onDismiss).not.toHaveBeenCalled();
  });

  test("adds listeners when visibility changes to true", () => {
    const onDismiss = vi.fn();

    const { rerender } = render(
      <Tooltip isVisible={false} onDismiss={onDismiss}>
        test
      </Tooltip>,
    );

    // now make it visible
    rerender(
      <Tooltip isVisible={true} onDismiss={onDismiss}>
        test
      </Tooltip>,
    );

    window.dispatchEvent(new MouseEvent("mousedown"));

    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
