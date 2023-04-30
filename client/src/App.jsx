import styles from "./index.module.css"
import sqlLogo from "./assets/sql-server.png"
import { useState } from "react"



function App() {
  const [queryDescription, setQueryDescription] = useState("")

  return (
    <main className={styles.main}>
     <img src={sqlLogo} alt="" className={styles.icon} /> 
     <h3>Generate SQL with AI</h3>
     <form>
      <input type="text"
      name="query-description"
      placeholder="Describe your query"
      onChange={()=> setQueryDescription(e.target.value)} />
      <input type="submit" value="Generate Query" />



     </form>



    </main>  )
}

export default App
