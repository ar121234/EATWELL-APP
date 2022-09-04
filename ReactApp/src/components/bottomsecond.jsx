import Bdata from "../benefitcarddata";
import BCard from "../components/benefitcard"

function Bfun(data){
    return (<BCard Bdata={data.key}></BCard>)

}

function BottomSecond(){
    return (<div id="bottomsecond">
    <h1>Benefits of a Healthy Diet</h1>
    <div id="Bcarddiv">{Bdata.map(Bfun)}</div>

</div>)
}

export default BottomSecond;