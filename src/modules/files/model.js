const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'files',
  idAttribute: 'path',
  project: function () {
    return this.belongsTo(require('../projects/model'));
  }
};

const classProps = {
  typeName: 'files',
  filters: {
    type: function (qb, value) {
      return qb.whereIn('type', value);
    },
    path: function (qb, value) {
      return qb.whereIn('path', value);
    }
  },
  relations: [
    'project'
  ]
};

module.exports = BaseModel.extend(instanceProps, classProps);
