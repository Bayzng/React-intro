import React from 'react'
// https://www.motocms.com/website-templates/demo/173218.html

const Data = ({image, text, icon}) => {

  const myText = [
    {textBar: "Home"},
    {textBar: "About"},
    {textBar: "Services"},
    {textBar: "Portfolio"},
    {textBar: "Features"},
    {textBar: "News"},
    {textBar: "Contact"},
  ]


  return (
    <div>
        <nav>
            <img src={image} alt={image} />
            <ul>
                {myText.map((value, index) => {
                  return <li>{value.textBar}</li>
                })}
            </ul>
            <div>{icon}</div>
        </nav>
    </div>
  )
}

export default Data;