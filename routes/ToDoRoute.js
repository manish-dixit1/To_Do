const {Router} = require("express");
const { getToDo, saveToDo, updateToDO, deleteToDO } = require("../controllers/ToDoController");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDO)
router.post('/delete', deleteToDO)
//router.get/*('/save', saveToDo)*/('/',(req, res)=>{
  //  res.json({message: "Hi there..."})
//})

module.exports =router;