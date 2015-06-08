const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'users',
  idAttribute: 'name',
  projects: function () {
    return this.hasMany(require('../projects/model'));
  },
};

const classProps = {
  typeName: 'users',
  filters: {
    name: function (qb, value) {
      return qb.whereIn('name', value)
    },
  },
  relations: [
    'projects'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
