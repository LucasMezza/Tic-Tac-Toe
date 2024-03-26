import { Square } from './Square.js';

export const BoardModal = ({board, updateBoard}) => {
  return (
    <section className='board'>
      {
        board.map((field, index) => {
          return  <Square key={index} 
                          index={index}
                          updateBoard={updateBoard}>
                    {field}
                  </Square>
        })
      }
    </section>
  )
}