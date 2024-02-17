const { log } = require("console")
const express=require("express")



const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(process.env.PORT||3001,()=>{
    console.log(`${process.env.PORT||3001}`);
})

const product=[{ id: 1, name: "iPhone", price: 800 },
{ id: 2, name: "iPad", price: 700 },
{ id: 3, name: "iWatch", price: 600 },
]

app.get('/test',(req,res)=>{
    res.send("Ooooookkkkk")
})

app.get('/product',(req,res)=>{
    res.json(product)
})

app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    const {id}=req.params
    const proId=product.find((item)=>item.id==id)
    if(!proId){
        return res.status(404).json({message:"not found"})
    }
    res.json(proId)
})

app.get("/search",(req,res)=>{
    console.log(req.query);
    const {name}=req.query
    const filterpro=product.filter(item=>{
        return item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    })
    if(filterpro.length===0){
        return res.status(404).json({message:"THE SEARCH NAME ARE NOT FOUND"})
    }
    res.send(filterpro)
    
})

// get the data from the body

app.post('/product',(req,res)=>{
    const {name,price}=req.body
    const newPro={
        id:product.length+1,
        name,
        price,
    }
    product.push(newPro)
    if(!newPro){
        return app.status(404).send("ERROR IN THE ADDING")
    }
    res.send(product)
})


// put

app.put('/product/:id',(req,res)=>{
    const {id}=req.params
    const {name,price}=req.body

    const indx=product.findIndex(item=>item.id==id)
    product[indx]={...product[indx], name,price}
    res.json(product)

})


// delete

app.delete('/product/:id',(req,res)=>{
    const {id}=req.params
    const indx=product.findIndex(item=>item.id==id)
    product.splice(indx,1)
    res.json(product)
})
