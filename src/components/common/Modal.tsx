import useModal from "@/hooks/common/use-modal";
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  createContext,
  useContext,
} from "react";

const ModalContext = createContext<RefObject<HTMLDialogElement> | null>(null);
const ModalActionContext = createContext({ open: () => {}, close: () => {} });

function Modal({ children }: PropsWithChildren) {
  const { dialogRef, open, close } = useModal();

  return (
    <ModalContext.Provider value={dialogRef}>
      <ModalActionContext.Provider value={{ open, close }}>
        {children}
      </ModalActionContext.Provider>
    </ModalContext.Provider>
  );
}

function Trigger({
  onClick = () => {},
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  const { open } = useContext(ModalActionContext);

  const handleClickTrigger = (e: MouseEvent<HTMLButtonElement>) => {
    open();
    onClick(e);
  };

  return (
    <button type="button" onClick={handleClickTrigger} {...props}>
      {children}
    </button>
  );
}

function Content({ children, ...props }: ComponentPropsWithoutRef<"dialog">) {
  const dialogRef = useContext(ModalContext);
  const { close } = useContext(ModalActionContext);

  const handleClickBackdrop = (e: MouseEvent<HTMLDialogElement>) => {
    if ((e.target as HTMLElement).nodeName === "DIALOG") close();
  };

  return (
    <dialog ref={dialogRef} onClick={handleClickBackdrop} {...props}>
      <div className="h-full w-full">{children}</div>
    </dialog>
  );
}

export default Object.assign(Modal, {
  Trigger,
  Content,
});
