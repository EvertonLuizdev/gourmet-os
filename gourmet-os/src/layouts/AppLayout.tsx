import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  UtensilsCrossed, 
  ClipboardList, 
  Settings, 
  LogOut, 
  ChefHat,
  Bell
} from "lucide-react";

export function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  function isActive(path: string) {
    return location.pathname === path 
      ? "bg-orange-50 text-orange-600" 
      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900";
  }

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      
      {/* Sidebar (fixa) */}
      <aside className="w-64 flex-none bg-white border-r border-slate-200 flex flex-col justify-between p-6 z-10">
        
        <div>
            <div className="flex items-center gap-2 mb-10 text-slate-900">
                <div className="p-2 bg-orange-100 rounded-lg">
                    <ChefHat className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-xl font-bold tracking-tight">GourmetOS</span>
            </div>

            <nav className="space-y-2">
                <button onClick={() => navigate('/admin')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive('/admin')}`}>
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                </button>
                <button onClick={() => navigate('/orders')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive('/orders')}`}>
                    <ClipboardList className="h-4 w-4" />
                    Pedidos
                </button>
                <button onClick={() => navigate('/menu')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive('/menu')}`}>
                    <UtensilsCrossed className="h-4 w-4" />
                    Cardápio
                </button>
                <button onClick={() => navigate('/settings')} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive('/settings')}`}>
                    <Settings className="h-4 w-4" />
                    Configurações
                </button>
            </nav>
        </div>

        <button onClick={() => navigate('/')} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="h-4 w-4" />
            Sair do Sistema
        </button>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Header Fixo no Topo do Main */}
        <header className="h-16 flex-none border-b border-slate-200 bg-white px-8 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-slate-900">
                {location.pathname === '/admin' && 'Visão Geral'}
                {location.pathname === '/orders' && 'Pedidos em Andamento'}
                {location.pathname === '/menu' && 'Gerenciar Cardápio'}
                {location.pathname === '/settings' && 'Ajustes do Sistema'}
            </h1>

            <div className="flex items-center gap-4">
                <button className="relative p-2 text-slate-400 hover:text-slate-600">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-orange-500 rounded-full border-2 border-white"></span>
                </button>
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200">
                     <span className="text-xs font-bold text-orange-700 leading-none">EL</span>
                </div>
            </div>
        </header>

        {/* Área de Scroll do Conteúdo */}
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
            <Outlet />
        </div>

      </main>
    </div>
  );
}