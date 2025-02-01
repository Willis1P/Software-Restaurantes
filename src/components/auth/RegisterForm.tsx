import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [restaurantName, setRestaurantName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Criar usuário no Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw authError;

      if (authData.user) {
        // 2. Criar registro do restaurante
        const { error: restaurantError } = await supabase
          .from('restaurants')
          .insert([
            {
              id: authData.user.id,
              name: restaurantName,
              email,
            }
          ]);

        if (restaurantError) throw restaurantError;

        toast.success("Cadastro realizado com sucesso!");
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      toast.error("Erro ao realizar cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Nome do Restaurante"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
    </form>
  );
};

export default RegisterForm;