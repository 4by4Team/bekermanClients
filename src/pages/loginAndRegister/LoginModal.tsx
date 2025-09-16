import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Modal } from "./Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { login } from "@/store/authSlice";


const loginSchema = z.object({
  email: z.string().email("כתובת אימייל לא תקינה"),
  password: z.string().min(6, "סיסמה חייבת להכיל לפחות 6 תווים"),
});

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    dispatch(login({ email: data.email, password: data.password }));
    onClose();
  };

  const handleGoogleLogin = () => {
    const popup = window.open(
      `${import.meta.env.VITE_API_URL.replace('/api', '')}/api/auth/google`,
      '_blank',
      'width=500,height=600'
    );
    // Listen for message from popup
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== import.meta.env.VITE_API_URL.replace('/api', '')) return;
      const { token, user } = event.data;
      if (token) sessionStorage.setItem('token', token);
      if (user) {
        Object.entries(user).forEach(([key, value]) => {
          if (typeof value === 'string' || typeof value === 'number') {
            sessionStorage.setItem(key, value.toString());
          }
        });
      }
      dispatch({ type: 'auth/login/fulfilled', payload: { user, token } });
      window.removeEventListener('message', receiveMessage);
      onClose();
    };
    window.addEventListener('message', receiveMessage, { once: true });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gradient-to-r from-emerald-50 to-violet-50 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">התחברות</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>אימייל *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="example@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>סיסמה *</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="הכנס סיסמה" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white py-3 font-semibold"
            >
              התחבר
            </Button>
          </form>
        </Form>
        <Button
          variant="outline"
          className="mt-4 w-full"
          onClick={handleGoogleLogin}
        >
          התחבר עם Google
        </Button>
      </div>
    </Modal>
  );
};

