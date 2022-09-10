import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

import SmoothieCard from "../components/SmoothieCard"

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  console.log(supabase)

  useEffect(() => {
    const fetchSmoothies = async () => {
      // This will fetch data from our database in our supabase backend
      const {data, error} = await supabase
        // This is selecting the table we are selecting from
        .from("smoothies") 
        // This is selecting type of rows from from the table
        .select()
        if (error){
          setFetchError("Could not fetch smoothies")
          console.log(error)
          setSmoothies(null)
        }
        if (data){
          setSmoothies(data)
          setFetchError(null)
        }

    }
    fetchSmoothies()
  },[])

  return (
    <div className="page home">
      <h2>Home</h2>
      <div>{fetchError && (<p>{fetchError}</p>)}</div>
      <div className="smoothie">
        {smoothies && (smoothies.map(smoothie => <SmoothieCard key={smoothie.id} smoothie={smoothie}/>))}
      </div>
    </div>
  )
}

export default Home