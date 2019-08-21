import connector from '../connector';
import metaFields from './MetaFields';
const Sequelize = require('sequelize');

const User = connector.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    accountId:{
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    ...metaFields
},{
    freezeTableName: true,
    underscored: true,
    timestamps: false
})

export default User;