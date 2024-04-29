import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Families from "./pages/Families";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { AuthProvider } from "./context/authContext";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import MemberAppLayout from "./ui/member/MemberAppLayout";
import Settings from "./pages/Settings";
import Register from "./pages/Register";
import Family from "./features/families/Family";
import Requests from "./pages/Requests";
import FamilyRequests from "./pages/FamilyRequests";
import MyFamilies from "./pages/MyFamilies";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute role="dah">
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="familyrequests" element={<FamilyRequests />} />
            </Route>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              element={
                <ProtectedRoute role="user,dah,admin">
                  <MemberAppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="requests" element={<Requests />} />
              <Route path="myfamilies" element={<MyFamilies />} />
              <Route path="index" element={<Navigate to="/families" />} />
              <Route path="families" element={<Families />} />
              <Route path="family/:familyId" element={<Family />} />
            </Route>
          </Routes>
          <Toaster
            position="top-center"
            containerStyle={{ margin: "1rem", display: "flex" }}
            gutter={10}
            z
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 4000,
              },
              style: {
                fontSize: "12px",
                maxWidth: "500px",
                padding: "14px 28px",
                backgroundColor: "var(--color-grey--1)",
                color: "var(--color-grey--8)",
              },
            }}
          ></Toaster>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>
  );
}
