import { useState, useEffect } from "react";

export function useCachedUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const cachedUser = localStorage.getItem("cachedUser");
    console.log("CACHED USER", cachedUser);
    setUser(cachedUser);
  }, []);

  function removeCachedUser() {
    localStorage.removeItem("cachedUser");
    setUser(null);
  }
  function addCachedUser(user) {
    localStorage.setItem("cachedUser", user);
  }

  return { user, setUser, removeCachedUser, addCachedUser };
}
