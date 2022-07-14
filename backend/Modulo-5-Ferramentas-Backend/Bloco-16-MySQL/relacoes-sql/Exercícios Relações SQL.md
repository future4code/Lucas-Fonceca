# Exercícios Relações SQL



## Exercício 1

**a)** A chave estrangeira (ou "foreign key") é uma forma de relacionar duas ou mais tabelas entre si através do id.

**b)**

```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"1",
"Excelente filme!",
8,
"001"
);
```

**c)**

```sql
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"2",
"Filme meio pombo",
3,
"008"
);
```

Erro 1452. Fala que não a chave estrangeira ta com problemas;

**d)**

```sql
ALTER TABLE Movies DROP	COLUMN rating;
```

## Exercício 2:

**a)** Linha por linha, seria algo tipo:

- Cria uma tabela de nome MovieCast (Elenco do Filme);
- Atribui um valor de no máximo 255 caracteres ao id do filme;
- Atribui um valor de no máximo 255 caracteres ao id do ator;
- Explica que esse valor do id do filme, na verdade é o valor do id da tabela Movies, acessada por meio de uma chave estrangeira;
- Explica que esse valor do id do ator, na verdade é o valor do id da tabela Actor, acessada por meio de uma chave estrangeira;

**b)**

```sql
INSERT INTO MovieCast (movie_id, actor_id)
VALUES 
("001", "001"),
("001", "002"), 
("004", "003"), 
("004", "006"), 
("003", "003"), 
("002", "004");
```

**c)**
Literalmente o mesmo erro da questão 1/c.

**d)**
Erro 1451. Não é possível deletar ou atualizar uma linha pai. 

## Exercício 3

**a)** Linha por linha, seria algo do tipo:

- Seleciona todas as informações da tabela Movie;
- Confere se o id da tabela Movie aparece na tabela Rating como "movie_id". Caso apareça, retorna essa informação.

**b)**

```sql
SELECT name, Movies.id, Rating.rate
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

