import React from "react";
import { AuthProvider } from "./auth";
import { RegisterProvider } from "./register";

export const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <RegisterProvider>
      {children}
    </RegisterProvider>
  </AuthProvider>
)
