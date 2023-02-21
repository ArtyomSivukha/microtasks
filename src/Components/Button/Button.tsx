type ButtonType = {
    titleForButton: string
    callback:()=>void
}

export const Button = (props:ButtonType) => {

    const onclickhandler = () => {
        props.callback()
    }
    
  return(
      <button onClick={onclickhandler}>{props.titleForButton}</button>
  )
}