// import express from 'express'
// const app = express()
const btnToday = document.querySelector('#today') 
const btnWork = document.querySelector('#work')


btnToday.addEventListener('click',(req,res)=>{ 
    window.location.href = '/today'
})

btnWork.addEventListener('click',()=>{ 
    window.location.href = '/work'
})

