const Matakuliah = require ('express')()
const MatakuliahController =require('../Controller/Matakuliah')

Matakuliah.post('/insert',(req,res) =>{
    MatakuliahController.insertMatakuliah(req.body)
    .then(result=>{
      res.json(result)
    }).catch(err =>{
      res.json(err)
    })
})

module.exports=Matakuliah