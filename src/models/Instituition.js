const db = require("./db");


  const Instituition = db.sequelize.define("instituition", {
    name: {
      type: db.Sequelize.STRING
    },
    province: {
      type: db.Sequelize.STRING
    },
    description:{
      type: db.Sequelize.STRING
    }
  })
/*

  Instituition.sync({ force: true }).then(() => {
    console.log('Tabela criada com sucesso!');
  }).catch((err) => {
    console.error('Erro ao criar a tabela:', err);
  });
*/





module.exports = Instituition
