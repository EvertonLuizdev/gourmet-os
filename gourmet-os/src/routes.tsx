import { createBrowserRouter } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './pages/Dashboard';
import { Menu } from './pages/Menu';
import { Orders } from './pages/Orders';
import { Settings } from './pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  
  // ROTAS PROTEGIDAS (DENTRO DO PAINEL)
  {
    path: '/',
    element: <AppLayout />, // O Layout envolve tudo que está "children"
    children: [
        {
            path: '/admin',
            element: <Dashboard />
        },
        {
            path: '/orders',
            element: <Orders />
        },
        {
            path: '/menu',
            element: <Menu />
        },
        {
            path: '/settings',
            element: <Settings />
        }
    ]
  },

  // Rotas Externas (sem layout de admin)
  {
      path: '/pos',
      element: <div className="p-4 bg-orange-100 h-screen"><h1>PVD Garçom</h1></div>,
  },
  {
      path: '/kitchen',
      element: <div className="p-4 bg-slate-800 text-white h-screen"><h1>Cozinha (KDS)</h1></div>
  }
]);