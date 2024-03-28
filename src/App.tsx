import { Route, BrowserRouter as Router, Routes, } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchPage from "./pages/SearchPage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { useEffect } from "react"
import { useDispatch, } from "react-redux"
import { loadAllUserApi, loadUserApi } from "./redux/actions/authAction"
import { token } from "./redux/store"

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    if (token) {
      dispatch(loadUserApi())
      dispatch(loadAllUserApi())
    }
  }, [dispatch, token])

  return (
    <>
      <div className="max-w-screen-2xl mx-auto max-h-screen overflow-y-auto custom_scrollbar" id="main_id">
        <Router basename='/'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />


          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
