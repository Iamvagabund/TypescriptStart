import React, { useState } from 'react'
import { FC } from 'react';

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primaty'
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: (num: number) => void;
}

const Card: FC<CardProps> =
  ({ width,
    height,
    variant,
    onClick,
    children
  }) => {

    const [state, setState] = useState(0)
    return (
      <div style={{
        width, height,
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
      }}
        onClick={() => onClick(state)}
      >
        {children}
        < div > dsdasdsa</ div>
      </div >
    )
  }

export default Card