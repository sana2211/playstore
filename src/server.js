const express = require("express")
const app = express();
const PORT = 8000;
const data= require("./data.js")
app.get('/apps',(req,res)=>
{
const genre= req.query.genre
const sort = req.query.sort

if (genre)
{
const dataByGenres = 
data.filter(item=>item.Genres.includes(genre))
  res.send(dataByGenres)}
 else if (sort)
{
const dataBySort = 
data.sort((a, b) => a[`${sort}`] - b[`${sort}`] );
  res.send(dataBySort)}
  else {
      res.send(data)
  }
}
)
app.get('/',(req,res)=>{ res.send('Hello, world!') })
app.get('/api/user',(req,res)=>{ res.send([ { "id": 1, "username": "divyanat", "fullname": "Divya Natarajan" }, { "id": 2, "username": "dtarg", "fullname": "Daenerys Targaryen" }, { "id": 3, "username": "uragnar", "fullname": "Uhtred Ragnarsson" }, { "id": 4, "username": "bobbrown", "fullname": "bob brown" } ]) })



app.listen(PORT, () => { console.log(`Server listening at http://localhost:${PORT}`) })
