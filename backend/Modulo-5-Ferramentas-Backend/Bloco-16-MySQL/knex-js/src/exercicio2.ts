import { connection } from "./connection"

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};


// A)

export const updateSalary =async (
    id:string,
    salary: number
    ): Promise<void> => {
    await connection("Actor")
    .update({
        salary: salary
    })
    .where("id", id);
}

// B)

export const deleteActorById =async (id:string): Promise<void> => {
    await connection("Actor")
    .delete().where("id", id);
}

// C) 

const averageSalaryByGender =async (gender:string) => {
    const result = await connection("Actor")
    .avg("salary")
    .where({gender});

    return result[0].salary
}