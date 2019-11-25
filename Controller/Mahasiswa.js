const MahasiswaModel = require('../Models/Mahasiswa')

exports.insertMahasiswa = (data) =>
new Promise((resolve, reject)  => {
    MahasiswaModel.create(data)
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