const express = require('express')
// const res = require('express/lib/response')
const router = express.Router()

// @desc Login/Landing Page
// @route Get /

router.get('/', (req, res)=>{
 res.render('login', {
  layout:'login'
 })
})
// @desc Dashboard
// @route Get /dashboard

router.get('/dashboard', (req, res)=>{
 res.render('dashboard')
})


module.exports = router;