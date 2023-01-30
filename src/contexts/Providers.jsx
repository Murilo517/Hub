import { createContext, useState } from "react";

export const ProvidersContext = createContext({});

export const ProvidersProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <ProvidersContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </ProvidersContext.Provider>
  );
};
