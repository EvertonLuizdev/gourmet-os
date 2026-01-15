import { 
  PlusCircle, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Edit, 
  Trash,
  UtensilsCrossed
} from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

// Interface do Produto
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  status: 'active' | 'draft';
  image?: string;
}

// Dados de Exemplo (Mock)
const PRODUCTS: Product[] = [
  { id: '1', name: 'Filé à Parmegiana', category: 'Pratos Principais', price: 58.90, status: 'active' },
  { id: '2', name: 'Coca-Cola 350ml', category: 'Bebidas', price: 8.00, status: 'active' },
  { id: '3', name: 'Batata Frita Especial', category: 'Porções', price: 32.50, status: 'active' },
  { id: '4', name: 'Suco de Laranja', category: 'Bebidas', price: 12.00, status: 'draft' },
  { id: '5', name: 'Pudim de Leite', category: 'Sobremesas', price: 14.00, status: 'active' },
  { id: '6', name: 'Feijoada', category: 'Pratos Principais', price: 74.90, status: 'active' },
];

export function Menu() {
  return (
    <div className="space-y-6">
      
      {/* --- CABEÇALHO --- */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Cardápio</h2>
            <p className="text-slate-500">Gerencie seus pratos, preços e categorias.</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            Novo Prato
        </Button>
      </div>

      {/* --- FILTROS E BUSCA --- */}
      <div className="flex items-center gap-2 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
                placeholder="Buscar por nome do prato..." 
                className="pl-10 bg-slate-50 border-slate-200 focus:bg-white"
            />
        </div>
        <Button variant="outline" className="flex items-center gap-2 text-slate-600">
            <Filter className="h-4 w-4" />
            Filtros
        </Button>
      </div>

      {/* --- TABELA DE PRODUTOS --- */}
      <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
        <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                <tr>
                    <th className="px-6 py-4">Nome do Prato</th>
                    <th className="px-6 py-4">Categoria</th>
                    <th className="px-6 py-4">Preço</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Ações</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {PRODUCTS.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                        {/* Coluna Nome */}
                        <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-3">
                            <div className="h-8 w-8 rounded bg-orange-100 flex items-center justify-center text-orange-600">
                                <UtensilsCrossed className="h-4 w-4" />
                            </div>
                            {product.name}
                        </td>
                        
                        {/* Coluna Categoria */}
                        <td className="px-6 py-4 text-slate-600">
                            {product.category}
                        </td>
                        
                        {/* Coluna Preço */}
                        <td className="px-6 py-4 font-medium text-slate-900">
                            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </td>
                        
                        {/* Coluna Status (Badge) */}
                        <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                product.status === 'active' 
                                ? 'bg-green-50 text-green-700 border border-green-100' 
                                : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}>
                                {product.status === 'active' ? 'Ativo' : 'Rascunho'}
                            </span>
                        </td>
                        
                        {/* Coluna Ações */}
                        <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Editar">
                                    <Edit className="h-4 w-4" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Excluir">
                                    <Trash className="h-4 w-4" />
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