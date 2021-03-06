const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.applicant = require("../models/applicant.model.js")(sequelize, Sequelize);
db.banner = require("../models/banner.model.js")(sequelize, Sequelize);
db.booth = require("../models/booth.model.js")(sequelize, Sequelize);
db.company = require("./companies.model.js")(sequelize, Sequelize);
db.destination = require("../models/states.model.js")(sequelize, Sequelize);
db.graphics = require("../models/graphics.model.js")(sequelize, Sequelize);
db.invitation = require("../models/invitations.model.js")(sequelize, Sequelize);
db.menu = require("../models/links.model.js")(sequelize, Sequelize);
db.mat = require("../models/materials.model.js")(sequelize, Sequelize);
db.program = require("../models/program.model.js")(sequelize, Sequelize);
db.reps = require("../models/reps.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.visitor = require("../models/visitor.model.js")(sequelize, Sequelize);
db.vfair = require("../models/vfair.model.js")(sequelize, Sequelize);

module.exports = db;
