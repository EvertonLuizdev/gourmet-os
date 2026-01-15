import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Utensils, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp
} from "lucide-react";
import { Button } from "../components/Button";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

// Tipagem dos dados do gráfico
interface RevenueData {
  name: string;
  total: number;
}

// TODO: Trocar por dados vindos da API (Backend)
const MOCK_DATA: RevenueData[] = [
  { name: 'Seg', total: 1200 },
  { name: 'Ter', total: 1800 },
  { name: 'Qua', total: 1400 },
  { name: 'Qui', total: 2400 },
  { name: 'Sex', total: 3500 },
  { name: 'Sáb', total: 4800 },
  { name: 'Dom', total: 3100 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Cabeçalho e Ações */}
      <div className="flex items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h2>
            <p className="text-slate-500">Visão geral do desempenho.</p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Baixar Relatório</Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white">
                 Atualizar
            </Button>
        </div>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Faturamento */}
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Receita Total</span>
                <DollarSign className="h-4 w-4 text-orange-600" />
            </div>
            <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-900">R$ 12.450,90</span>
                <p className="text-xs text-green-600 flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" /> +12% vs mês passado
                </p>
            </div>
        </div>

        {/* Pedidos */}
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Pedidos Hoje</span>
                <ShoppingBag className="h-4 w-4 text-blue-600" />
            </div>
            <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-900">+56</span>
                <p className="text-xs text-slate-500">4 ativos agora</p>
            </div>
        </div>

        {/* Clientes */}
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Clientes</span>
                <Users className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-900">2.345</span>
                <p className="text-xs text-red-600 flex items-center gap-1">
                    <ArrowDownRight className="h-3 w-3" /> -2% vs mês passado
                </p>
            </div>
        </div>

        {/* Ticket Médio */}
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">Ticket Médio</span>
                <Utensils className="h-4 w-4 text-purple-600" />
            </div>
            <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-900">R$ 84,32</span>
                <p className="text-xs text-slate-500">Por mesa</p>
            </div>
        </div>
      </div>

      {/* Gráficos e Listas */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        
        {/* Gráfico de Receita (Ocupa a maior parte) */}
        <div className="lg:col-span-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="mb-6">
                <h3 className="font-semibold text-slate-900">Receita Semanal</h3>
            </div>
            
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MOCK_DATA}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={12} />
                        <YAxis axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={12} tickFormatter={(val) => `R$${val}`} />
                        <Tooltip cursor={{ fill: '#f1f5f9' }} />
                        <Bar dataKey="total" fill="#ea580c" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Lista de Últimos Pedidos */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-slate-900">Últimos Pedidos</h3>
                <TrendingUp className="h-4 w-4 text-slate-400" />
            </div>

            <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">M1</div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Mesa 01</p>
                            <p className="text-xs text-slate-500">Filé à Parmegiana</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Pago</span>
                </div>

                {/* Item 2 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">M4</div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Mesa 04</p>
                            <p className="text-xs text-slate-500">2x Coca-Cola</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Cozinha</span>
                </div>

                 {/* Item 3 */}
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold">D</div>
                        <div>
                            <p className="text-sm font-medium text-slate-900">Delivery #102</p>
                            <p className="text-xs text-slate-500">Burger Gourmet</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Enviado</span>
                </div>
            </div>
            
            <Button variant="ghost" className="w-full mt-4 text-xs">Ver todos</Button>
        </div>

      </div>
    </div>
  );
}