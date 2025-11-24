import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import Tworczość from "./pages/Tworczość";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            {/* COLLECTIONS */}
            <Route path="/collections" element={<Collections />} />
            <Route
              path="/collections/iii-materia"
              element={<CollectionDetail collectionId="iii-materia" />}
            />
            <Route
              path="/collections/inne"
              element={<CollectionDetail collectionId="inne" />}
            />

            {/* TWÓRCZOŚĆ */}
            <Route path="/tworczość" element={<Tworczość />} />
            <Route
              path="/tworczość/:category"
              element={<CategoryPage />}
            />

            {/* OTHER PAGES */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
