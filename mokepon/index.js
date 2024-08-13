const express = require("express")
const cors = requier("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
  constructor(id){
    this.id = id 
  }
}

app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`

  const jugador = new Jugador(id)

  jugador.push(jugador)

  res.send(id)
})

app.listen(8080, () => {
  console.log("Servidor funcionando")
})
