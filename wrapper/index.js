const loteria = require('./loteria')

async function createWrapper(url){
    if(url == '/loteria'){
        return await loteria.inyectHtml(url)
    }else {
        return false
    }

}

module.exports = {
    createWrapper
  };