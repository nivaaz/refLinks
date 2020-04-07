import React from 'react';
import './App.css';
import links from './data/links'
import socials from './data/socials'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)
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

const renderSocials = ()=>{
   const x = socials.map((key)=>{
     return (
       <div className="socialCard">
        <a href={key.link}> <FontAwesomeIcon icon={["fab", key.icon]}/> 
        <p className="social"> {key.social} </p>
        </a> 
       </div>
     )
   })
   return (<div className="socialCardsList">{x}</div>)
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

      <p> 23  🐨 </p>
      <p>Electrical Engineer turned (self taught) software engineer & entrepreneur. </p>
     
      </div>
      <h2 className="codes">Affiliate Codes & Links </h2>
      {renderCards()}
      {renderSocials()}
    </div>

  );
}

export default App;
