import { useClickOutside } from "@/hooks/common/use-click-outside";
import { useToggle } from "@/hooks/common/use-toggle";
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  createContext,
  useContext,
} from "react";

export const PopoverContext = createContext(false);
export const PopoverActionContext = createContext(() => {});

interface RootProps extends ComponentPropsWithoutRef<"div"> {
  closeWhenClickOutside?: boolean;
  closeWhenPressEscape?: boolean;
}
export default function Popover({
  children,
  closeWhenClickOutside,
  ...props
}: RootProps) {
  const [popped, toggle] = useToggle();
  const clickOutsideRef = useClickOutside<HTMLDivElement>(
    () => {
      toggle();
    },
    { dispatchCondition: popped },
  );

  return (
    <PopoverContext.Provider value={popped}>
      <PopoverActionContext.Provider value={toggle}>
        <div
          ref={(node) => {
            if (node && closeWhenClickOutside) clickOutsideRef.current = node;
            else clickOutsideRef.current = null;
          }}
          {...props}
        >
          {children}
        </div>
      </PopoverActionContext.Provider>
    </PopoverContext.Provider>
  );
}

function Trigger({
  onClick,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  const toggle = useContext(PopoverActionContext);

  const handleClickTrigger = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggle();
    if (onClick) onClick(e);
  };

  return (
    <button type="button" onClick={handleClickTrigger} {...props}>
      {children}
    </button>
  );
}

function Content({ children, ...props }: ComponentPropsWithoutRef<"div">) {
  const popped = useContext(PopoverContext);

  return popped ? <div {...props}>{children}</div> : null;
}

Popover.Trigger = Trigger;
Popover.Content = Content;
