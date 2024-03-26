export const Square = ({children, index, isSelected, updateBoard}) => {
  const classes = isSelected ? 'square selected' : 'square';
  
  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div className={classes} onClick={handleClick}>
      {children}
    </div>
  )
}