import styled from "styled-components"

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 800px;
  border: 1px red solid;
  height: 100%;
`

export const Post = styled.div`
  color: #3d3d3d;
  height: 180px;
  width: 90%;
  border-radius: 2px;
  margin: 10px auto;
  padding-left: 25px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 4px -1px rgba(190,190,190,1);
`

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`

export const Text = styled.div`
  font-size: 14px;
`

export const Reactions = styled.div`
  display: flex;
`
export const MeToo = styled.div`
:first-child{ font-weight: 500px; }
  
`
export const Heart = styled.div`
  
`