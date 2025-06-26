import styled from 'styled-components';
function StyleComponent(){
    // styled-components is a library for styling in react
    // it allows us to write css in js and apply styles to components
    //There are two ways to use styled-components:
    //Method 1
    const StyledHeading = styled.h1`
        color: blue;
        background-color: lightgray;
        padding: 10px;
    `;

    //Method 2
    const StyledHeading2 = styled.h1({
        color: 'blue',
        backgroundColor: 'lightgray',
        padding: '10px'
    })
    
    return(
        <div>
            <StyledHeading>Styled Component 1</StyledHeading>
            <StyledHeading>Styled Component 2</StyledHeading>
            <StyledHeading>Styled Component 3</StyledHeading>
            <StyledHeading>Styled Component 4</StyledHeading>
            <br></br>
            <StyledHeading2>Styled Component 5</StyledHeading2>
            <StyledHeading2>Styled Component 6</StyledHeading2>
            <StyledHeading2>Styled Component 7</StyledHeading2>
            <StyledHeading2>Styled Component 8</StyledHeading2>
            

        </div>
    )
}

export default StyleComponent;