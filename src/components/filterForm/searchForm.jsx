import { useState } from 'react'
import { Form, FormContainer,
   Input, 
   InputCity,
    Properties, 
    PriceRange, 
    Options,
    ButtonContainer } from '../../Styles/searchForm/searchForm'
import { ThemeProvider } from 'styled-components'
import { theme } from "../../Styles/Global.styled";

const SearchForm = () => {

  return(
    <ThemeProvider theme={theme}>
    <FormContainer>
        <Form>
            <Properties>
            <p>
            <select>
              <option>--Choose--</option>
              <option>Appartment</option>
              <option>Studio</option>
              <option>Single Room</option>
            </select>
            </p>

            <Input>
              <input type='text' placeholder='Enter City' />
            </Input>

            <InputCity>
              <input type='text' placeholder='Enter Quater' />
            </InputCity>

            <PriceRange>
              <input type='range' />
            </PriceRange>
            <Options>
              <input type='checkbox' />
              </Options>
            </Properties>
           <ButtonContainer>
              <input type='submit' />
           </ButtonContainer>
        </Form>
    </FormContainer>
    </ThemeProvider>
  )
  
}

export default SearchForm