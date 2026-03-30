import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: colum;
    align-items: center;
    justify-content:center;
    height:100vh; //vh(viewport height) 800px의 1%
`
const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
`

const MainPage = () => {

    return (
        <Wrapper>
            <Title>Hello~ React</Title>
        </Wrapper>
    )
}

export default MainPage