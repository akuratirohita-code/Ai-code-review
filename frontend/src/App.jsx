import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#F6F4E8",
            color: "#2F3E34",
            border: "1px solid #D7DDD6",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: 500,
          },
          success: { iconTheme: { primary: "#2F3E34", secondary: "#C0E1D2" } },
          error: { iconTheme: { primary: "#2F3E34", secondary: "#DC9B9B" } },
        }}
      />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
