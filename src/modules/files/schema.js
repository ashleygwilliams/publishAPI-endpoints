module.exports = {
  body: {
    properties: {
      id: {
        type: 'integer'
      },
      path: {
        type: 'string'
      },
      type: {
        type: 'string'
      },
      links: {
        project: {
          type: 'string'
        }
      }
    }
  }
};
