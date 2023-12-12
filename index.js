const http = require('http');
const express = require('express');
const PORT = 8000;
const users = require("./MOCK_DATA.json");

const app = express();

app.get("/users", (req, res)=>{
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

app.get("/api/users", (req, res)=>{
    res.json(users);
})

// 1st way to write code

// app.get('/api/users/:id', (req, res)=>{
//     const id= Number(req.params.id);
        
//     const user= users.find((user)=>user.id===id);
//     return res.json(user);
// })

// app.post('/api/users/:id', (req, res)=>{
//     res.json()
// })

// app.patch('/api/users/:id', (req, res)=>{
//     res.json()
// })
// app.delete('/api/users/:id', (req, res)=>{
//     res.json()
// })

app.route("/api/users/:id").get((req, res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id===id);
    return res.json(user);
}).patch((req, res)=>{

}).delete((req, res)=>{

})

app.post('', ()=>{
    
})


app.listen(PORT, ()=>console.log("Server Started"));