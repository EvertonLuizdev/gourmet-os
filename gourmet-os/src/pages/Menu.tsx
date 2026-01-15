import { 
  PlusCircle, 
  Search, 
  Filter, 
  Edit, 
  Trash,
  UtensilsCrossed
} from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  status: 'active' | 'draft';
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Filé à Parmegiana', category: 'Pratos Principais', price: 58.90, status: 'active' },
  { id: '2', name: 'Coca-Cola 350ml', category: 'Bebidas', price: 8.00, status: 'active' },
  { id: '3', name: 'Batata Frita Especial', category: 'Porções', price: 32.50, status: 'active' },
  { id: '4', name: 'Suco de Laranja', category: 'Bebidas', price: 12.00, status: 'draft' },
  { id: '5', name: 'Pudim de Leite', category: 'Sobremesas', price: 14.00, status: 'active' },
  { id: '6', name: 'Feijoada Completa', category: 'Pratos Principais', price: 74.90, status: 'active' },
];

export function Menu() {
  return (
    <div className="space-y-6">
      
      {/* --- CABEÇALHO --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            {/* Padronizado text-2xl */}
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Cardápio</h2>
            <p className="text-sm text-slate-500">Gerencie seus pratos, preços e categorias.</p>
        </div>
        <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2 text-xs font-bold h-9">
            <PlusCircle className="h-3.5 w-3.5" />
            Novo Prato
        </Button>
      </div>

      {/* --- FILTROS --- */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
                placeholder="Buscar por nome do prato..." 
                className="pl-9 h-9 text-sm bg-slate-50 border-slate-200 focus:bg-white"
            />
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2 text-slate-600 h-9 text-xs">
            <Filter className="h-3.5 w-3.5" />
            Filtros
        </Button>
      </div>

      {/* --- TABELA COMPACTA --- */}
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
        <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 font-bold border-b border-slate-200">
                <tr>
                    {/* Cabeçalho Uppercase e pequeno (igual Kanban) */}
                    <th className="px-4 py-3 text-xs uppercase tracking-wide">Nome do Prato</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wide">Categoria</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wide">Preço</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wide">Status</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wide text-right">Ações</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {PRODUCTS.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                        <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded bg-orange-50 flex items-center justify-center text-orange-600">
                                    <UtensilsCrossed className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-medium text-slate-900">{product.name}</span>
                            </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-slate-500">{product.category}</td>
                        <td className="px-4 py-3 text-sm font-medium text-slate-900">
                            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </td>
                        <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                                product.status === 'active' 
                                ? 'bg-green-50 text-green-700 border border-green-100' 
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}>
                                {product.status === 'active' ? 'Ativo' : 'Rascunho'}
                            </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
                                    <Edit className="h-3.5 w-3.5" />
                                </button>
                                <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                    <Trash className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}