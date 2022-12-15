import React from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Settings icon */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent
              opensOn="Hover"
              content="Settings"
              position="TopCenter"
            >
              <button
                type="button"
                className="text-3xl p-3 hover: drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar Component */}
          {activeMenu ? (
            <div
              className="w-64 fixed sidebar dark:bg-secondary-dark-bg 
            bg-blue-800"
            >
              Sidebar
            </div>
          ) : (
            <div className="w-0 dark: bg-secondary-dark-bg">Sidebar off</div>
          )}

          {/* Navbar */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-64" : "flex-auto"
            }`}
          >
            <div className="fixed md:static bg-yellow-500 navbar w-full dark:bg-main-dark-bg">
              Navbar
            </div>
          </div>

          {/* Routing */}
          <div>
            <Routes>
              {/* Overview Dashboard */}
              <Route path="/" element="Overview" />
              <Route path="/overview" element="Overview" />

              {/* Pages */}
              <Route path="/transaction" element="Transaction" />

              {/* Apps */}
              <Route path="/boards" element="Kanban" />
              <Route path="/calendar" element="Calendar" />

              {/* Charts */}
              <Route path="/outcome" element="OutcomeChart" />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
