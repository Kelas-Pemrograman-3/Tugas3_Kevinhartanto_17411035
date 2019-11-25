const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MatakuliahSchema = new Schema({
  kodemk : {
    type: String
  },
  namamk : {
    type: String
  },
  sks : {
    type: String
  },
  hari : {
    type: String
  },
  jam : {
    type: String
  },
  ruang : {
    type: String
  },
  namadosen : {
    type: String
  }
})

  module.exports = mongoose.model('Matakuliah',MatakuliahSchema)