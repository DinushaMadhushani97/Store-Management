const express = require('express');
const stores = require('../models/stores');
const Stores = require('../models/stores');

const router = express.Router();

//save Stores

router.post('/store/save',(req,res)=>{

    let newStore= new Stores(req.body);

    newStore.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Stores saved successfully"
        });
    });
});

// get Stores

router.get('/stores',(req,res) =>{
    Stores.find().exec((err,stores) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStores:stores
        });
    });
});

// get a sepecific Stores

router.get("/store/:id",(req,res) =>{

    let storeId = req.params.id;

    Stores.findById(storeId,(err,store) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            store
        });
    });


});

//update Stores

router.put('/store/update/:id', (req,res)=>{
    Stores.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,store)=>{
            if(err){
                return res.status(400).json({error:err});   
            }
            return res.status(200).json({
                success:"updated Successfuly"    
            });
        }
    );
});

//delete post

router.delete('/store/delete/:id',(req,res) =>{
    Stores.findByIdAndRemove(req.params.id).exec((err,deletedStore) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete successful",deletedStore
        });

    });
});

module.exports = router;