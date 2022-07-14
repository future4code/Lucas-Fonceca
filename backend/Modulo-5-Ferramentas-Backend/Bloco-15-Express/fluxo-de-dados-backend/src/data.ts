import { v4 as generateId } from "uuid";

type Products = {
  id: string;
  name: string;
  price: number;
};

export const productsArray: { list: Products[] } = {
  list: [
    {
      id: generateId(),
      name: "Camisa Oficial Masculina Le Coq CAM 2021 - JOGO 1",
      price: 279.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial Feminina Le Coq CAM 2021 - JOGO 1",
      price: 239.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial Juvenil Le Coq CAM 2021 - JOGO 1",
      price: 239.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial II Masculina Le Coq CAM 2021 - JOGO 2",
      price: 279.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial II Feminina Le Coq CAM 2021 - JOGO 2",
      price: 239.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial II Juvenil Le Coq CAM 2021 - JOGO 2",
      price: 239.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial III Masculina Le Coq CAM 2021 - JOGO 3",
      price: 279.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial III Feminina Le Coq CAM 2021 - JOGO 3",
      price: 239.9,
    },
    {
      id: generateId(),
      name: "Camisa Oficial III Juvenil Le Coq CAM 2021 - JOGO 3",
      price: 239.9,
    },
  ],
};
