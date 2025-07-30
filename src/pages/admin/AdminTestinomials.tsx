
// import { useAppDispatch, useAppSelector } from '../../hooks/useTestimonials'
// import { createTestimonial, deleteTestimonial, fetchTestimonials } from '@/store/testimonialSlice';
// import { useEffect, useState } from 'react';

// export default function AdminTestimonials() {
//   const dispatch = useAppDispatch();
//   const { data: testimonials, loading, error } = useAppSelector((state) => state.testimonials);
//   const [form, setForm] = useState({ title: '', summary: '', youtubeId: '', colorTheme: 'emerald' });

//   useEffect(() => {
//     dispatch(fetchTestimonials());
//   }, [dispatch]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(createTestimonial(form));
//     setForm({ title: '', summary: '', youtubeId: '', colorTheme: 'emerald' });
//   };

//   const handleDelete = (id: number) => {
//     if (window.confirm('האם למחוק את העדות?')) {
//       dispatch(deleteTestimonial(id));
//     }
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-6">ניהול עדויות</h1>

//       <form onSubmit={handleSubmit} className="space-y-4 mb-10">
//         <input
//           type="text"
//           placeholder="כותרת"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <textarea
//           placeholder="תקציר"
//           value={form.summary}
//           onChange={(e) => setForm({ ...form, summary: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="YouTube ID"
//           value={form.youtubeId}
//           onChange={(e) => setForm({ ...form, youtubeId: e.target.value })}
//           className="w-full p-2 border rounded"
//           required
//         />
//         <select
//           value={form.colorTheme}
//           onChange={(e) => setForm({ ...form, colorTheme: e.target.value as 'emerald' | 'violet' })}
//           className="w-full p-2 border rounded"
//         >
//           <option value="emerald">ירוק (emerald)</option>
//           <option value="violet">סגול (violet)</option>
//         </select>
//         <button
//           type="submit"
//           className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
//         >
//           הוסף עדות
//         </button>
//       </form>

//       {loading && <p>טוען...</p>}
//       {error && <p className="text-red-500">שגיאה: {error}</p>}

//       <ul className="space-y-4">
//         {testimonials.map((t) => (
//           <li key={t.id} className="p-4 border rounded bg-white shadow-sm flex justify-between items-center">
//             <div>
//               <h2 className="font-semibold">{t.title}</h2>
//               <p className="text-sm text-gray-600">{t.summary}</p>
//             </div>
//             <button onClick={() => handleDelete(t.id)} className="text-red-500 hover:underline">
//               מחק
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
