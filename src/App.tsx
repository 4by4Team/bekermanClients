import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./Router";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouterProvider router={myRouter} />
    </TooltipProvider>
  </Provider>

);

export default App;
