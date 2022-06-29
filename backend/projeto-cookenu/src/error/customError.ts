export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidTitle extends CustomError {
  constructor() {
    super(400, "Receita com o título inválido");
  }
}

export class InvalidDescription extends CustomError {
  constructor() {
    super(400, "O modo de preparo da receita está inválido");
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome de usuário inválido");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "E-mail do usuário inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class UserNotFound extends CustomError {
  constructor() {
    super(404, "Usuário não encontrado");
  }
}

export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado");
  }
}
