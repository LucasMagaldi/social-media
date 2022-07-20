import React from 'react';
import { Sidebar } from '../components/index';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`


const Main = () => {
  return (
    <Wrapper>
        <Sidebar />
    </Wrapper>
  )
}

export default Main;