import { useState } from 'react';
import type { User } from '../types';
import { loginApi } from '../services/authService';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await loginApi(email, password);
      setUser(userData);
    } catch {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => setUser(null);

  return { user, isLoading, error, login, logout };
};
