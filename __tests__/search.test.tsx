/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from '@testing-library/react'
import Search from '../components/search'

test('should render search component', () => {
  const props = {
    search: '',
    handleChangeSearch: () => {},
    criteria: 2,
    handleChangeCriteria: () => {}
  }
  render(<Search {...props} />)

  const inputElement = screen.getByTestId('search-input')
  expect(inputElement).toBeInTheDocument()
  expect(inputElement).toHaveValue('')

  const textFieldElement = screen.getByTestId('criteria-select')
  expect(textFieldElement).toBeInTheDocument()
  expect(textFieldElement).toHaveValue('2')
})

export {}
