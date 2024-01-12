import { useState } from "react";

export const useToggle = (initial = false) => {
	const [on, setOn] = useState(initial);

	const toggle = () => {
		setOn((on) => !on);
	};

	return [on, toggle] as const;
};
