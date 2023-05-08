import axios from "axios";
import React from "react";

export default async function getTotalVendas(){
    const vendas = await axios.get('http://localhost:3000')
    return vendas
}