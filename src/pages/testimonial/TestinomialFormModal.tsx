import { useState, useEffect } from 'react';
import { Testimonial } from '@/types/Testimonial';

interface TestimonialFormModalProps {
  initialData?: Testimonial | null;
  onClose: () => void;
  onSave: (data: Omit<Testimonial, 'id'>) => void;
}

const TestimonialFormModal = ({ initialData, onClose, onSave }: TestimonialFormModalProps) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [youtubeId, setYoutubeId] = useState('');
  const [colorTheme, setColorTheme] = useState<'emerald' | 'violet'>('emerald');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setSummary(initialData.summary);
      setYoutubeId(initialData.youtubeId);
      setColorTheme(initialData.colorTheme || 'emerald');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, summary, youtubeId, colorTheme });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'עריכת עדות' : 'הוספת עדות'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="כותרת"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="תיאור קצר"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="YouTube ID"
            value={youtubeId}
            onChange={(e) => setYoutubeId(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <select
            value={colorTheme}
            onChange={(e) => setColorTheme(e.target.value as 'emerald' | 'violet')}
            className="w-full border p-2 rounded"
          >
            <option value="emerald">ירוק</option>
            <option value="violet">סגול</option>
          </select>
          <div className="flex justify-end gap-4 mt-4">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-black">ביטול</button>
            <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">שמור</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialFormModal;