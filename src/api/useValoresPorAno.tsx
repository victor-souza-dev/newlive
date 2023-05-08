import { useEffect, useState } from "react";
import { getTotalVendas } from "./GetTotalVendas";

export function useValoresPorAno() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getTotalVendas().then((response: any) => {
      const data = response.data.data;
      const dadosAgrupadosPorAno = data?.reduce(
        (agrupamento: any, dado: any) => {
          const ano = new Date(dado.data).getFullYear();
          if (!agrupamento[ano]) {
            agrupamento[ano] = {
              label: ano.toString(),
              data: [],
            };
          }
          agrupamento[ano].data.push(dado.quantidade);
          return agrupamento;
        },
        {}
      );
      setData(Object.values(dadosAgrupadosPorAno));
    });
  }, []);
  return data;
}
