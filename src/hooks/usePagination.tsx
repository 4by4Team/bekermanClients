import { useState, useMemo, useEffect } from 'react';

interface UsePaginationProps<T> {
  items: T[];
  itemsPerPage: number;
  dependencies?: any[];
}

export function usePagination<T>({ 
  items, 
  itemsPerPage, 
  dependencies = [] 
}: UsePaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Reset to first page when dependencies change
  useEffect(() => {
    setCurrentPage(1);
  }, dependencies);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
    setCurrentPage
  };
} 