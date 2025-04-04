import React from 'react'
import ReactDom from 'react-dom/client'
//Peguei de 03-pizza-menu\pizza-menu\public\data.js
const pizzaData = [
 {
  name: 'Focaccia',
  ingredients: 'Bread with italian olive oil and rosemary',
  price: 6,
  photoName: 'pizzas/focaccia.jpg',
  soldOut: false
 },
 {
  name: 'Pizza Margherita',
  ingredients: 'Tomato and mozarella',
  price: 10,
  photoName: 'pizzas/margherita.jpg',
  soldOut: false
 },
 {
  name: 'Pizza Spinaci',
  ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
  price: 12,
  photoName: 'pizzas/spinaci.jpg',
  soldOut: false
 },
 {
  name: 'Pizza Funghi',
  ingredients: 'Tomato, mozarella, mushrooms, and onion',
  price: 12,
  photoName: 'pizzas/funghi.jpg',
  soldOut: false
 },
 {
  name: 'Pizza Salamino',
  ingredients: 'Tomato, mozarella, and pepperoni',
  price: 15,
  photoName: 'pizzas/salamino.jpg',
  soldOut: true
 },
 {
  name: 'Pizza Prosciutto',
  ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
  price: 18,
  photoName: 'pizzas/prosciutto.jpg',
  soldOut: false
 }
]

//O pulo do gato do React é pode usar a mesma função várias vezes, igual abaixo com pizza, mas ai vamos aprender a dar valores diferentes para a mesma função
function App() {
 return (
  <div>
   <h1>Hello Garotinhus</h1>
   <Pizza />
   <Pizza />
   <Pizza />
  </div>
 )
}

//Posso chamar direto lá em root.render com <Pizza /> ou dentro de <app> que já foi chamada, mas ai põe  uma div antes dela
//return  return <h2>um</h2><p>dois</p> não funciona, pq return só funciona com um item
function Pizza() {
 return (
  <div>
   <img src="/pizzas/spinaci.jpg" alt="pizza Spinaci"></img>
   <h2>Pizza Spinaci</h2>
   <p>Tomato, mozarella, spinach, and ricotta cheese</p>
  </div>
 )
}

//React Version 18 ORIGINAL
//const root = ReactDom.createRoot(document.getElementById('root'))
//root.render(<App />)

//React Version 18 com strictmode
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
 //É aqui que vou chamar as funções criadas antes
 <React.StrictMode>
  <App />
 </React.StrictMode>
)
