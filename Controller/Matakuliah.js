const MatakuliahModel = require('../Models/Matakuliah')

exports.insertMatakuliah = (data) =>
new Promise((resolve, reject)  => {
    MatakuliahModel.create(data)
    .then(res => {
      resolve({
        error :false,
        pesan: 'Berhasil Input Data'
      })  
    })
    .catch(()=>{
      reject({
        error:true,
        pesan:'Gagal Input Data'
      })
    })
})