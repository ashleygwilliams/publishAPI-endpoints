const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'projets',
  user: function () {
    return this.belongsTo(require('../user/model'));
  },
  files: function () {
    return this.hasMany(require('../files/model'));
  }
};

const classProps = {
  typeName: 'projects',
  filters: {
    user_id: function (qb, value) {
      return qb.whereIn('user_id', value);
    },
    title: function (qb, value) {
      return qb.whereIn('title', value);
    }
  },
  relations: [
    'user',
    'files'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
