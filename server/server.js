import express from "express"
import cors from "cors"

const morgan =require("morgan");
require("dotenv").config();



//Create Express App

const app = express();

//Apply Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req,res, next) => {
    console.log("This is my own Middleware");
    next();
});

//Route

app.get('/', (req,res)=>{
    res.send('You hit Server EndPoint');
});


//Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
