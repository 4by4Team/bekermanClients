import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./Router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./components/articles/Article";
import Courses from "./pages/Courses";
import Course from "./pages/Course";
import CourseRegistration from "./pages/CourseRegistration";
import Testimonials from "./pages/testimonial/Testimonials";
import NotFound from "./pages/NotFound";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={myRouter} />
    </TooltipProvider>
  </QueryClientProvider>

);

export default App;
