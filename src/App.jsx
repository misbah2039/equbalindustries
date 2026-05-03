import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutPage from "./pages/AboutPage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import CustomerPage from "./pages/Customer";
import EquipmentPage from "./pages/EquipmentPage";
import CompanyDocumentsPage from "./pages/CompanyDocumentsPage";
import ExpenditurePage from "./pages/ExpenditurePage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ServiceLinePage from "./pages/ServiceLinePage";
import ServicesPage from "./pages/ServicesPage";
import SocialContentPage from "./pages/SocialContentPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServiceLinePage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/social-content" element={<SocialContentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Navigate to="/login" replace />} />
        <Route
          path="/company-documents"
          element={
            <ProtectedRoute>
              <CompanyDocumentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/expenditure"
          element={
            <ProtectedRoute>
              <ExpenditurePage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
