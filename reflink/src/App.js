import React from 'react';
import logo from './logo.svg';
import './App.css';
import links from './data/links'

/* component to render a single data cards. */
const LinkCard = (props)=>{
  return (<div className="brandCard">
    <h2>{props.brand}</h2>
    <p>{props.about}</p>
    <Link 
    link = {props.url} 
    text = {props.url}/>
    <h4>{props.code}</h4>
  </div>)
}
/* component to render links. */
const Link = (props)=>{
  if (props.big == true){
    return (
      <h1 className="headingLink"><a href={props.link}>{props.text}</a></h1>
    )  
  }else {
  return (
    <a href={props.link}>{props.text}</a>
  )
}
}

/* component to render links of cards */
const renderCards = ()=>{
  const items = links.map((key)=>{
    return (
    <LinkCard 
      brand={key.brand}
      about={key.about}
      url={key.url}
      code={key.code}
      big={false}
      />)
  })
  return (<div className="renderCards">{items}</div>)
}

/* component to hold everything together */
function App() {
  return (
    <div className="App">
      <div>
      <Link 
      text="@zaaaaavin"
      link="https://www.instagram.com/zaaaaavin/"
      big={true}
      /> 

      <p> 23 | 🐨 | Electrical Engineer turned self taught software engineer & entrepenur | self taught MUA</p>
      </div>
      {renderCards()}
    </div>

  );
}

export default App;
