import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";
import './App.css'

export default function App() {
    return (
        <div className="main">
            <LeftSide />
            <RightSide />
        </div>
    )
}