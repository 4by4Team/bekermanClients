import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Courses from "./pages/coursesList/Courses";
import Course from "./pages/Course";
import CourseRegistration from "./pages/CourseRegistration";
import NotFound from "./pages/NotFound";
import AppLayout from "./AppLayout";
import Testimonials from "./pages/testimonial/Testimonials";

export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/article/:id",
        element: <Article />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/course/:id",
        element: <Course />,
      },
      {
        path: "/course/:id/register",
        element: <CourseRegistration />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
