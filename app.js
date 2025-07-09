fetch("http://localhost:8080/jefierProyecto/api/vehiculos")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error("Error:", err));
