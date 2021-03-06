import React from "react"
import Styled from "styled-components"
import { Colors } from "../../../../config/style"

import { Link } from "react-router-dom"
const CountBoxStyled = Styled.div`
    border: 1px solid ${Colors.darkGray};
    padding: 15px 10px 25px;
    text-align: center;
    a {
        text-decoration: none;
    }
    h3 {
        font-size: 25px;
        margin: 10px 0;
        text-decoration: none;
    }
`

export default props => {
  return (
    <CountBoxStyled>
      <Link to={props.link || "/"}>
        <h3>{props.count}</h3>
        {props.text}
      </Link>
    </CountBoxStyled>
  )
}
