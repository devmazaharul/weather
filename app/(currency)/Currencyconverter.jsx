import CurrencyAPI from '@everapi/currencyapi-js'
import React, { useEffect, useState } from 'react'

export default function Currencyconverter() {

    const [currency, setcurrency] = useState({
        
        from:"USD",
        to:"BDT"
    })


    const [current, setcurrent] = useState('')
    const [amount, setamount] = useState('')


const client=new CurrencyAPI("cur_live_aoZdu4RCwVz5BUfixnbugTBKtw4x5DDJouy1PYAt")



useEffect(()=>{
    client.latest({
        base_currency: currency.from,
        currencies: currency.to
    }).then(response => {
      const {data,meta}=response;
    setcurrent(parseInt(data[currency.to].value) )
    });
},[])

  return (
    <div className='bg-indigo-400 shadow-lg p-3 border w-full rounded-md'>
  <h1>currency converter</h1>
        <input onChange={(e)=>setamount(e.target.value)} type="number" className='bg-indigo-400 font-semibold text-white border border-indigo-300 w-full my-3 py-2 px-2 outline-none' placeholder='Enter amount'/>
        

<p>{amount} {currency.from} = {current * amount} {currency.to}</p>

    </div>
  )
}
