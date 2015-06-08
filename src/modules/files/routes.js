const controller = require('./controller');
const schema = require('./schema');

exports.map = {
  post: {
    '/': controller.create({
      schema: schema
    }),
    '/:path/relationships/:relation': controller.createRelation()
  },
  get: {
    '/': controller.read(),
    '/:path': controller.read(),
    '/:path/:related': controller.readRelated(),
    '/:path/relationships/:relation': controller.readRelation()
  },
  patch: {
    '/:id': controller.update({
      schema: schema
    }),
    '/:path/relationships/:relation': controller.updateRelation()
  },
  delete: {
    '/:path': controller.destroy(),
    '/:path/relationships/:relation': controller.destroyRelation()
  }
};
