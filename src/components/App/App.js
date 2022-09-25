import logo from '../../logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
    return (
        <div className="page">
            <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route path="/movies" element={<Movies/>} />
                <Route path="/saved-movies" element={<SavedMovies/>} />
                <Route path="/signup" element={<Register/>} />
                <Route path="/signin" element={<Login/>} />
                <Route path="/profile" element={<Profile/>} />
                {/*<Route path="/navbar">*/}
                {/*    <Navbar/>*/}
                {/*</Route>*/}
                {/*<Route path="*">*/}
                {/*    <PageNotFound/>*/}
                {/*</Route>*/}
            </Routes>
        </div>
    )
}


export default App;
