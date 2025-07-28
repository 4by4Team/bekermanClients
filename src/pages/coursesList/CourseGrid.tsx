import React, { memo } from "react";
import {
  Search,
  SortAsc,
  SortDesc,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "./CourseCard";
import { Course } from "@/types/CoursesType";
import { usePagination } from "@/hooks/usePagination";
import { useSearchAndSort } from "@/hooks/useSearchAndSort";

interface CoursesGridProps {
  courses: Course[];
  themeColor: string;
}

const Header = () => (
  <div className="text-center mb-12">
    <h2 className="text-5xl font-bold mb-6 text-gray-800">קורסים מקצועיים</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      בחר את הקורס המתאים לך מתוך מבחר רחב של קורסים מקצועיים
    </p>
  </div>
);

const SearchBar = ({
  searchTerm,
  setSearchTerm,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}) => (
  <div className="relative flex-1 max-w-md">
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <Input
      type="text"
      placeholder="חיפוש קורסים..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="pr-10 bg-white/80 border-gray-200 focus:border-emerald-400"
    />
  </div>
);

const SortControls = ({
  sortBy,
  sortOrder,
  handleSortChange,
  toggleSortOrder,
}: {
  sortBy: string;
  sortOrder: string;
  handleSortChange: (value: string) => void;
  toggleSortOrder: () => void;
}) => (
  <div className="flex items-center gap-3">
    <Select value={sortBy} onValueChange={handleSortChange}>
      <SelectTrigger className="w-40 bg-white/80 border-gray-200">
        <SelectValue placeholder="מיון לפי" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="date">תאריך</SelectItem>
        <SelectItem value="price">מחיר</SelectItem>
        <SelectItem value="name">שם</SelectItem>
      </SelectContent>
    </Select>

    <Button
      variant="outline"
      size="sm"
      onClick={toggleSortOrder}
      className="bg-white/80 border-gray-200 hover:bg-white"
    >
      {sortOrder === "asc" ? (
        <SortAsc className="w-4 h-4" />
      ) : (
        <SortDesc className="w-4 h-4" />
      )}
    </Button>
  </div>
);

const SearchAndSortControls = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  sortOrder,
  handleSortChange,
  toggleSortOrder,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: string;
  sortOrder: string;
  handleSortChange: (value: string) => void;
  toggleSortOrder: () => void;
}) => (
  <div className="max-w-7xl mx-auto mb-8">
    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortControls
        sortBy={sortBy}
        sortOrder={sortOrder}
        handleSortChange={handleSortChange}
        toggleSortOrder={toggleSortOrder}
      />
    </div>
  </div>
);

const ResultsInfo = ({
  startIndex,
  endIndex,
  totalCourses,
}: {
  startIndex: number;
  endIndex: number;
  totalCourses: number;
}) => (
  <div className="max-w-7xl mx-auto mb-6">
    <p className="text-gray-600 text-center">
      מציג {startIndex + 1}-{Math.min(endIndex, totalCourses)} מתוך{" "}
      {totalCourses} קורסים
    </p>
  </div>
);

// Keep memo for this component as it renders a list of items
const CoursesGridDisplay = memo(
  ({
    currentCourses,
    themeColor,
  }: {
    currentCourses: Course[];
    themeColor: string;
  }) => (
    <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6 lg:px-8">
      {currentCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fade-in">
          {currentCourses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              themeColor={themeColor}
              delay={index * 0.1}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            לא נמצאו קורסים התואמים לחיפוש שלך
          </p>
        </div>
      )}
    </div>
  )
);

const PageNumber = ({
  pageNum,
  currentPage,
  setCurrentPage,
}: {
  pageNum: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}) => (
  <Button
    variant={currentPage === pageNum ? "default" : "outline"}
    size="sm"
    onClick={() => setCurrentPage(pageNum)}
    className={`w-10 h-10 ${
      currentPage === pageNum
        ? "bg-emerald-600 hover:bg-emerald-700"
        : "bg-white/80 border-gray-200 hover:bg-white"
    }`}
  >
    {pageNum}
  </Button>
);

// Keep memo for pagination as it has complex logic and multiple buttons
const Pagination = memo(
  ({
    currentPage,
    totalPages,
    setCurrentPage,
  }: {
    currentPage: number;
    totalPages: number;
    setCurrentPage: (page: number) => void;
  }) => (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="bg-white/80 border-gray-200 hover:bg-white"
        >
          <ChevronRight className="w-4 h-4" />
          הקודם
        </Button>

        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }

            return (
              <PageNumber
                key={pageNum}
                pageNum={pageNum}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            );
          })}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="bg-white/80 border-gray-200 hover:bg-white"
        >
          הבא
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
);

const CoursesGrid: React.FC<CoursesGridProps> = ({ courses, themeColor }) => {
  const coursesPerPage = 6;

  // Define sort options for courses
  const sortOptions = [
    { name: "תאריך", value: "date", getValue: (course: Course) => course.id },
    {
      name: "מחיר",
      value: "price",
      getValue: (course: Course) => course.price,
    },
    { name: "שם", value: "name", getValue: (course: Course) => course.title },
  ];

  // Use custom hooks
  const {
    searchTerm,
    setSearchTerm,
    sortBy,
    sortOrder,
    filteredAndSortedItems: filteredAndSortedCourses,
    handleSortChange,
    toggleSortOrder,
  } = useSearchAndSort({
    items: courses,
    searchField: "title",
    sortOptions,
  });

  const {
    currentPage,
    totalPages,
    currentItems: currentCourses,
    setCurrentPage,
  } = usePagination({
    items: filteredAndSortedCourses,
    itemsPerPage: coursesPerPage,
    dependencies: [searchTerm, sortBy, sortOrder],
  });

  // Calculate display indices
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50/30 to-violet-50/30">
      <div className="container mx-auto px-4">
        <Header />

        <SearchAndSortControls
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          toggleSortOrder={toggleSortOrder}
        />

        <ResultsInfo
          startIndex={startIndex}
          endIndex={endIndex}
          totalCourses={filteredAndSortedCourses.length}
        />

        <CoursesGridDisplay
          currentCourses={currentCourses}
          themeColor={themeColor}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </section>
  );
};

export default CoursesGrid;
