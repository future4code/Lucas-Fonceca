# Exercícios User Roles

**Exercício 1**

<u>A)</u>

```mysql
ALTER TABLE nome_da_tabela ADD COLUMN role VARCHAR(255) DEFAULT "normal" 
```

<u>B</u> 

```typescript
import * as jwt from "jsonwebtoken";


  cont expiresIn = "1min";
  const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

 const getData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }


type AuthenticationData {
  id: string;
  role: string;
}
```

<u>C</u>

```typescript
app.post("/signup", async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const id = generateId();

    const hashPassword = await hash(userData.password);

    await createUser(id, userData.email, hashPassword, userData.role);

    const token = generateToken({
      id,
      role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

<u>D</u>

```typescript
app.post("/login", async (req: Request, res: Response) => {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await getUserByEmail(userData.email);

    const compareResult = await compare(
      userData.password,
      user.password
    );

    if (!compareResult) {
      throw new Error("Invalid password");
    }

    const token = generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

**Exercício 2**

```typescript
app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticationData = getData(token);

    if (authenticationData.role !== "normal") {
      throw new Error("Only a normal user can access this funcionality");
    }

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: authenticationData.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

