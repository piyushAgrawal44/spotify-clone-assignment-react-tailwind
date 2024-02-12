import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"

function App() {

  return (
    <>
      <div className="max-w-screen-2xl mx-auto max-h-screen overflow-y-auto custom_scrollbar">
      <Router basename='/'>
        <Routes>
          <Route  path='/' element={<HomePage />} />
          <Route  path='/search' element={<SearchPage />} />
        </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
