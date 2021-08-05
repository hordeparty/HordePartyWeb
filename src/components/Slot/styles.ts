import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 20rem;
  height: 3rem;
  border: 5px solid #000;
  border-radius: 5px;
  display: flex;

  > div:first-child {
    border-right: 5px solid #000;
    width: 15rem;
  }
`

export const Divider = styled.div`
  width: 10rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`

export const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: #000;
`
