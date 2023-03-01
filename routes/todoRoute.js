const express=require("express");
// const {Router}=require ('express');
const { getToDo, saveToDo,updateToDo,deleteToDo,loginfn,registerfn } = require('../controllers/todocontroller');
// const { RegisterSchema } = require("../validationSchema/registerSchema");

// const router=Router()
const router=express.Router()


// router.post('/login',loginfn);
// router.post('/register',RegisterSchema,registerfn);
router.get('/view',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

module.exports=router;