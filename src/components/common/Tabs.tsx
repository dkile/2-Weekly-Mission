import {
	ComponentPropsWithoutRef,
	MouseEvent,
	PropsWithChildren,
	createContext,
	useContext,
	useState,
} from "react";

export const TabContext = createContext({
	current: "",
	setCurrent: (id: string) => {},
});

interface RootProps extends PropsWithChildren {
	defaultID: string;
	className?: string;
}
function Tabs({ defaultID, className, children }: RootProps) {
	const [current, setCurrent] = useState(defaultID);

	return (
		<TabContext.Provider
			value={{ current, setCurrent: (id: string) => setCurrent(id) }}
		>
			<div className={className}>{children}</div>
		</TabContext.Provider>
	);
}

function List({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
	return <ul {...props}>{children}</ul>;
}

interface TriggerProps {
	id: string;
	className?: string;
	onClickTrigger?: (id: string) => void;
}
function Trigger({
	id,
	className,
	onClickTrigger = () => {},
	children,
}: PropsWithChildren<TriggerProps>) {
	const { current, setCurrent } = useContext(TabContext);

	const handleClickTrigger = (e: MouseEvent<HTMLButtonElement>) => {
		setCurrent(id);
		onClickTrigger(id);
	};

	return (
		<li>
			<button
				type="button"
				className={className}
				value={id}
				onClick={handleClickTrigger}
				data-on={id === current}
			>
				{children}
			</button>
		</li>
	);
}

interface ContentProps {
	id: string;
	className?: string;
}
function Content({ id, className, children }: PropsWithChildren<ContentProps>) {
	const { current } = useContext(TabContext);

	return current === id ? (
		<div className={className} data-on={id === current}>
			{children}
		</div>
	) : null;
}

export default Object.assign(Tabs, {
	List,
	Trigger,
	Content,
});
