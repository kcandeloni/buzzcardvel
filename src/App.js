import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ContainerPage from "./layouts/ContainerPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/:name" element={<ContainerPage>CardPage</ ContainerPage>} />
          <Route path="/generate" element={<ContainerPage>Generate</ ContainerPage>} />
          <Route index path="*" element={<Navigate to="/generate/" />} />
        </Routes>
      </Router>
    </>
  );
}
