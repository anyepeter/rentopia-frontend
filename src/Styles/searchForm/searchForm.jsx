import  Styled  from "styled-components";

export const FormContainer = Styled.section`

width: 100%;
min-width: 200px;
height: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 0 1rem 0;
background-color: #F5F5F5;
`
export const Form = Styled.form`
width: 100%;
max-width: 1000px;
padding: 14px;
display: flex;
justify-content: space-between;
`

export const Properties = Styled.div`
display: grid;
grid-template-columns: [col] auto [col] auto [col] auto [col]; 
grid-template-rows: [row] auto [row] auto;
row-gap: 10px;
column-gap: 15px;
p{
    width: auto;
    padding: 2px;

    select{
        grid-column: col / span 1;
        grid-row: row ;
        width: 200px;
        height: 35px;
        padding: 0 5px 0 5px;
        border: 1px solid #ECECEC;
        border-radius: 5px;
    }
}
`
export const Input = Styled.p`
grid-column: col 2 / span 4 ;
grid-row: row ;

input{
    width: 500px;
    height: 35px;
    padding: 0 5px 0 5px;
    border: none;
    font-size:
    border-radius: 5px;
    font-family: ${( {theme }) => theme.fonts.primary};
}
`
export const InputCity = Styled.p`

grid-column: col 1 / apan 3;
grid-row: row 2;

input{
    width: 350px;
    height: 35px;
    padding: 0 5px 0 5px;
    border: none;
    font-size:
    border-radius: 5px;
    font-family: ${( {theme }) => theme.fonts.primary};
}
`

export const PriceRange = Styled.p`
    grid-column: col 4 / span 2 ;
    grid-row: row 2 ;
    input {
        width: 22rem;
        height: 35px;
    }
`

export const Options = Styled.p`
grid-column: col 1;
grid-row: row 3 ;
`

export const ButtonContainer = Styled.div`
width: auto;
input{
    width: 13rem;
    height: 35px;
    border: 1px solid #ECECEC;
    font-family: ${( {theme }) => theme.fonts.primary};
    color: #F5F5F5;
    font-weight: 400;
    background-color: #46c788;
}
`