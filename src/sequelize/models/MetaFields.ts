const Sequelize = require('sequelize');

export default {
    createdAt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.STRING,
        allowNull: true
    },
    deletedAt: {
        type: Sequelize.STRING,
        allowNull: true
    }
}
