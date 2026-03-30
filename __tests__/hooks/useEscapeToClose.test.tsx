import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useEscapeKeyToClose from "@/hooks/useEscapeToClose";

test("calls callback on Escape key", async () => {
  const handler = vi.fn();
  const user = userEvent.setup();

  function TestComponent() {
    useEscapeKeyToClose(handler);

    return <div />;
  }

  render(<TestComponent />);

  await user.keyboard("{Escape}");

  expect(handler).toHaveBeenCalledOnce();
});

test("does not calls callback on other key presses", async () => {
  const handler = vi.fn();
  const user = userEvent.setup();

  function TestComponent() {
    useEscapeKeyToClose(handler);

    return <div />;
  }

  render(<TestComponent />);

  await user.keyboard("{Enter}");

  expect(handler).not.toHaveBeenCalled();
});
