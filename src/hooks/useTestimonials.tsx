import { RootState } from '@/store/store';
import { fetchTestimonials } from '@/store/testimonialSlice';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export const useTestimonials = ( itemsPerPage: number = 6) => {
  const dispatch = useDispatch();
  const { data:testimonials, loading, error } = useSelector((state: RootState) => state.testimonials);

  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchTestimonials() as any);
  }, [dispatch]);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = useMemo(
    () =>
      testimonials
        .slice(startIndex, startIndex + itemsPerPage)
        .map((testimonial, index) => ({
          ...testimonial,
          color: index % 2 === 0 ? 'violet' : 'emerald',
        })),
    [testimonials, startIndex, itemsPerPage]
  );
  

  const toggleExpanded = (testimonialId: number) => {
    setExpandedTestimonial(prev => (prev === testimonialId ? null : testimonialId));
  };

  return {
    activeYoutubeId,
    setActiveYoutubeId,
    expandedTestimonial,
    toggleExpanded,
    currentPage,
    setCurrentPage,
    totalPages,
    currentTestimonials,
    loading,
    error
  };
};
