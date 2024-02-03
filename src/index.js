const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const Instituition = require("./models/Instituition");
const { Op } = require("sequelize");
//Configurar
//Template engine
app.set('views',__dirname+"/views");
app.engine(
  "handlebars",
  handlebars.create({ defaultLayout: "main" }).engine
);

//
app.set("view engine", "handlebars"); 


//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));

//Rotas


app.get("/instituitions/:id", (req, res)=>{
const id = req.params.id;
 Instituition.findAll({order: [["id", "DESC"]], 
 where: {
  id: {
    [Op.eq]: id  
  }
}

}).then(function(instituitions){
    const serviceData = instituitions.map(instituition => instituition.get({ plain: true }));
   
    res.status(200).send({data: serviceData });
  }).catch(function(error) {
    console.error("Erro ao buscar a instituição:", error);
   res.status(500).send({ error: "Erro ao buscar a instituição." });
  });

})

app.get("/instituitions/search/:name", (req, res)=>{
  const name = req.params.name;
  
   Instituition.findAll({
    order: [["id", "DESC"]], 
   where: {
    name: {
      [Op.like]: `%${name}%`  
    }
  }
  
  }).then(function(instituitions){
     
      const serviceData = instituitions.map(instituition => instituition.get({ plain: true }));
     
      res.status(200).send({data: serviceData });
    }).catch(function(error) {
      console.error("Erro ao buscar a instituição:", error);
     res.status(500).send({ error: "Erro ao buscar a instituição." });
    });
  
  })
  


app.listen(8081, function (){
  console.log("A rodar...");
});
