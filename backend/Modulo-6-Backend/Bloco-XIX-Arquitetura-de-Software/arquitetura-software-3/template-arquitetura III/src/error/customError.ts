export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido");
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido");
  }
}

export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida");
  }
}

export class PasswordTooShort extends CustomError {
  constructor() {
    super(400, "A senha precisa ter pelo menos 8 caracteres");
  }
}

export class InvalidTitle extends CustomError {
  constructor() {
    super(400, "Título do filme inválido");
  }
}
export class InvalidDescritption extends CustomError {
  constructor() {
    super(400, "Sinópse do filme inválida");
  }
}
export class InvalidDuration extends CustomError {
  constructor() {
    super(400, "Duração do filme inválido");
  }
}
export class InvalidYear extends CustomError {
  constructor() {
    super(400, "Ano de lançamento do filme inválido");
  }
}
