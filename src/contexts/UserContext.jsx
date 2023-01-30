import { useState } from "react";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("Token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get("/profile", {
          headers: { Authorization: `Bearer: ${token}` },
        });

        setUser(data);

        navigate("/dashboard");
      } catch (error) {
        localStorage.removeItem("Token");
        localStorage.removeItem("userId");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [count]);

  const login = async (body) => {
    try {
      setLoading(true);

      const response = await api.post("/sessions", body);

      const { token, user: userResponse } = response.data;

      setUser(userResponse);

      localStorage.setItem("Token", token);

      localStorage.setItem("userId", user.id);

      toast.success("Login efetuado com sucesso!", {
        autoClose: 1000,
        theme: "dark",
      });

      navigate("/dashboard");
    } catch (err) {
      toast.error("Confira seus dados!", {
        theme: "dark",
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (body) => {
    try {
      await api.post("/users", body);

      toast.success("Conta criada com sucesso!", {
        autoClose: 1000,
        theme: "dark",
      });

      navigate("/");
    } catch (err) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 2000,
        theme: "dark",
      });
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        login,
        user,
        loading,
        registerUser,
        count,
        setCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
