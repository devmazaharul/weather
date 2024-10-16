import CurrencyAPI from "@everapi/currencyapi-js";
import React, { useEffect, useState } from "react";

export default function Currencyconverter() {
  const [currency, setcurrency] = useState({
    from: "USD",
    to: "BDT",
  });

  const [current, setcurrent] = useState("");
  const [amount, setamount] = useState("");

  const client = new CurrencyAPI(
    "cur_live_aoZdu4RCwVz5BUfixnbugTBKtw4x5DDJouy1PYAt"
  );

  useEffect(() => {
    client
      .latest({
        base_currency: currency.from,
        currencies: currency.to,
      })
      .then((response) => {
        const { data, meta } = response;
        setcurrent(parseInt(data[currency.to].value));
      });
  }, [currency]);


  function handlechange(e,name){

    setcurrency({...currency,[name]:e})
    
  }




  return (
    <div className="bg-gradient-to-r  from-indigo-200  to-purple-300  p-3 border w-full rounded-sm">
      <h1 className="capitalize font-bold text-center py-3">currency converter</h1>

<div className="flex items-center gap-2 w-full mx-auto">
<select onChange={(e)=>handlechange(e.target.value,"from")} value={currency.from} className="w-[45%] py-2 rounded-sm outline-none">
    <option value="BDT">BDT</option>
    <option value="USD">USD</option>
    <option value="INR">INR</option>
    <option value="PKR">PKR</option>
    <option value="eur">EUR</option>
    <option value="CAD">CAD</option>
    <option value="AFN">AFN</option>
    <option value="ALL">ALL</option>
    <option value="AMD">AMD</option>
    <option value="ARS">ARS</option>
    <option value="AUD">AUD</option>
    <option value="AZN">AZN</option>
    <option value="BAM">BAM</option>
    <option value="BGN">BGN</option>
    <option value="BHD">BHD</option>
</select>
<p className="w-[5%]">TO</p>
<select onChange={(e)=>handlechange(e.target.value,"to")} value={currency.to} className="w-[45%] py-2 rounded-sm outline-none" >
<option value="BDT">BDT</option>
<option value="USD">USD</option>
    <option value="INR">INR</option>
    <option value="PKR">PKR</option>
    <option value="eur">EUR</option>
    <option value="CAD">CAD</option>
    <option value="AFN">AFN</option>
    <option value="ALL">ALL</option>
    <option value="AMD">AMD</option>
    <option value="ARS">ARS</option>
    <option value="AUD">AUD</option>
    <option value="AZN">AZN</option>
    <option value="BAM">BAM</option>
    <option value="BGN">BGN</option>
    <option value="BHD">BHD</option>
</select>
</div>




      <input
        onChange={(e) => setamount(e.target.value)}
        type="number"
        className="rounded-md font-semibold text-gray-600 border  w-full my-3 py-2 px-2 outline-none"
        placeholder="Enter amount"
      />

      <p>
        {amount} {currency.from} = {current * amount} {currency.to}
      </p>
    </div>
  );
}
