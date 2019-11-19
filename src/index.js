// app - Derby client applcation
module.exports = app => {
  app.modules = new Map();

  /**
   * Register module's handler to app
   *
   * @param String name - the name of the module
   * @param Function handler - a module handler
   */
  app.registerModule = (name, handler) => {
    if (!name) {
      throw new Error('Invalid app module. Handler name is missed');
    }

    if (app.modules.has(name)) {
      throw new TypeError(`The module with name '${name}' already exists`);
    }

    app.modules.set(name, handler);
  };

  /**
   * Get module's handler
   * @param String name - the name of the module
   */
  app.module = name => {
    if (!app.modules.has(name)) {
      throw new TypeError(`Undefined module by the name: ${name}`);
    }

    return app.modules.get(name);
  };
};
