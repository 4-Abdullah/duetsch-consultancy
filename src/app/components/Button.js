
function Button({type, onClick}) {
  return (
      <button onClick={onClick} className={`${type==="primary" ? "bg-black" :" bg-gray"}`} >{title}</button>
  )
}

export default Button