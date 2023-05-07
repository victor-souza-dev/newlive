import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
export default class Database {
  async Create({ data }) {
    data.password = bcrypt.hashSync(data.password, 12);
    await prisma.Vendedor.create({
      data: {
        ...data,
      },
    });
  }
  async getUser({ email }) {
    const user = await prisma.Vendedor.findUnique({ where: { email } });
    return user;
  }
  async getUserwithId({ id }) {
    const user = await prisma.Vendedor.findUnique({ where: { id } });
    return user;
  }
  async postVenda({ id, data }) {
    const venda = await prisma.Vendedor.update({
      where: {
        id,
      },
      data: {
        vendas: {
          create: {
            valor: data.valor,
          },
        },
      },
    });
    const oldvenda = await this.newUpdateVenda();
    let quantidadeDefault = 1;
    if (oldvenda != "vazia") {
      data.valor = oldvenda[0].valor + data.valor;
      quantidadeDefault = oldvenda[0].quantidade + 1;
      console.log(oldvenda[0].valor);
    }
    await prisma.totalVendas.create({
      data: {
        valor: data.valor,
        quantidade: quantidadeDefault,
      },
    });
    return venda;
  }
  async newUpdateVenda() {
    let ultimasVendas = await prisma.totalVendas.findMany({
      orderBy: { data: "desc" },
      take: 1,
    });
    if (ultimasVendas.length === 0) ultimasVendas = "vazia";
    return ultimasVendas;
  }
  async filterTotal(ano, mes, day, daylimit) {
    const start = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(day));
    const end = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(daylimit));
    end.setDate(end.getDate() + 1);

    const vendas = await prisma.totalVendas.findMany({
      orderBy: {
        data: "asc",
      },
      where: {
        data: {
          gte: start,
          lt: end,
        },
      },
    });

    return vendas;
  }

  async vendasDayFilter(ano, mes, day, daylimit) {
    const start = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(day));
    const end = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(daylimit));
    end.setDate(end.getDate() + 1);

    const vendas = await prisma.Vendas.findMany({
      orderBy: {
        data: "desc",
      },
      where: {
        AND: [{ data: { gte: start } }, { data: { lt: end } }],
      },
    });

    return vendas;
  }
}
