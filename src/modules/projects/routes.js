const controller = require('./controller');
const schema = require('./schema');

exports.map = {
  post: {
    '/': controller.create({
      schema: schema
    }),
    '/:title/relationships/:relation': controller.createRelation()
  },
  get: {
    '/': controller.read(),
    '/:title': controller.read(),
    '/:title/:related': controller.readRelated(),
    '/:title/relationships/:relation': controller.readRelation()
  },
  patch: {
    '/:title': controller.update({
      schema: schema
    }),
    '/:id/relationships/:relation': controller.updateRelation()
  },
  delete: {
    '/:title': controller.destroy(),
    '/:title/relationships/:relation': controller.destroyRelation()
  }
};
