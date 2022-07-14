// 1/a ) O constructor serve para inicializar a classe apenas com os atributos desejados, podendo dessa forma inicializar diversas objetos pertecentes à mesma classe sem fazer uma confusão dentro do código.

//1/b) Nenhuma até ser criado um objeto com essa classe;

// 1/c) Através dos getters e setters. Getters quando queremos ler as informações que tem dentro da propriedade privas, e setter quando queremos alterar seu valor.

// 2)
// type Transaction = {
//     description: string,
//     value: number,
//     date: string
//   }

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription() {
    return this.description;
  }
  public getValue() {
    return this.value;
  }
  public getDate() {
    return this.date;
  }
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCPF() {
    return this.cpf;
  }
  public getName() {
    return this.name;
  }
  public getAge() {
    return this.age;
  }
  public getBalance() {
    return this.balance;
  }
  public getTransactions() {
    return this.transactions;
  }

}

// 3)

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}

