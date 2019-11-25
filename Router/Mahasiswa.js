const Mahasiswa = require ('express')()
const MahasiswaController =require('../Controller/Mahasiswa')

Mahasiswa.post('/insert',(req,res) =>{
    MahasiswaController.insertMahasiswa(req.body)
    .then(result=>{
      res.json(result)
    }).catch(err =>{
      res.json(err)
    })
})

module.exports=Mahasiswa