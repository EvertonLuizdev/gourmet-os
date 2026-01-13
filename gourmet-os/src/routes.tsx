import { createBrowserRouter } from 'react-router-dom';
import { SignIn } from './pages/SignIn'; 

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />, 
  },
  {
    path: '/admin',
    element: (
      <div className="p-8 h-screen bg-slate-50">
        <h1 className="text-2xl font-bold mb-4">Dashboard do Gerente</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {/* Cards de Exemplo para quando você entrar */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-gray-500 text-sm">Faturamento Hoje</h3>
                <p className="text-2xl font-bold text-green-600">R$ 1.250,00</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-gray-500 text-sm">Pedidos Abertos</h3>
                <p className="text-2xl font-bold text-blue-600">8 Mesas</p>
            </div>
        </div>
      </div>
    )
  },
  {
      path: '/pos',
      element: <div className="p-4 bg-orange-100 h-screen"><h1>Área do Garçom (PVD)</h1></div>,
  },
  {
      path: '/kitchen',
      element: <div className="p-4 bg-slate-800 text-white h-screen"><h1>Área da Cozinha</h1></div>
  },
]);