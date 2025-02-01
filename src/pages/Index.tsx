import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, Receipt, Printer, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Sistema de Pedidos Online para seu Restaurante
          </h1>
          <p className="text-xl text-gray-600">
            Gerencie pedidos, cardápio e impressão térmica em um só lugar.
            Apenas R$ 69,90/mês.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link to="/register">Começar Agora</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/login">Fazer Login</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cardápio Digital</h3>
            <p className="text-gray-600">
              Cadastre seus produtos com fotos e descrições detalhadas
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Receipt className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gestão de Pedidos</h3>
            <p className="text-gray-600">
              Acompanhe pedidos em tempo real e histórico completo
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Printer className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Impressão Térmica</h3>
            <p className="text-gray-600">
              Imprima pedidos automaticamente na sua impressora térmica
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tempo Real</h3>
            <p className="text-gray-600">
              Atualizações instantâneas do status dos pedidos
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-orange-500 text-white rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Comece a receber pedidos online hoje mesmo
          </h2>
          <p className="text-lg mb-6">
            Experimente por 7 dias grátis. Sem compromisso.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-orange-500 hover:bg-orange-50">
            <Link to="/register">Criar Conta Grátis</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;