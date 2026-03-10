//เรียกใช้  express
//เรียกใช้  cors
//สร้างตัวแปรมารรับ express
//สร้างตัวแปรมารับ port
//app.use(cors())
//app.use(express.json())
// สร้าง array และข้างในเป็น list 
//1. id: 1, title: "กระเป๋าหนัง", price: 250, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
//2. id: 2, title: "เสื้อยืด", price: 500, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
// สร้างเส้น api ให้หน้าบ้านมาเรียกใช้ /product
//console.log ด้้วย listen ออกมา

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

const myProod = [
    {  id: 1, title: "กระเป๋าหนังขนาดกลาง", price: 250, image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"  },
    { id: 2, title: "เสื้อยิดสีขาว", price: 300, image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"}, 
]

app.get("/products", (req, res)=>{
    res.json(myProod);
})

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
}) 