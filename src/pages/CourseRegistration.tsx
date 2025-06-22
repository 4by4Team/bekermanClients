
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, CreditCard, Shield, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, 'שם פרטי חייב להכיל לפחות 2 תווים'),
  lastName: z.string().min(2, 'שם משפחה חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת אימייל לא תקינה'),
  phone: z.string().min(10, 'מספר טלפון חייב להכיל לפחות 10 ספרות'),
  age: z.string().min(1, 'גיל הוא שדה חובה'),
  medicalConditions: z.string().optional(),
  goals: z.string().min(10, 'יש לפרט את המטרות שלך (לפחות 10 תווים)'),
  experience: z.string().optional(),
});

const CourseRegistration = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      age: '',
      medicalConditions: '',
      goals: '',
      experience: '',
    },
  });

  // Mock course data - would come from API
  const course = {
    id: 1,
    title: 'קורס יסודות התזונה הבריאה',
    price: 799,
    duration: '8 שבועות'
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In real app, this would save to database and redirect to payment
    console.log('Registration data:', values);
    
    // Redirect to external payment gateway
    alert('מעביר לחברת הסליקה...');
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-gray-50"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          חזרה
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">הרשמה לקורס</h1>
                  <p className="text-gray-600">מלא את הפרטים הבאים כדי להירשם לקורס</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* Personal Details */}
                    <div className="bg-gradient-to-r from-emerald-50 to-violet-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">פרטים אישיים</h3>
                      
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

                      <div className="mt-4">
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>גיל *</FormLabel>
                              <FormControl>
                                <Input type="number" placeholder="25" className="max-w-xs" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Medical & Goals */}
                    <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">מידע רפואי ומטרות</h3>
                      
                      <FormField
                        control={form.control}
                        name="medicalConditions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>מצבים רפואיים או הגבלות (אופציונלי)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="פרט מצבים רפואיים, אלרגיות או הגבלות רלוונטיות"
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="goals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>מה המטרות שלך מהקורס? *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="פרט מה אתה מקווה להשיג מהקורס..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ניסיון קודם (אופציונלי)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="ספר על ניסיון קודם בתחום התזונה או הפיזיותרפיה"
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-emerald-600 to-violet-600 hover:from-emerald-700 hover:to-violet-700 text-white font-semibold py-4 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'מעבד...'
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5 ml-2" />
                          המשך לתשלום
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Course Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-4">סיכום הזמנה</h3>
                
                <div className="bg-gradient-to-r from-emerald-50 to-violet-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">{course.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">משך: {course.duration}</p>
                  <div className="flex justify-between items-center text-lg font-bold text-gray-800">
                    <span>מחיר:</span>
                    <span>₪{course.price}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-2" />
                    <span>ליווי אישי מקצועי</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-2" />
                    <span>חומרי לימוד דיגיטליים</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-2" />
                    <span>גישה לקהילת התלמידים</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-2" />
                    <span>תמיכה 24/7</span>
                  </div>
                </div>

                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <Shield className="w-4 h-4 ml-1" />
                  <span>תשלום מאובטח בחברת סליקה מוכרת</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRegistration;
