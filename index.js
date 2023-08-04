import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000
let tasks = [{id:1,task:'coding',type:'work',completed:false},
    {id:2,task:'presentasi',type:'work',completed:false},
    {id:3,task:'olahraga',type:'today',completed:false},
    {id:4,task:'baca',type:'today',completed:false}]

    
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(express.static('public')) 
    
    function createTask(req, res, where) {
        const {task} = req.body;
        const newTask = { id: tasks.length + 1, task, type:where }; 
        tasks.push(newTask);
        res.redirect(`/${where}`);
      }

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/today',(req,res)=>{
    res.render('today.ejs',{tasks})
})
app.get('/work',(req,res)=>{
    res.render('work.ejs',{tasks})
})

app.post('/today/buat',(req,res)=>{
    createTask(req,res,'today')
})
app.post('/work/buat',(req,res)=>{
    createTask(req,res,'work')
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
})