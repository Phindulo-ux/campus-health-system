import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OnboardingPage from "./pages/OnboardingPage";
import RegistrationCapturePage from "./pages/RegistrationCapturePage";
import BookingPage from "./pages/BookingPage";
import FollowUpBookingPage from "./pages/FollowUpBookingPage";
import HealthAndWellnessPage from "./pages/HealthAndWellnessPage";
import ConfirmBookingPage from "./pages/ConfirmBookingPage";
import ConfirmFollowUpBooking from "./pages/ConfirmFollowUpBooking";
import SubmittedPage from "./pages/SubmittedPage";
import MySubmissionsPage from "./pages/MySubmissionsPage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/upload-proof" element={<RegistrationCapturePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/follow-up-booking" element={<FollowUpBookingPage />} />
        <Route path="/confirm-follow-up" element={<ConfirmFollowUpBooking />} />
        <Route path="/health-wellness-booking" element={<HealthAndWellnessPage />} />
        <Route path="/confirm-booking" element={<ConfirmBookingPage />} />
        <Route path="/submitted" element={<SubmittedPage />} />
        <Route path="/my-submissions" element={<MySubmissionsPage />} /> {}
      </Routes>
    </Router>
  );
}

export default App;