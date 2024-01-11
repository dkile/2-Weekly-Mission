import { useToggle } from "@/hooks/common/use-toggle";

export default function usePasswordInput() {
  const [passwordVisible, passwordToggle] = useToggle();

  const handleClickPasswordToggle = () => {
    passwordToggle();
  };

  const type = passwordVisible ? "text" : "password";

  return { passwordVisible, handleClickPasswordToggle, type };
}
