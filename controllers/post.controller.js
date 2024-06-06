const models = require('../models');

function save(req, res){
   const post = {
      id: 1,
      nome: req.body.nome,
      sistema: req.body.sistema,
      tipo_maquina: req.body.tipo_maquina,
      porta: req.body.porta,
      endereco_ip: req.body.endereco_ip,
      endereco_mac: req.body.endereco_mac,
      fabricante: req.body.fabricante,
      usuario: req.body.usuario,
      acesso: req.body.acesso,
      ping: req.body.ping,
      rede: req.body.rede,
      processador: req.body.processador,
      memoria: req.body.memoria,
      disco: req.body.disco,
   }

   models.Post.create(post).then(result => {
     res.status(201).json({
        message: "Post criado com sucesso",
        post: result
     });
   }).catch(error => {
    res.status(500).json({
        message: "Something went wrong",
        error: error
     });
   });
}

function show(req, res){
   models.Post.findAll().then(result => {
     res.status(200).json(result);
   }).catch(error => {
      res.status(500).json({
         message: "Something went wrong",  
         error: error       
      })
   });
}

module.exports = {
    save: save,
    show: show
}



