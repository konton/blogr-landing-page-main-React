import React, { FC } from 'react'

interface Props{
    class: any
    children?: React.ReactNode;
}


export const Button: FC<Props> =(props) => {
    
    return (
      <button className={props.class}>{props.children}</button>
    )
  
}
