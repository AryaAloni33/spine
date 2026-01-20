const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())


app.get("/" , (req,res)=>{
    res.json({message:'Backend Working'})
})

//Api test
app.get("/api/test" , (req,res)=>{
    res.json({status:'Success',
        message:"HELLO I AM UNDER THE WATER"
    })

})

app.post("/api/echo", (req, res) => {
  const { text } = req.body;

  res.json({
    status: "Received",
    reply: `Backend received: ${text}`
  });
});



app.listen(PORT , (error)=>{
    console.log(`Server is hosting on ${PORT}`)
})
