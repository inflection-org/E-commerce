"use client";
import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie } from "../app/axios/CookieConfig";
import { useRouter } from "next/navigation";
import { instance, setToken } from "@/app/axios/Api";

// Create the context
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [myCart, setMyCart] = useState([]);
  const [myAddress, setMyAddress] = useState([]);
  const [categories, setCategories] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const accessToken = getCookie("access_token");
    // const refreshToken = getCookie('refresh_token');

    if (accessToken && accessToken !== null) {
      setToken("access_token");
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await instance.get("/categories/list");
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  //   Renew Token
  const renewToken = async () => {
    setToken("refresh_token");
    try {
      const { data } = await instance.get("/users/renew_token");
      const access_token = data.access_token;
      setCookie("access_token", access_token);
      setToken("access_token");
      setIsLogin(true);
    } catch (err) {
      console.log(err);
      setIsLogin(false);
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      const accessToken = getCookie("access_token");
      const refreshToken = getCookie("refresh_token");

      if (accessToken || accessToken !== null) {
        return;
      }

      if (refreshToken && refreshToken !== null) {
        renewToken();
        return;
      }
    };
    const loginInterval = setInterval(checkLogin, 1000);

    if (isLogin) {
      fetchMyCart();
      fetchMyProfile();
      fetchMyAddress();
    }
    return () => clearInterval(loginInterval);
  }, [isLogin, router]);

  //   My Cart
  const fetchMyCart = async () => {
    try {
      const { data } = await instance.get("/carts/my");
      setMyCart(data);
    } catch (err) {
      console.log(err);
    }
  };

  // My Profile
  const fetchMyProfile = async () => {
    try {
      const { data } = await instance.get("/users/profiles/my");
      // console.log(data);
      setProfile(data);
    } catch (err) {
      console.log(err);
    }
  };

  //   My Address
  const fetchMyAddress = async () => {
    try {
      const { data } = await instance.get("/address/my");
      // console.log(data);
      setMyAddress(data);
    } catch (err) {
      console.log(err);
    }
  };

  // Provide the state and any other values/functions to the children
  return (
    <MyContext.Provider
      value={{
        isLogin,
        setIsLogin,
        myCart,
        setMyCart,
        profile,
        myAddress,
        categories,
        setMyAddress,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// Export the context and provider
export { MyContext, MyContextProvider };
