const mongoose = require('mongoose');
var Rom = mongoose.model('goods',{
  text :{
    type : String,
    require : true,
    minlength : 1,
    trim : true
  }
});
module.exports =  {Rom};
