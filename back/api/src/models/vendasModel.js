const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const { Schema } = mongoose;

// const VendedorSchema = new Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     auto: true,
//   },
//   email: {
//     type: String,
//     unique: true,
//   },
//   password: String,
//   username: String,
//   vendas: [{ type: Schema.Types.ObjectId, ref: 'Vendas' }],
// });

// const VendasSchema = new Schema({
//   _id: {
//     type: mongoose.Schema.Types.ObjectId,
//     auto: true,
//   },
//   vendedor: { type: Schema.Types.ObjectId, ref: 'Vendedor' },
//   valor: Number,
//   data: { type: Date, default: Date.now },
// });

const TotalVendasSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  valor: Number,
  quantidade: Number,
  data: { type: Date, default: Date.now },
});

const TotalVendas = mongoose.model('TotalVendas',TotalVendasSchema);



class Vendasoperations {
  async create({ data }) {
    data.password = bcrypt.hashSync(data.password, 12);
    await Vendedor.create(data);
  }

  async getUser({ email }) {
    const user = await Vendedor.findOne({ email });
    return user;
  }

  async getUserWithId({ id }) {
    const user = await Vendedor.findById(id);
    return user;
  }

  async postVenda({ id, data }) {
    const venda = await Vendedor.findByIdAndUpdate(
      id,
      {
        $push: {
          vendas: {
            valor: data.valor,
          },
        },
      },
      { new: true }
    );

    const oldVenda = await this.newUpdateVenda();

    let quantidadeDefault = 1;
    if (oldVenda !== 'vazia') {
      data.valor = oldVenda[0].valor + data.valor;
      quantidadeDefault = oldVenda[0].quantidade + 1;
      console.log(oldVenda[0].valor);
    }

    await TotalVendas.create({
      valor: data.valor,
      quantidade: quantidadeDefault,
    });

    return venda;
  }

  async newUpdateVenda() {
    let ultimasVendas = await TotalVendas.find()
      .sort({ data: 'desc' })
      .limit(1);

    if (ultimasVendas.length === 0) ultimasVendas = 'vazia';

    return ultimasVendas;
  }
  async filterTotal({valor,quantidade, ano, anoLimit, mesLimit, mes, day, daylimit }) {

    const vendas = await TotalVendas.find({
   });
    
  return vendas
  }
  
  

  async vendasDayFilter(ano, mes, day, daylimit) {
    const start = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(day));
    const end = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(daylimit));
    end.setDate(end.getDate() + 1);

    const vendas = await Vendas.find({
      data: {
        $gte: start,
        $lt: end,
      },
    }).sort({ data: 'desc' });

    return vendas;
  }
}
module.exports = { 
  Vendasoperations
 };
