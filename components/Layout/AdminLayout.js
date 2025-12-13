import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

export default function AdminLayout({ children, pageTitle }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('salonAdminUser');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('salonAdminUser');
    router.push('/login');
  };

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <Head>
        <title>{pageTitle ? `${pageTitle} - Salon Admin` : 'Salon Admin'}</title>
      </Head>

      <div className="d-flex" style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <div
          className="bg-dark text-white"
          style={{
            width: sidebarOpen ? '250px' : '0',
            transition: 'width 0.3s',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          <div className="p-3">
            <h4 className="mb-4">✂️ Salon Admin</h4>

            <nav>
              <Link
                href="/admin/dashboard"
                className={`btn w-100 text-start mb-2 ${
                  isActive('/admin/dashboard')
                    ? 'btn-primary'
                    : 'btn-outline-light'
                }`}
              >
                📊 Dashboard
              </Link>

              <Link
                href="/admin/barbers"
                className={`btn w-100 text-start mb-2 ${
                  isActive('/admin/barbers') ? 'btn-primary' : 'btn-outline-light'
                }`}
              >
                👨‍💼 Barbers
              </Link>

              <Link
                href="/admin/services"
                className={`btn w-100 text-start mb-2 ${
                  isActive('/admin/services')
                    ? 'btn-primary'
                    : 'btn-outline-light'
                }`}
              >
                ✂️ Services
              </Link>

              <Link
                href="/admin/appointments"
                className={`btn w-100 text-start mb-2 ${
                  isActive('/admin/appointments')
                    ? 'btn-primary'
                    : 'btn-outline-light'
                }`}
              >
                📅 Appointments
              </Link>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column">
          {/* Header */}
          <header className="bg-white shadow-sm p-3 d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-outline-secondary"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                ☰
              </button>
              <h5 className="mb-0">{pageTitle}</h5>
            </div>

            <div className="d-flex align-items-center gap-3">
              <span className="text-muted">
                Welcome, {currentUser?.name || 'Admin'}
              </span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="flex-grow-1 p-4 bg-light">{children}</main>
        </div>
      </div>
    </>
  );
}