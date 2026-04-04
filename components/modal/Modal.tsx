import useEscapeKeyToClose from "@/hooks/useEscapeToClose";

export type ModalProps = {
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function Modal(props: ModalProps) {
  useEscapeKeyToClose(props.onClose);

  return (
    <div
      aria-modal="true"
      className={`fixed inset-0 z-50 flex items-center justify-center ${props.className}`}
      role="dialog"
    >
      {/* Backdrop */}
      <button
        className="absolute inset-0 bg-background/40 backdrop-blur-sm"
        data-testid="modal-backdrop"
        onClick={props.onClose}
      />

      {/* Modal content */}
      <div
        className="relative z-10 bg-background-secondary w-5xl"
        data-testid="modal-content"
      >
        {props.children}
      </div>
    </div>
  );
}
