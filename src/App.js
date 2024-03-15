import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  
  const [activePath, setActivePath] = useState("");

  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot" element={<ForgetPasswordPage />} />
    
        <Route path="/" element={<MainLayout activePath={activePath} />} >
            <Route index element={<DashboardPage setActivePath={setActivePath} />} />
            <Route path="/inventory" element={<InventoryPage setActivePath={setActivePath} />} />
            <Route path="/cart" element={<CollectionsPage setActivePath={setActivePath} />} />
            <Route path="/donations" element={<DonationsPage setActivePath={setActivePath} />} />
            <Route path="/add/food" element={<AddNewFooodPage setActivePath={setActivePath}/>} />
            <Route path="/notifications" element={<NotificationPage setActivePath={setActivePath}/>} />
            <Route path="/profile" element={<UserProfilePage setActivePath={setActivePath}/>} />
        </Route>

        <Route path="/admin" element={<AdminScreenLayout activePath={activePath} />} >
            <Route index element={<AdminDashboard setActivePath={setActivePath} /> } />
        </Route>  
        
        {/* <Route path="/view/collection/:collectionid" element={<CollectionHomePage />} /> */}
        <Route path="*" element={<p><h1>404!</h1></p>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;