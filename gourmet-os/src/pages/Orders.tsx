import { useState } from "react";
import { Clock, Flame, ClipboardList, CheckCircle2, GripVertical } from "lucide-react";
import { Button } from "../components/Button";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
}

type OrderStatus = 'pending' | 'preparing' | 'ready';

interface Order {
  id: string;
  table: string;
  status: OrderStatus;
  items: OrderItem[];
  timeElapsed: string;
}

const INITIAL_ORDERS: Order[] = [
  {
    id: '1', table: 'Mesa 05', status: 'pending', timeElapsed: '2 min',
    items: [{ id: '1', name: 'Hambúrguer Gourmet', quantity: 2 }, { id: '2', name: 'Coca-Cola Zero', quantity: 2 }]
  },
  {
    id: '2', table: 'Delivery #104', status: 'pending', timeElapsed: '5 min',
    items: [{ id: '3', name: 'Pizza Calabresa', quantity: 1 }]
  },
  {
    id: '3', table: 'Mesa 02', status: 'preparing', timeElapsed: '12 min',
    items: [{ id: '4', name: 'Filé à Parmegiana', quantity: 1 }, { id: '5', name: 'Arroz', quantity: 1 }, { id: '6', name: 'Fritas', quantity: 1 }]
  },
  {
    id: '4', table: 'Mesa 08', status: 'ready', timeElapsed: '25 min',
    items: [{ id: '7', name: 'Petit Gâteau', quantity: 2 }]
  },
  {
    id: '5', table: 'Mesa 10', status: 'pending', timeElapsed: '1 min',
    items: [{ id: '8', name: 'Suco de Laranja', quantity: 1 }]
  },
];

const COLUMN_STYLES = {
  pending: {
    title: 'Fila de Espera',
    icon: <ClipboardList className="h-4 w-4" />,
    borderColor: 'border-yellow-400',
    columnBg: 'bg-yellow-50', 
    headerBg: 'bg-yellow-100',
    headerText: 'text-yellow-900',
    iconColor: 'text-yellow-700',
    cardBorder: 'border-l-yellow-400',
    badgeBg: 'bg-yellow-100 text-yellow-800'
  },
  preparing: {
    title: 'Em Preparo',
    icon: <Flame className="h-4 w-4 animate-pulse" />,
    borderColor: 'border-blue-400',
    columnBg: 'bg-blue-50',
    headerBg: 'bg-blue-100',
    headerText: 'text-blue-900',
    iconColor: 'text-blue-700',
    cardBorder: 'border-l-blue-500',
    badgeBg: 'bg-blue-100 text-blue-800'
  },
  ready: {
    title: 'Pronto para Servir',
    icon: <CheckCircle2 className="h-4 w-4" />,
    borderColor: 'border-green-400',
    columnBg: 'bg-green-50',
    headerBg: 'bg-green-100',
    headerText: 'text-green-900',
    iconColor: 'text-green-700',
    cardBorder: 'border-l-green-500',
    badgeBg: 'bg-green-100 text-green-800'
  }
};

export function Orders() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<OrderStatus | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
    const ghost = e.currentTarget.cloneNode(true) as HTMLDivElement;
    ghost.style.opacity = "1";
    ghost.style.transform = "scale(0.9)";
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 20, 20);
    setTimeout(() => document.body.removeChild(ghost), 0);
    setDraggingId(id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, status: OrderStatus) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverColumn(status);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetStatus: OrderStatus) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    if (id) {
        setOrders((prev) => 
            prev.map(order => order.id === id ? { ...order, status: targetStatus } : order)
        );
    }
    setDraggingId(null);
    setDragOverColumn(null);
  };

  const renderColumn = (status: OrderStatus) => {
    const columnOrders = orders.filter(o => o.status === status);
    const styles = COLUMN_STYLES[status];
    const isOver = dragOverColumn === status;
    
    return (
      <div 
        className={`flex flex-col rounded-xl border h-full overflow-hidden transition-all duration-200
            ${styles.borderColor} 
            ${styles.columnBg} 
            ${isOver ? 'ring-4 ring-opacity-50 ring-' + styles.borderColor.split('-')[1] + '-300 brightness-95' : ''}
        `}
        onDragOver={(e) => handleDragOver(e, status)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, status)}
      >
        <div className={`p-3 border-b ${styles.borderColor} ${styles.headerBg} flex items-center justify-between`}>
            <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-wide ${styles.headerText}`}>
                <span className={styles.iconColor}>{styles.icon}</span>
                <h3>{styles.title}</h3>
            </div>
            <span className={`px-2 py-0.5 rounded text-xs font-bold bg-white/50 ${styles.headerText}`}>
                {columnOrders.length}
            </span>
        </div>
        
        <div className="p-3 flex-1 overflow-y-auto space-y-3 min-h-[150px]">
            {columnOrders.map((order) => (
                <div
                    key={order.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, order.id)}
                    className={`bg-white p-3 rounded-lg shadow-sm border-l-4 ${styles.cardBorder} cursor-grab active:cursor-grabbing group hover:shadow-md transition-all
                        ${draggingId === order.id ? 'opacity-40' : ''}
                    `}
                >
                    <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                             <GripVertical className="h-4 w-4 text-slate-300" />
                             <div>
                                 <span className="block font-bold text-base text-slate-800 leading-none">{order.table}</span>
                                 <span className="text-[10px] text-slate-400 font-medium">#{order.id}</span>
                             </div>
                        </div>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 ${styles.badgeBg}`}>
                            <Clock className="h-3 w-3" /> {order.timeElapsed}
                        </span>
                    </div>
                    <ul className="space-y-1 pl-6">
                        {order.items.map(item => (
                            <li key={item.id} className="text-xs text-slate-600 flex items-center gap-2">
                                <span className="font-bold text-slate-900">{item.quantity}x</span> {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            
            {columnOrders.length === 0 && (
                <div className={`h-20 flex items-center justify-center text-${styles.borderColor.split('-')[1]}-400 text-xs font-medium italic border-2 border-dashed ${styles.borderColor} rounded bg-white/30 m-2`}>
                    Vazio
                </div>
            )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]"> 
      <div className="flex items-center justify-between mb-6 flex-none">
        <div>
           <h2 className="text-2xl font-bold tracking-tight text-slate-900">Monitor da Cozinha</h2>
           <p className="text-sm text-slate-500">Gerencie o fluxo de produção.</p>
        </div>
        
        {/* --- BOTÃO PADRONIZADO (Laranja Sólido) --- */}
        <Button 
            className="h-9 text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white gap-2 shadow-sm"
        >
            <Clock className="h-3.5 w-3.5" />
            Histórico do Dia
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 min-h-0">
          {renderColumn('pending')}
          {renderColumn('preparing')}
          {renderColumn('ready')}
      </div>
    </div>
  );
}