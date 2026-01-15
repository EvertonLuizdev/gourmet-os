import { createBrowserRouter } from 'react-router-dom';
import { SignIn } from './pages/SignIn';
import { AppLayout } from './layouts/AppLayout';

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
            element: (
                // Conteúdo da Dashboard (Temporário, depois criamos um arquivo Dashboard.tsx)
                <div className="grid grid-cols-3 gap-4">
                     <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="text-slate-500 text-sm font-medium">Faturamento do Dia</h3>
                        <p className="text-3xl font-bold text-slate-900 mt-2">R$ 2.450,00</p>
                        <span className="text-green-600 text-xs font-medium">+12% que ontem</span>
                     </div>
                     <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="text-slate-500 text-sm font-medium">Pedidos Ativos</h3>
                        <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                        <span className="text-orange-600 text-xs font-medium">4 na cozinha</span>
                     </div>
                     <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <h3 className="text-slate-500 text-sm font-medium">Ticket Médio</h3>
                        <p className="text-3xl font-bold text-slate-900 mt-2">R$ 84,90</p>
                     </div>
                </div>
            )
        },
        {
            path: '/orders',
            element: <h1 className="text-2xl font-bold text-slate-800">Tela de Pedidos (Em construção)</h1>
        },
        {
            path: '/menu',
            element: <h1 className="text-2xl font-bold text-slate-800">Tela de Cardápio (Em construção)</h1>
        },
        {
            path: '/settings',
            element: <h1 className="text-2xl font-bold text-slate-800">Tela de Configurações (Em construção)</h1>
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