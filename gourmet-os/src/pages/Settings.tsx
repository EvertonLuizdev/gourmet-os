import { Store, Mail, Phone, Save, Lock, MapPin } from "lucide-react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Settings() {
    return (
        <div className="space-y-6">

            {/* Cabeçalho */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">Configurações</h2>
                    <p className="text-sm text-slate-500">Gerencie os dados do seu estabelecimento.</p>
                </div>
                <Button className="h-9 text-xs font-bold bg-orange-600 houver:bg-orange-700 text-white gap-2 shadow-sm">
                    <Save className="h-3.5 w-3.5" />
                    Salvar Alterações
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Coluna esquerda: navegação/resumo */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                        <div className="h-20 w-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-4 border-4 border-white shadow-sm">
                            <Store className="h-8 w-8" />
                        </div>
                        <h3 className="font-bold text-slate-900">Gourmet Burger</h3>
                        <p className="text-xs text-slate-500">Plano Premium</p>

                        <div className="mt-6 border-t border-slate-100 pt-4 text-left space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                <Mail className="h-4 w-4 text-slate-400" />
                                <span>contato@gourmet.com</span>
                            </div>
                            <div className="mt-6 border-t border-slate-100 pt-4 text-left space-y-3">
                                <Phone className="h-4 w-4 text-slate-400" />
                                <span>(11) 99999-9999</span>
                            </div>
                            <div className="mt-6 border-t border-slate-100 pt-4 text-left space-y-3">
                                <MapPin className="h-4 w-4 text-slate-400" />
                                <span>São Paulo, SP</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coluna direita: formulários */}
                <div className="md:col-span-2 space-y-6">

                    {/* Card 1: dados básicos */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <div className="mb-6 border-b border-slate-100 pb-4">
                            <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                <Store className="h-4 w-4 text-orange-600" />
                                Dados do Estabelecimento
                            </h3>
                            <p className="text-xs text-slate-500">Essas informações aparecem nos comprovantes.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <label className="text-xs font-bold text-slate-700">Nome Fantasia</label>  
                              <Input defaultValue="Gourmet Burger & Grill" className="bg-slate-50 border-slate-200" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700">Categoria</label>
                                <Input defaultValue="Hamburgueria Artesanal" className="bg-slate-50 border-slate-200" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700">E-mail Comercial</label>
                                <Input defaultValue="admin@gourmetos.com.br" className="bg-slate-50 border-slate-200" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700">Telefone / WhatsApp</label>
                                <Input defaultValue="(11) 98765-4321" className="bg-slate-50 border-slate-200" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Segurança */}
                    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <div className="mb-6 border-b border-slate-100 pb-4">
                            <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                <Lock className="h-4 w-4 text-blue-600" />
                                Segurança e Acesso
                            </h3>
                            <p className="text-xs text-slate-500">Mantenha sua conta segura alterando a senha periodicamente.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-700">Senha Atual</label>
                                <Input type="password" placeholder="••••••••" className="bg-slate-50 border-slate-200" />
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-700">Nova Senha</label>
                                    <Input type="password" placeholder="No mínimo 6 caracteres" className="bg-slate-50 border-slate-200" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-700">Confirmar Nova Senha</label>
                                    <Input type="password" placeholder="Repita a nova senha" className="bg-slate-50 border-slate-200" />
                                </div>
                            </div>
                        </div>
                
                        <div className="mt-4 flex justify-end">
                            <Button variant="outline" className="text-xs h-8 border-slate-200 text-slate-600">
                                Alterar apenas a senha
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}