/* eslint-disable testing-library/no-node-access */
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Modal from "./Modal";

describe("Modal Component", () => {
  it("does not render anything when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <p>Test Modal</p>
      </Modal>
    );
    expect(screen.queryByText("Test Modal")).toBeNull();
  });

  it("renders the modal and focuses on modal-content when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <p>Test Modal</p>
      </Modal>
    );
    const modalContent = screen.getByRole("dialog");
    expect(modalContent).toHaveClass("modal-content");

    expect(document.activeElement).toBe(modalContent);
  });

  it("calls onClose when the modal loses focus", () => {
    const onCloseMock = jest.fn();

    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <p>Test Modal</p>
      </Modal>
    );

    const modalContent = screen.getByRole("dialog");

    // Simulate blur event
    fireEvent.blur(modalContent, { relatedTarget: null });

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
