# Exercícios de Introdução SQL

### 1-a)

CREATE TABLE - Cria uma nova tabela
PRIMARY KEY - Indica uma chave primária
VARCHAR - Abreviação para Variable-length Character. Indica a variação possível de caracteres da string a ser passada. O valor vai entre parenteses, no caso do id e do nome, essa variação é de até 255 caracteres.
NOT NULL - Garante que a coluna com essa restrição não irá receber valores nulos (NULL).
DATE - Indica que o valor dessa coluna será uma data.

### 1 - b)

SHOW DATABASES - Mostra uma lista de base de dados no MySQL;
SHOW TABLES - Mostra uma lista de tabelas em uma base de dados do MySQL;

### 1 - c)

Ao chamar o DESCRIBE Nome_da_tabela, o MySQL Workbench exibe as informações da tabela com os nomes das colunas, o tipo, se a informação pode ou não ser nula, o tipo de chave e o valor padrão, tudo de acordo como o que foi definido ao criar a tabela.

### 2 - a)

```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"001",
    "Tony Ramos",
    400000,
    "1984-08-25",
    "male"
), (
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

### 2 - b)

Erro 1062, entrada duplicada para uma chave primária.

### 2 - c)

Faltou especificar no INSERT, os parametros birth_date e gender.

### 2 - d)

A tabela Actor precisa do valor para o name de cada ator, e este valor não pode ser null.

### 2 - e)

O valor de birth_date não pode receber um número.

### 3 - a) 

```sql
SELECT * FROM Actor WHERE gender = "female"
```

### 3 - b) 

```sql
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

### 3 - c)

```sql
SELECT * FROM Actor WHERE gender = "invalid";
```

Retornou uma tabela com todos os dados com "null". Provavelmente porque o gênero tem que ser definido.

### 3 - d)

```sql
SELECT id, name, salary FROM Actor WHERE salary <= 500000
```

### 3 - e)

Não reconheceu a coluna "nome", pois ela foi introduzida como "name".

Correção: 

```sql
SELECT id, name from Actor WHERE id = "002"
```

### 4 - a)

Seleciona todos o atores da tabela Ator desde que o nome se inicie com a letra A ou J e o salário seja maio que 300000.

### 4 - b)

```sql
SELECT * FROM Actor
WHERE (name NOT LIKE A%) AND salary > 350000
```

### 4 - c)

```sql
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%");
```

### 4 - d)

```sql
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR "%g%" OR "%A%" OR "%a%") AND salary BETWEEN 350000 AND 900000
```

### 5

```sql
CREATE TABLE Movies (
id VARCHAR(25) PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 synopsis TEXT NOT NULL,
 release_date DATE NOT NULL,
 rating INT NOT NULL 
);

INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUE (
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
), (
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
), (
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-12-11",
    8
), (
	"004",
    "O Auto da Compadecida",
    "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
    "2000-09-10",
    10
);
```

### 6 - a)

```sql
SELECT id, name, rating FROM Movies WHERE id = "002" 
```

### 6 - b)

```sql
SELECT * FROM Movies WHERE name = "O Auto da Compadecida";
```

### 6 - c)

```sql
SELECT id, name, synopsis FROM Movies WHERE rating >= 7;
```

### 7 - a)

```sql
SELECT * FROM Movies WHERE name LIKE "%vida%";
```

### 7 - b)

```sql
SELECT * FROM Movies WHERE name LIKE "%mãe%" OR synopsis LIKE "%mãe%";
```

### 7 - C)

```sql
SELECT * FROM Movies WHERE release_date < "2022-04-12";
```

### 7 - D)	

```sql
SELECT * FROM Movies WHERE release_date < "2022-04-12" AND (name LIKE "%ade%" OR synopsis LIKE "%ade%") AND rating > 7;
```

