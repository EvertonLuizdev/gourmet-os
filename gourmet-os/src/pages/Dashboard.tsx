import { 
  DollarSign, 
  ShoppingBag, 
  Users, 
  Utensils, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp,
  FileText, // Ícone novo para o relatório
  RefreshCcw // Ícone novo para atualizar
} from "lucide-react";
import { Button } from "../components/Button";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

interface RevenueData {
  name: string;
  total: number;
}

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
      
      {/* --- Cabeçalho --- */}
      <div className="flex items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Dashboard</h2>
            <p className="text-sm text-slate-500">Visão geral do desempenho.</p>
        </div>
        <div className="flex items-center gap-2">
            {/* BOTÃO 1: Borda Laranjinha (Estilo Outline Personalizado) */}
            <Button 
                variant="ghost" // Usamos ghost base para tirar o fundo cinza padrão
                className="h-9 text-xs font-bold border border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700 gap-2 bg-white"
            >
                <FileText className="h-3.5 w-3.5" />
                Baixar Relatório
            </Button>
            
            {/* BOTÃO 2: Laranja Sólido (Padronizado) */}
            <Button 
                className="h-9 text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white gap-2"
            >
                 <RefreshCcw className="h-3.5 w-3.5" />
                 Atualizar
            </Button>
        </div>
      </div>

      {/* --- Cards de Métricas (KPIs) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Faturamento */}
        <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Receita Total</span>
                <DollarSign className="h-4 w-4 text-orange-600" />
            </div>
            <div>
                <span className="text-2xl font-bold text-slate-900">R$ 12.450,90</span>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-0.5">
                    <ArrowUpRight className="h-3 w-3" /> +12% vs mês passado
                </p>
            </div>
        </div>

        {/* Pedidos */}
        <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Pedidos Hoje</span>
                <ShoppingBag className="h-4 w-4 text-blue-600" />
            </div>
            <div>
                <span className="text-2xl font-bold text-slate-900">+56</span>
                <p className="text-xs text-slate-500 mt-0.5">4 ativos agora</p>
            </div>
        </div>

        {/* Clientes */}
        <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Clientes</span>
                <Users className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
                <span className="text-2xl font-bold text-slate-900">2.345</span>
                <p className="text-xs text-red-600 flex items-center gap-1 mt-0.5">
                    <ArrowDownRight className="h-3 w-3" /> -2% vs mês passado
                </p>
            </div>
        </div>

        {/* Ticket Médio */}
        <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm space-y-1">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500">Ticket Médio</span>
                <Utensils className="h-4 w-4 text-purple-600" />
            </div>
            <div>
                <span className="text-2xl font-bold text-slate-900">R$ 84,32</span>
                <p className="text-xs text-slate-500 mt-0.5">Por mesa</p>
            </div>
        </div>
      </div>

      {/* --- Gráficos e Listas --- */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
        
        {/* Gráfico */}
        <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="mb-4">
                <h3 className="font-bold text-slate-900 text-sm">Receita Semanal</h3>
            </div>
            
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MOCK_DATA} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={10} dy={10} />
                        <YAxis axisLine={false} tickLine={false} stroke="#94a3b8" fontSize={10} tickFormatter={(val) => `R$${val}`} />
                        <Tooltip 
                            cursor={{ fill: '#f8fafc' }} 
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '12px' }}
                        />
                        <Bar dataKey="total" fill="#ea580c" radius={[4, 4, 0, 0]} barSize={32} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* Lista Compacta */}
        <div className="lg:col-span-3 bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 text-sm">Últimos Pedidos</h3>
                <TrendingUp className="h-4 w-4 text-slate-400" />
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-bold">M1</div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Mesa 01</p>
                            <p className="text-xs text-slate-500">Filé à Parmegiana</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-green-50 text-green-700 border border-green-100">Pago</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">M4</div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Mesa 04</p>
                            <p className="text-xs text-slate-500">2x Coca-Cola</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-yellow-50 text-yellow-700 border border-yellow-100">Cozinha</span>
                </div>

                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold">D</div>
                        <div>
                            <p className="text-sm font-bold text-slate-900">Delivery #102</p>
                            <p className="text-xs text-slate-500">Burger Gourmet</p>
                        </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-50 text-blue-700 border border-blue-100">Enviado</span>
                </div>
            </div>
            
            <Button variant="ghost" className="w-full mt-4 text-xs h-8 text-slate-500 hover:text-slate-900">Ver todos</Button>
        </div>

      </div>
    </div>
  );
}