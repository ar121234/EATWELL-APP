
import carddata from "../carddata.js";
import Card from "./dietcard.jsx"
//carddata.map()
function fun(data){
           return <Card  carddata={data} />

}

function MyBottomFirst(){
    return (<div id="bottomfirst">
            {/* <h1>Eating the right foods can lead to a longer, healthier life.</h1> */}
            <h1>Healthy diet</h1>
            <p>A healthy diet is a diet that maintains or improves overall health. A healthy diet provides the body with essential nutrition: fluid, macronutrients such as protein, micronutrients such as vitamins, and adequate fibre and food energy.</p>
            <h2>What Healthy Diet Includes?</h2>
            <div id="carddiv">{carddata.map(fun)}</div>

    </div>)
}

export default MyBottomFirst;