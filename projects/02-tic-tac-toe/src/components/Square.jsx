//we created the square component that will represent each cell of the game
//also it will receive through the props speacially one function that it will be manage with an event
export default function Square ({ children, isSelected, updateBoard, index }) {
    const className = `square ${isSelected ? "is-selected" : ""}`;
    const handleClick = () => {
      updateBoard(index);
    };
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    );
  };
