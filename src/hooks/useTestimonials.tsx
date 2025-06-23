import { useState } from 'react';
import { Testimonial } from '@/types/Testimonial';

interface UseTestimonialsProps {
  testimonials: Testimonial[];
  itemsPerPage?: number;
}

export function useTestimonials({ testimonials, itemsPerPage = 6 }: UseTestimonialsProps) {
  const [activeYoutubeId, setActiveYoutubeId] = useState<string | null>(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

  const toggleExpanded = (testimonialId: number) => {
    setExpandedTestimonial(expandedTestimonial === testimonialId ? null : testimonialId);
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
  };
}
