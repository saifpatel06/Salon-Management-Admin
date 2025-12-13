import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function withAuth(Component) {
  return function ProtectedRoute(props) {
    const router = useRouter();

    useEffect(() => {
      const user = localStorage.getItem('salonAdminUser');
      if (!user) {
        router.push('/login');
      }
    }, []);

    return <Component {...props} />;
  };
}