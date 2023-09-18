const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const wrapper = require('./wrapper/index')

// Ruta para servir archivos HTML desde la carpeta "public"
app.get('*', async (req, res) => {
  const ruta = req.url;
  const archivoPath = path.join(__dirname, 'public', ruta + '/index.html');
  if (fs.existsSync(archivoPath)) {    
    let wrapperHtml = await wrapper.createWrapper(ruta)
    if(wrapperHtml){
        res.send(wrapperHtml);
    }else {        
        res.sendFile(archivoPath);
    }
  } else {
    const archivoPath = path.join(__dirname, 'public', ruta);
    if(fs.existsSync(archivoPath)){
        res.sendFile(archivoPath);
    }else {
        res.status(404).send('no encontrado');
    }
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});