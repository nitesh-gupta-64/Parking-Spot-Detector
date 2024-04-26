import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import MainHeader from "./Components/MainHeader";
import Navbar from "./Components/Navbar";
import Video1 from "./Components/Video1";
import Video2 from "./Components/Video2";
import Video3 from "./Components/Video3";
import Video4 from "./Components/Video4";

function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center bg-[#1F2833]">
      <Routes path='/' element={<MainHeader/>} >
        <Route index element={<Home/>}/>
        <Route path='/video1' element={<Video1/>}/>
        <Route path='/video2' element={<Video2/>}/>
        <Route path='/video3' element={<Video3/>}/>
        <Route path='/video4' element={<Video4/>}/>

      </Routes>
    </div>

  );
}

export default App;
