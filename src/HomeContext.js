import React, { useState, createContext, useEffect } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const item = await response.json();
      /*const [item] = data;*/
      setPost(item);
    }
    fetchData();
  }, []);
  return <HomeContext.Provider value={[post]}>{children}</HomeContext.Provider>;
};
