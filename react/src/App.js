import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import styled from 'styled-components';

const container = document.getElementById('app');

const StyledDiv = styled.div`
    background-color: red;
    width: 100px;
    height: 100px;
`;

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>Example</h1>
            <StyledDiv>
                <p>Example</p>
            </StyledDiv>
        </div>
    );
}

function Error() {
    return (
        <div>
            <h1>404</h1>
        </div>
    );
}

function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Root />, container);