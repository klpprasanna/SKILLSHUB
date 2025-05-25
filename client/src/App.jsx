import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AdminDashboard from "./pages/Dashboard/Admin/AdminDashboard";
import InstructorDashboard from "./pages/Dashboard/Instructor/InstructorDashboard";
import LearnerDashboard from "./pages/Dashboard/Learner/LearnerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CourseUpload from "./pages/Courses/Upload/CourseUpload";
import CourseView from "./pages/Courses/View/CourseView";
import CoursePlayer from "./pages/Courses/Player/CoursePlayer";
import PaymentPage from "./pages/Payment/PaymentPage";
import PaymentSuccess from "./pages/Payment/PaymentSuccess";
import PaymentCancel from "./pages/Payment/PaymentCancel";
import SearchPage from "./pages/Search/SearchPage";
import CertificatePage from "./pages/Certificate/CertificatePage";
import LandingPage from "./pages/Landing/LandingPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/admin" element={<ProtectedRoute element={<AdminDashboard />} role="admin" />} />
      <Route path="/instructor" element={<ProtectedRoute element={<InstructorDashboard />} role="instructor" />} />
      <Route path="/learner" element={<ProtectedRoute element={<LearnerDashboard />} role="learner" />} />
      <Route path="/course/upload" element={<ProtectedRoute element={<CourseUpload />} role="instructor" />} />
      <Route path="/course/:id" element={<ProtectedRoute element={<CourseView />} />} />
      <Route path="/course/player/:id" element={<ProtectedRoute element={<CoursePlayer />} />} />  
      <Route path="/payment/:id" element={<ProtectedRoute element={<PaymentPage />} />} />
      <Route path="/payment-success" element={<PaymentSuccess />} />
      <Route path="/payment-cancelled" element={<PaymentCancel />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/certificate/:id" element={<ProtectedRoute element={<CertificatePage />} />} />
    </Routes>
  );
};

export default App;
