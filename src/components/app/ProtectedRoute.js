import { setToken } from "@/app/axios/Api";
import { getCookie } from "@/app/axios/CookieConfig";
import { MyContext } from "@/context/MyContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isLogin, setIsLogin } = useContext(MyContext);

  useEffect(() => {
    const checkLogin = () => {
      const accessToken = getCookie("access_token");

      if (accessToken || accessToken !== null) {
        setToken("access_token");
        setIsLogin(true);
        return;
      } else {
        setIsLogin(false);
        router.push("/login");
      }
    };

    checkLogin();
  });

  if (isLogin) {
    return children;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <h1 className="font-semibold text-3xl">Loading...</h1>
    </div>
  );
}
