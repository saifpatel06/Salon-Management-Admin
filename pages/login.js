import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Redirect if already logged in
    const user = localStorage.getItem('salonAdminUser');
    if (user) {
      router.push('/admin/dashboard');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Fake authentication
      const user = { name: 'Admin User', email };
      localStorage.setItem('salonAdminUser', JSON.stringify(user));
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">✂️ Salon Admin</h2>
            <p className="text-muted">Sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="admin@salon.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Sign In
            </button>
            
            <div className="text-center">
              <span className="text-muted">Don't have an account? </span>
              <Link href="/register" className="text-decoration-none">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}