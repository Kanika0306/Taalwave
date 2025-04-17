
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LibraryPage from "./pages/LibraryPage";
import NowPlayingPage from "./pages/NowPlayingPage";
import AccountPage from "./pages/AccountPage";
import BroadcastPage from "./pages/BroadcastPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PaymentPage from "./pages/PaymentPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import NotFound from "./pages/NotFound";
import { AudioPlayerProvider } from "./contexts/AudioPlayerContext";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AudioPlayerProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={
                <PageLayout>
                  <HomePage />
                </PageLayout>
              } 
            />
            <Route 
              path="/search" 
              element={
                <PageLayout>
                  <SearchPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/library" 
              element={
                <PageLayout>
                  <LibraryPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/now-playing" 
              element={
                <PageLayout>
                  <NowPlayingPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/account" 
              element={
                <PageLayout>
                  <AccountPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/broadcast" 
              element={
                <PageLayout>
                  <BroadcastPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/login" 
              element={
                <PageLayout>
                  <LoginPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/signup" 
              element={
                <PageLayout>
                  <SignupPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/payment" 
              element={
                <PageLayout>
                  <PaymentPage />
                </PageLayout>
              } 
            />
            <Route 
              path="/payment-success" 
              element={
                <PageLayout>
                  <PaymentSuccessPage />
                </PageLayout>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AudioPlayerProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
