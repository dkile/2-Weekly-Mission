import useModal from "@/hooks/common/use-modal";
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  createContext,
  useContext,
} from "react";
import Icon from "./icon/Icon";

const ModalContext = createContext<RefObject<HTMLDialogElement> | null>(null);
const ModalActionContext = createContext({ open: () => {}, close: () => {} });

export default function Modal({ children }: PropsWithChildren) {
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

  const handleClickCloseButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    close();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClickBackdrop}
      onKeyUp={() => {}}
      className="overflow-hidden rounded-[1.6rem]"
    >
      <div className="relative w-fit bg-u-white px-[4rem] py-[3.2rem]">
        <button
          type="button"
          onClick={handleClickCloseButton}
          className="absolute right-[1.6rem] top-[1.6rem] "
        >
          <Icon name="close" type="img" className="h-[2.4rem] w-[2.4rem]" />
        </button>
        {children}
      </div>
    </dialog>
  );
}

Modal.Trigger = Trigger;
Modal.Content = Content;
