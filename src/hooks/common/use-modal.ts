import { useRef } from "react";

export default function useModal() {
  const ref = useRef<HTMLDialogElement>(null);

  const open = () => {
    ref.current?.showModal();
  };

  const close = () => {
    ref.current?.close();
  };

  const toggle = () => {
    if (!ref.current) return;

    if (ref.current.open) close();
    else open();
  };

  return { dialogRef: ref, open, close, toggle };
}
