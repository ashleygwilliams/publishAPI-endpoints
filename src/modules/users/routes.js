const controller = require('./controller');
const schema = require('./schema');

exports.map = {
  post: {
    '/': controller.create({
      schema: schema
    }),
    '/:name/relationships/:relation': controller.createRelation()
  },
  get: {
    '/': controller.read(),
    '/:name': controller.read(),
    '/:name/:related': controller.readRelated(),
    '/:name/relationships/:relation': controller.readRelation()
  },
  patch: {
    '/:name': controller.update({
      schema: schema
    }),
    '/:name/relationships/:relation': controller.updateRelation()
  },
  delete: {
    '/:name': controller.destroy(),
    '/:name/relationships/:relation': controller.destroyRelation()
  }
};
