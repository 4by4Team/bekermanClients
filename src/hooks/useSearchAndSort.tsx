import { useState, useMemo } from 'react';

interface UseSearchAndSortProps<T> {
  items: T[];
  searchField: keyof T;
  sortOptions: {
    name: string;
    value: string;
    getValue: (item: T) => string | number;
  }[];
}

export function useSearchAndSort<T>({ 
  items, 
  searchField, 
  sortOptions 
}: UseSearchAndSortProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<string>(sortOptions[0]?.value || "");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Filter and sort items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = items.filter((item) => {
      const fieldValue = String(item[searchField]).toLowerCase();
      return fieldValue.includes(searchTerm.toLowerCase());
    });

    // Sort items
    filtered.sort((a, b) => {
      const sortOption = sortOptions.find(option => option.value === sortBy);
      if (!sortOption) return 0;

      const aValue = sortOption.getValue(a);
      const bValue = sortOption.getValue(b);

      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else {
        comparison = Number(aValue) - Number(bValue);
      }

      return sortOrder === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [items, searchTerm, sortBy, sortOrder, searchField, sortOptions]);

  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return {
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    filteredAndSortedItems,
    handleSortChange,
    toggleSortOrder
  };
} 