const Express=require("express");
const cors=require("cors")
const food=require("./csv2jsondata")

const app=Express()
const port=1000
app.listen(port,()=>{console.log("your express server has started...")})
app.use(cors())
app.get("/", (req,res)=>{res.send("hii")})
app.get("/backend",cal)


async function cal(req,res){
    const x=(req.query.data);
    const len=Object.keys(food).length
    calci=0;   
    for(let i=0;i<=len;i++)
       {
          if(Object.entries(food)[i][1].Food==x)
            { calci = Object.entries(food)[i][1].Calories;
              break;}
       }
      const q= calci;
    res.json({val : q})}
