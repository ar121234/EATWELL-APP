import MyTop from "./top";
import MyImgQuote from "./quoteimg";
import MyBottomFirst from "./bottomfirst";
import MyBottomSecond from "./bottomsecond";
import Crave from "../components/crave";
import Calcalorie from "./calcalorie";
// import {Exercise} from "./exercise"
function App(){


    return <div id="app"> 
            <MyTop />
            <MyImgQuote />
            <MyBottomFirst  />
            <MyBottomSecond />
            <Crave />
            <Calcalorie />
            {/* <Exercise  /> */}
            </div>

}

export default App;

