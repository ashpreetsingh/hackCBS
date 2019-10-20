var express=require("express")
var app=express();
// const data=require("./components/content/index")
const bodyParser=require("body-parser")
const spawn = require("child_process").spawn;
let north=[
    {
        id:"001",
        name:"Maggi Noodles - Pack of 4",
        mfd:"2019-10-19",
        cost:0,
        base:48,
        quantity:"",
        bb: 120,
        //:maggi
    },
    {
        id:"002",
        name:"Parle Hide & Seek Chocolate Chip Cookies",
        mfd:"2019-09-10",
        cost:0,
        base:50,
        quantity:"",
        bb: 60,
        //:hns
    },
    {
        id:"003",
        name:"Onion",
        mfd:"2019-09-25",
        cost:0,
        base:25,
        quantity:"",
        bb: 6,
        //:onion
    },
    {
        id:"004",
        name:"Dabur Squeezy Honey",
        mfd:"2019-04-30",
        cost:0,
        base:140,
        quantity:"",
        bb: 360,
        //:honey
    },
    {
        id:"005",
        name:"Kissan Fresh Tomato Ketchup",
        mfd:"2019-05-05",
        cost:0,
        base:120,
        quantity:"",
        bb: 360,
        //:ketchup
    },
    {
        id:"006",
        name:"Hershey's Chocolate Syrup Topping",
        mfd:"2019-05-05",
        cost:0,
        base:150,
        quantity:"",
        bb: 360,
        //:hersheys
    },
    {
        id:"007",
        name:"Potatos",
        mfd:"2019-05-05",
        cost:0,
        base:20,
        quantity:"",
        bb: 10,
        //:potato
    },
    {
        id:"008",
        name:"Tomatoes",
        mfd:"2019-10-19",
        cost:0,
        base:125,
        quantity:"",
        bb: 5,
        //:tomato
    },
    {
        id:"009",
        name:"Fresh Chicken",
        mfd:"2019-10-20",
        cost:0,
        base:125,
        quantity:"",
        bb: 3,
        //:chicken
    },
];

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3001');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3000,()=>{
    console.log("running at port 3000")
})
var fact;
app.get("/home",(request,response)=>{
    north.map((data)=>{
        var date=new Date(data.mfd);
        var currDate=new Date("2019-10-20")
        fact=1-((currDate-date)/(3600000*data.bb*24));
        data.cost=Math.floor(data.base+fact*data.base);
      
    })
    response.send(north);
    // response.send("<h1>Hello</h1>")
    // response.status(200).json({name:"ash"})


})

// pythonProcess.stdout.on('data', (data) => {
//     console.log(data);
// });