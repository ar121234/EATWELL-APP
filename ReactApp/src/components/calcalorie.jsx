import React,{useState} from "react";
import food from "../csv2jsondata";


// var send=0;
var totalc=0;
function Calcalorie(){
    const [searchInput,setSearch]=useState("");
    const [fd,setFd]=useState("");
    const [totalcal,setTotal]=useState("");
    const [ex,setExercise]=useState("");
    // const [Color,setColor]=useState("blue");
//     function keydown(){ document.getElementById("foodsdiv").style.setProperty('display' , 'block');
//     document.getElementById("foodsdiv").style.setProperty('max-height','200px')                       
// }
    function search(event){
   
        
        // cssprop={}
        // setDisplaySearch('block');
        // console.log(event)
        const searchInput=event.target.value;
        if (searchInput.length > 0){
            // document.getElementById("foodsdiv").style.setProperty('display' , 'block')
            // document.getElementById("foodsdiv").style.setProperty('max-height','200px')
            //  setDisplaySearch(displaySearch); 
                // let display="block";
                // setDisplaySearch(display)
                const searchval= food.filter((foods)=>{
                return (foods.Food.toLowerCase().match(searchInput))    
                })
                let count=0;
                    setSearch(searchval.map((data)=>{ 
                        
                        count++;
                        return (
                            document.getElementById("foodsdiv").style.setProperty('display' , 'block') ,
                            document.getElementById("foodsdiv").style.setProperty('max-height','200px'),
                            <div id={count} className="forcsshand" onClick={update} >{data.Food}</div> )}))
           
                    }
        // else{      document.getElementById("foodsdiv").style.setProperty('display' , 'None')}
    }
    
    //for updating selected value into input search box
    function update(e){
        document.getElementById("f").value=e.target.innerHTML;
        // let display="None"
        // setDisplaySearch(display) 
        document.getElementById("foodsdiv").style.setProperty('display' , 'None' )
    }
 
     
 async function Fetch( ) {
    
    const data=document.getElementById("f").value
    const url="http://localhost:1000/backend?data="+data;
    const val=await fetch(url).then(
         async(res)=>{return await res.json()}).then((result)=>{return result})
            // var x= await result;
          const a= val; 
          const msg=a.val;
         totalc=totalc + Number(msg);
        setFd(msg+" cal")
        }
       

        function setEx(){   
                if (totalc>0){
            setTotal(totalc)
            if (totalc>1600 & totalc<2000){
                setExercise("Your Calorie Intake is Good If You are a Senior Women and less if you are A senior MAn so You need To eat more")
               
                
            }
            else if (totalc<1600)
            {setExercise("If You are A Senior Women or Man ,You need To eat more to maintain your daily calorie intake since your calorie intake is less than 1600 cal and 2000 cal respectively" 
                            )}
            else if(totalc>2000 & totalc<2200){
                setExercise("Your Calorie Intake is Good If You are a Senior Women or  A senior Man")   
            }
            else if (totalc>2200 & totalc<2800)
            {setExercise("Your Calorie Intake is more If You are a Senior Women. You Should do At least 150 minutes a week (for example, 30 minutes a day, 5 days a week) of moderate intensity activity such as brisk walking. If you are A senior Man Your Calorie intake is Good")   
            }

            // else if (totalc>2200 & totalc<2800)
            // {setExercise("Your Calorie Intake is Good If You are a Senior Man. ")   
            // }

            else if (totalc>2800)
            {setExercise("Your Calorie Intake is more If You are a Senior Man or A woman. You Should do At least 150 minutes a week (for example, 30 minutes a day, 5 days a week) of moderate intensity activity such as brisk walking.")   
            }






        }}
        
            function Ex(){
     
            return(<div>
                <div>Your Total Calories:{totalcal}
                </div>
                <div>{ex}</div>
                </div>
               )}
            
            

      return(
            
            (<div id="calorid">
                Food:<input id="f" type="search"  onChange={search}  name="food" placeholder="search..." />
                <button onClick={Fetch}>submit</button>
                <div id="foodsdiv" >{searchInput}</div>
                <div id="caloriedata">{fd}
                <button onClick={setEx}>Get Calories</button></div>
                <Ex />
                {/* <div id="ex">hii {totalcal}</div> */}
                </div>))
}

export default Calcalorie;
// export {send};
