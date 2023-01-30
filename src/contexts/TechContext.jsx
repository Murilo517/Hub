import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {

  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false)

  const { count, setCount } = useContext(UserContext);

  const createTech = async (body) => {
    const token = localStorage.getItem("Token");

    try {
      await api.post("/users/techs", body, {
        headers: { Authorization: `Bearer: ${token}` },
      });

      toast.success("Tecnologia Criada", {
        autoClose: 1000,
        theme: "dark",
      });
      setCount(count + 1);
      setOpen(false);
    } catch (err) {
      toast.error("Algo de errado aconteceu", {
        theme: "dark",
      });
    }
  };

  const deleteTech = async (id) => {
    const token = localStorage.getItem("Token");

    try {
      await api.delete(`/users/techs/${id}`, {
        headers: { Authorization: `Bearer: ${token}` },
      });
      toast.success("Tecnologia Deletada com sucesso!", {
        autoClose: 1000,
        theme: "dark",
      });
      setCount(count + 1);
    } catch (error) {
      toast.error("Algo de errado aconteceu", {
        theme: "dark",
      });
    }
  };

  const editTech = async (id, data) => {
    
    const token = localStorage.getItem("Token");

    try {
      api.defaults.headers.Authorization = `Bearer ${token}`
      await api.put(`/users/techs/${id}`, data);
      toast.success("Tecnologia Alterada com sucesso!", {
        autoClose: 1000,
        theme: "dark",
      });
      setCount(count + 1);
      setOpenEdit(false);
    } catch (error) {
      toast.error("Algo de errado aconteceu", {
        theme: "dark",
      });
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        deleteTech,
        open,
        setOpen,
        openEdit,
        setOpenEdit,
        editTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
