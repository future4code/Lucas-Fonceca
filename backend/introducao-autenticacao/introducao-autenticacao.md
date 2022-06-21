1) a) Acredito que strings são melhores que números para representar ids porque as strings tem uma gama maior de caracteres do que os números;

   b) 

   ```typescript
   import { v4 } from "uuid";
   
   function generateId(): string{
       return v4
   }
   ```

   

2) a) A linha "as string" pede para o TypeScript considerar a informação do jwt como uma string, porque existe uma possibilidade de ela ser tipada como "jwt";

   b) 

   ```typescript
   import * as jwt from "jsonwebtoken";
   import Id from whereverItIs;
   
   const expiresIn = "13min"
   function generateToken(id: Id): string {
       const token = jwt.sign(
       {
           id
       },
       process.env.JWT_KEY as string,
       {
           expiresIn
       })
       return token
   }
   ```

   ```typescript
   export type Id = {
   	id: string
   }
   ```

   3) ```typescript
      app.post("/user/signup", async (req: Request, res: Response) => {
          try {
              if (!req.body.email || req.body.email.indexOf("@") === -1) {
                  throw new Error ("Email inválido");
              }
              if (!req.body.password || req.body.password.length < 6) {
                  throw new Error ("Senha inválida")
              }
              const dadosUsuario = {
                  email: req.body.email,
                  password: req.body.password
              };
              const id = generateId();
              
              await criarUsuari(id, dadosUsuario.email, dadosUsuario.password);
              const token = generateToken({
                  id,
              })
              res.status(200).send({token})
          } catch (err) {
              res.status(400).send({
                  messagem: err.message
              })
          }
      })
      ```

   4) ```typescript
      const getUserByEmail = async(email:string): Promise<any> => {
          const result = await connection.select("*").from(userTableName).where({email});
          return result[0]
      }
      ```

   5) ```typescript
      app.post("/user/login", async (req: Request, res: Response) => {
          try {
              if(!req.body.email || req.body.email.indexOf("@" === -1) {
                 throw new Error("Email inválido")
                 }
                 const dadosUsuario = {
                      email: req.body.email,
                      password: req.body.password
                  }
      
                  const usuario = await getUserByEmail(dadosUsuario.email)
                  if (usuario.password !== dadosUsuario.password) {
                      throw new Error("Senha inválida")
                  }
                  const token = generateToken({
                      id: usuario.id
                  })
                  res.status(200).send({token})
          } catch (err) {
              res.status(400).send({
                  message: err.message
              })
          }
      })
      ```

   6) a) A linha as any, assim como a linha "as string" da questão dois, fala ao typescript para considerar o tipo da variável payload como qualquer tipo. É necessário utilizar para não der erro de tipagem.

      b) 

      ```typescript
      import * as jwt from "jsonwebtoken";
      
      const getData = (token: string): Id => {
          const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
          const result = {
              id: payload.id
          }
          return result
      }
      ```

   7)  ```typescript
       public async getUserById(id: string): Promise<any> {
           const result = await this.connection.select("*").from(userTableName).where({id})
       	return result[0]
       }
       ```

      b)

      ```typescript
      app.get("/user/profile", async (req: Request, res: Response) => {
          try {
              const token = req.headers.authorization as string;
              
              const authenticationData = getData(token);
              const user = await getUserById(authenticationData.id);
              
              res.status(200).send({
                  id: user.id,
                  email: user.email
              })
          } catch(err){
              res.status(400).send({
                  message: err.message
              })
          }
      })
      ```

      