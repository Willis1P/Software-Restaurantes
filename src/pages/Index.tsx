import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Sistema de Pedidos Online para Restaurantes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gerencie seu restaurante de forma eficiente com nossa plataforma completa.
            Cadastre produtos, receba pedidos e acompanhe seu negócio em tempo real.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/register">Cadastrar Restaurante</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/login">Fazer Login</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Gestão Simplificada</h3>
              <p className="text-gray-600">
                Interface intuitiva para gerenciar produtos, categorias e pedidos.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Pedidos em Tempo Real</h3>
              <p className="text-gray-600">
                Receba e gerencie pedidos instantaneamente, sem atrasos.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Análise de Dados</h3>
              <p className="text-gray-600">
                Acompanhe o desempenho do seu negócio com relatórios detalhados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;