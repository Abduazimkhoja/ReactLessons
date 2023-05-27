import React, { useCallback, useMemo, useState } from 'react'
import Two from '../two'

export default function One() {
   console.log("parent");
   
   const [count, setCount ] = useState(0)

   const dataMemo = useMemo(() => {
      return {text: "static"}
   }, [])

   const dataCall = useCallback(() => {
      return {text: "static"}
   }, [])


  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => setCount(count+1)}>Parent render</button>
      <Two dataMemo = {dataMemo} dataCall = {dataCall}/>
    </div>
  )
}
