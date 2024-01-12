import { TabContext } from "@/components/common/Tabs";
import { useContext } from "react";

export default function useTabs() {
	const { current: currentTabID } = useContext(TabContext);

	return currentTabID;
}
