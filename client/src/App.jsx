import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import UploadCourse from './components/UploadCourse';
import Checkout from './components/Checkout';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/upload"
          element={<PrivateRoute roles={['instructor']}><UploadCourse /></PrivateRoute>}
        />
        <Route
          path="/checkout"
          element={<PrivateRoute roles={['learner']}><Checkout /></PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
