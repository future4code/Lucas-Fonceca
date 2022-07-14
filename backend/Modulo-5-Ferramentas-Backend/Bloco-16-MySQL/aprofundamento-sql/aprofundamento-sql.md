## Exercício 1:

**a) Comando:**

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

**O que faz:** Deleta a coluna de salário da tabela Actor;

**b) Comando:**

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

**O que faz:** Muda o nome da coluna "gender" para "sex";

**c) Comando:**

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

**O que faz:** Altera a coluna gender para que ela aceite strings com até 255 caracteres;

**d)**

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```



## Exercício 2:

**a)** 

```sql
UPDATE Actor
SET name = "Iarima Castro Alves Cardoso", birth_date = "1993-12-18"
WHERE id = "003"
```

**b)**

```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

```sql
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

**c)** 

```sql
UPDATE Actor
SET name = "Isis Valverde", salary = "300000", birth_date = "1987-02-17", gender = "female"
WHERE id = "005";
```

**d)**

## Exercício 3:

**a)** 

```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

**b)**

```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 100000;
```



## Exercício 4:

**a)**

```sql
SELECT MAX(salary) FROM Actor
```

**b)**

```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

**c)**

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female"
```

**d)**

```sql
SELECT SUM(salary) FROM Actor;
```



## Exercício 5:

**a)** A query retorna a quantidade de atores (gender = male) e atrizes (gender = female) da tabela Actor;

**b)**

```sql
SELECT id, name FROM Actor
ORDER BY name DESC;
```

**c)**

```sql
SELECT * FROM Actor
ORDER BY salary ASC;
```

**d)**

```sql
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;
```

**e)**

```sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```



## Exercício 6:

**a)**

```sql
UPDATE Movies
SET playing_limit_date = "2022-07-26"
WHERE id = "001";
```

**b)**

```sql
ALTER TABLE Movies CHANGE rating rating FLOAT;
```

**c)**

```sql
UPDATE Movies
SET playing_limit_date = "2022-07-26"
WHERE id = "001";
```

```sql
UPDATE Movies
SET playing_limit_date = "2021-12-31"
WHERE id = "002";
```

**d)**

```sql
DELETE FROM Movies WHERE id = "004";
```

```sql
UPDATE Movies
SET synopsis = "um filme bacana"
WHERE id = "004";
```

