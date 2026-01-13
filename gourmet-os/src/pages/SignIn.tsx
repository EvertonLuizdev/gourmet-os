import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";
import { ChefHat, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";

export function SignIn() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/admin");
  }

  return (
     // Contêiner principal
    <div className="min-h-screen w-full flex bg-white">
      
      {/* LADO ESQUERDO (FORMULÁRIO) */}
      <div className="flex-1 lg:flex-none lg:w-[480px] xl:w-[600px] flex items-center justify-center p-6 sm:p-12 relative z-10 bg-white">
        
        {/* Fundo decorativo sutil (apenas mobile/telas pequenas para dar textura) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25 lg:hidden pointer-events-none"></div>

        {/* Limita a largura para não esticar demais */}
        <div className="w-full max-w-[400px] space-y-10">
          
          {/* Cabeçalho Centralizado */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-orange-50 mb-2">
              <ChefHat className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              GourmetOS
            </h1>
            <p className="text-slate-500 text-sm md:text-base">
              Painel de controle para restaurantes modernos.
            </p>
          </div>

          {/* Formulário */}
          <div className="space-y-6">
            
            {/* Input E-mail */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">
                E-mail
              </label>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <Input 
                  type="email" 
                  placeholder="admin@restaurante.com" 
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-orange-500/20 transition-all rounded-lg"
                />
              </div>
            </div>

            {/* Input Senha */}
            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Senha
                </label>
                <a href="#" className="text-xs font-medium text-orange-600 hover:text-orange-700 hover:underline">
                  Esqueceu?
                </a>
              </div>
              <div className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-600 transition-colors">
                  <Lock className="h-5 w-5" />
                </div>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-orange-500/20 transition-all rounded-lg"
                />
              </div>
            </div>

            {/* Botão Principal */}
            <Button 
              onClick={handleLogin} 
              className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-bold text-base rounded-lg shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40 transition-all flex items-center justify-center gap-2 group"
            >
              Entrar no Sistema
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

          </div>

          {/* Rodapé */}
          <div className="pt-4 text-center">
             <p className="text-xs text-slate-400">
               &copy; 2026 GourmetOS Inc. <br className="sm:hidden"/> Todos os direitos reservados.
             </p>
          </div>

        </div>
      </div>

      {/* Lado direito */}
      <div className="hidden lg:block flex-1 relative bg-slate-900 overflow-hidden">
        
        {/* Imagem de Fundo */}
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
          alt="Restaurante Moderno" 
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-[20s] hover:scale-110"
        />

        {/* Overlay Gradiente (Para o texto ficar legível) */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-slate-900/60 to-slate-900/90 mix-blend-multiply"></div>

        {/* Conteúdo Flutuante (Card de Depoimento) */}
        <div className="absolute bottom-0 left-0 right-0 p-16 text-white z-20">
          <div className="max-w-xl">
            {/* Tag de "Sucesso" */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-200 text-xs font-medium mb-6 backdrop-blur-sm">
              <CheckCircle2 className="h-3 w-3" />
              Case de Sucesso
            </div>

            <blockquote className="text-3xl font-medium leading-tight mb-8 drop-shadow-lg">
              "Nunca foi tão fácil gerenciar as mesas e a cozinha simultaneamente. O design é incrível."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full border-2 border-orange-500/50 p-0.5 bg-slate-800">
                <img 
                  src="https://ui-avatars.com/api/?name=Everton+Luiz&background=ea580c&color=fff" 
                  alt="Avatar" 
                  className="rounded-full h-full w-full" 
                />
              </div>
              <div>
                <p className="font-bold text-lg leading-none">Everton Luiz</p>
                <p className="text-slate-300 text-sm mt-1">CEO & Founder, GourmetOS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}