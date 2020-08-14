const mongoose = require("mongoose");
const order = require("./order-schema");
const express = require("express")
const router = express.Router()
var newOrder = new order();

// router.get('/order',async(req,res,next)=>{
//     const post = await order.find()
//     res.send(post)
// })

exports.PostOrder = async (req, res) => {
    const post = new order({

      name:req.body.name,
      surname :req.body.surname,
      gender:req.body.gender,
      phone:req.body.phone,
      email:req.body.email,
      city:req.body.city,
      province:req.body.province,
      township:req.body.township,
      street:req.body.street,
      code:req.body.code,
      product :req.body.product[{
              hoodie:"Hoodie",
              sweater:"Sweater",
              tshirt:"T-Shirt",
              cropjersy:"Crop-Jersey"
          }]

    })

    await post.save()
    res.send(post)
    console.log(post);
  }

    exports.GetOrder = async(req,res)=>{
      const get = await order.find({})
     res.send(get);
     console.log(get);
    }
 
    


