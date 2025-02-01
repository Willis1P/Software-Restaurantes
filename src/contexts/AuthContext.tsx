import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { Restaurant } from '@/types/database.types';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  restaurant: Restaurant | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchRestaurant(session.user.id);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchRestaurant(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchRestaurant = async (userId: string) => {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', userId)
      .single();

    if (!error && data) {
      setRestaurant(data);
    }
    setLoading(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setRestaurant(null);
  };

  return (
    <AuthContext.Provider value={{ session, user, restaurant, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};