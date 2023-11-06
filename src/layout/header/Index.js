import { stickyNav } from "@/src/utils";
import { useEffect } from "react";
import HeaderComponent from "./Header";
const HeaderComponentHolder = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  return <HeaderComponent />;
};
export default HeaderComponentHolder;
