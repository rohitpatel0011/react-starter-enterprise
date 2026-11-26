import { useAuth } from './hooks/useAuth';
import { LoginForm } from './components/LoginForm';

export const AuthPage = () => {
  const { user, isLoading, error, login, logout } = useAuth();

  return (
    <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center' }}>
      {user ? (
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome, {user.name}!</h2>
          <p>{user.email}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm onSubmit={login} isLoading={isLoading} error={error} />
      )}
    </div>
  );
};
