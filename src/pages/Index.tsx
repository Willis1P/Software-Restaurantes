import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
            Sistema de Pedidos Online
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gerencie seu restaurante online com facilidade. Cadastre produtos,
            receba pedidos e aumente suas vendas.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/register">Cadastrar</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;