const Square = ({onClick, children}) => {
  return (
    <div onClick={onClick}>{children}</div>
  )
}

export default Square