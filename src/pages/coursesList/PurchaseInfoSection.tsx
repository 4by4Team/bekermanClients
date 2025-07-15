import React from 'react';
import { CreditCard, FileText, Headphones } from 'lucide-react';

const PurchaseInfoSection: React.FC = () => {
  const steps = [
    { icon: CreditCard, title: '1. בחר וקנה', desc: 'בחר את הקורס המתאים לך ושלם בצורה מאובטחת' },
    { icon: FileText, title: '2. קבל גישה', desc: 'קבל גישה מיידית לכל חומרי הקורס והפלטפורמה' },
    { icon: Headphones, title: '3. למד וקבל ליווי', desc: 'למד בקצב שלך עם ליווי מקצועי וקהילה תומכת' },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">איך זה עובד?</h2>
          <p className="text-xl text-gray-600 mb-8">תהליך פשוט ומהיר להתחלת המסע שלך</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50/50 to-violet-50/50 rounded-2xl p-6">
                <div className="bg-gradient-to-r from-emerald-400/70 to-violet-400/70 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseInfoSection;