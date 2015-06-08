const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'projects',
  idAttribute: 'title',
  user: function () {
    return this.belongsTo(require('../users/model'));
  },
  files: function () {
    return this.hasMany(require('../files/model'));
  }
};

const classProps = {
  typeName: 'projects',
  filters: {
    user_name: function(qb, value) {
      return qb.whereIn('user_name', value);
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
