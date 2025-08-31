import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Modal } from "./Modal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const registerSchema = z.object({
  firstName: z.string().min(2, 'שם פרטי חייב להכיל לפחות 2 תווים'),
  lastName: z.string().min(2, 'שם משפחה חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().min(10, 'מספר טלפון חייב להכיל לפחות 10 ספרות'),
  tz: z.string().min(5, 'תעודת זהות לא תקינה'),
  password: z.string().min(6, 'סיסמה חייבת להכיל לפחות 6 תווים'),
});

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { firstName: "", lastName: "", email: "", phone: "", tz: "", password: "" },
  });

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log("Register data:", data);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-gradient-to-r from-emerald-50 to-violet-50 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">הרשמה</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>שם פרטי *</FormLabel>
                    <FormControl>
                      <Input placeholder="הכנס שם פרטי" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>שם משפחה *</FormLabel>
                    <FormControl>
                      <Input placeholder="הכנס שם משפחה" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>טלפון *</FormLabel>
                    <FormControl>
                      <Input placeholder="050-1234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tz"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>תעודת זהות *</FormLabel>
                  <FormControl>
                    <Input placeholder="הכנס ת.ז." {...field} />
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
              הרשמה
            </Button>
          </form>
        </Form>
      </div>
    </Modal>
  );
};
