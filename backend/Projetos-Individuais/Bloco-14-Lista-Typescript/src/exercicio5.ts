type ListaDeUsuarios = {
        name: string,
        email: string,
        role: string,
    };

const listaUsuarios: ListaDeUsuarios[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
];

const filtraAdmin: ListaDeUsuarios[] = listaUsuarios.filter((usuario) => {
    return usuario.role === "admin";
});

const emailAdmin = filtraAdmin.map((admin) => {
    return admin.email
});

console.log(emailAdmin);