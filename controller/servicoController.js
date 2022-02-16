let modelServico = require("../model/servico.json")

const servicoController = {
    listaServicos:(req,res)=>{
        res.send(modelServico);
    },
    criarServico:(req, res)=>{
        console.log(req.body)
        //res.send(req.body)
        res.render('cadastro')
    },
    exibeServico:(req, res)=>{
        res.render('cadastro')
        
    }
}


module.exports = servicoController
