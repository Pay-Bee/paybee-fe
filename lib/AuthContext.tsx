"use client";

import { createContext, useContext, useEffect, useState } from "react";
import api from "./api";
import type { UserProfile } from "./types";

interface AuthCtx {
  user: UserProfile | null;
  authLoading: boolean;
  setUser: (u: UserProfile | null) => void;
}

const AuthContext = createContext<AuthCtx>({
  user: null,
  authLoading: true,
  setUser: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    api
      .get<{ user: UserProfile }>("/auth/me")
      .then((r) => setUser(r.data.user))
      .catch(() => setUser(null))
      .finally(() => setAuthLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, authLoading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
