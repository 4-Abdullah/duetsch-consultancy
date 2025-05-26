"use client"
import Button from "./Button"
import Card from "./Card"

function Header({title, actionBtm, subtitle}) {
  function secondarybtnOnClick(){

  }
  return (
    <div className="pt-1">
    <div>Header</div>
    <Button type="secondary" onClick={secondarybtnOnClick} title="Button"  font='var(--font-poppins)'/>
    
    </div>
  )
}

export default Header