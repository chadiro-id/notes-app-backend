// Api handler for users.
class UsersHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }
}

module.exports = UsersHandler;