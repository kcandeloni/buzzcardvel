import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ContainerPage from "./layouts/ContainerPage";

import VirtualCard from "./pages/VirtualCard";
import Generate from "./pages/Generate";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:name" element={
            <ContainerPage>
              <VirtualCard />
            </ ContainerPage>} />
          <Route path="/generate"
            element={
              <ContainerPage>
                <Generate />
              </ ContainerPage>} />
        </Routes>
      </Router>
    </>
  );
}
