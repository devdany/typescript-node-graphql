const Sequelize = require('sequelize');

import config from '../../config/dbconfig';

const dbConnectConfig = process.env.NODE_ENV !== 'DEV' ? config.product : config.development;
const Op = Sequelize.Op;
export default new Sequelize(
  dbConnectConfig.schema,
  dbConnectConfig.username,
  dbConnectConfig.password,
  {
    'host': dbConnectConfig.host,
    'dialect': dbConnectConfig.dialect,
    operatorsAliases: {
        $and: Op.and,
        $or: Op.or,
        $eq: Op.eq,
        $gt: Op.gt,
        $lt: Op.lt,
        $lte: Op.lte,
        $like: Op.like,
        $ne: Op.ne
    },
  }
)
