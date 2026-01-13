import { createBrowserRouter } from 'react-router-dom';
import { Button } from './components/Button';
import { Input } from './components/Input'; // <--- Nova importação (precisa ter criado o arquivo Input.tsx)

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // Fundo que ocupa a tela toda
      <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
        
        {/* CARD DE LOGIN */}
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            
            {/* Cabeçalho do Card */}
            <div className="p-8 pb-4 text-center">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">GourmetOS</h1>
                <p className="text-sm text-gray-500 mt-2">Entre com suas credenciais</p>
            </div>

            {/* Formulário */}
            <div className="p-8 pt-0 space-y-4">
                
                {/* Campo E-mail */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">E-mail</label>
                    <Input type="email" placeholder="ex: garcom@gourmet.com" />
                </div>
                
                {/* Campo Senha */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Senha</label>
                    <Input type="password" placeholder="******" />
                </div>

                {/* Botão de Entrar */}
                <Button className="w-full" size="lg">
                    Entrar no Sistema
                </Button>

                {/* Link de Esqueci a senha */}
                <div className="text-center pt-2">
                    <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                        Esqueci minha senha
                    </Button>
                </div>

            </div>
        </div>

      </div>
    ),
  },
  {
      path: '/pos',
      element: <div className="p-4 bg-orange-100 h-screen"><h1>Área do Garçom (PVD)</h1></div>,
  },
  {
      path: '/kitchen',
      element: <div className="p-4 bg-slate-800 text-white h-screen"><h1>Área da Cozinha</h1></div>
  },
  {
      path: '/admin',
      element: <div className="p-4 bg-gray-100 h-screen"><h1>Dashboard do Gerente</h1></div>
  },
]);