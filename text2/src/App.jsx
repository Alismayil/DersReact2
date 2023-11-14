import './App.css';
import React from 'react'
import Card from './components/card';
import Counter from './components/Counter';

const fakeApi=[
  {id:1,
    image:'https://i.guim.co.uk/img/media/9876b46ee7c737955468e595318d845c715b7d93/552_304_2691_1614/master/2691.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42060c25a8d06afe9bd7320935d284c1',
    text:"Neymar",
    price:200000000,
    rating:10
  },
  {id:1,
    image:'https://i.guim.co.uk/img/media/9876b46ee7c737955468e595318d845c715b7d93/552_304_2691_1614/master/2691.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42060c25a8d06afe9bd7320935d284c1',
    text:"Neymar",
    price:200000000,
    rating:10
  },
  {id:1,
    image:'https://i.guim.co.uk/img/media/9876b46ee7c737955468e595318d845c715b7d93/552_304_2691_1614/master/2691.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=42060c25a8d06afe9bd7320935d284c1',
    text:"Neymar",
    price:200000000,
    rating:10
  }
]


function App() {
  return (
    <div className='header'>
    {
      fakeApi.map((item)=>(
        <Card {...item}/>
      ))
    }



    {/* <Counter/> */}

    </div>
  )
}

export default App














// ---------------------------------------

