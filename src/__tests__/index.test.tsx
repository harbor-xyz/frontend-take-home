
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Dashboard', () => {
  it('renders header items', () => {
    render(<Home />)

    const FirstButton = screen.getByText('Docs');
    const SecondButton = screen.getByText('Command cheatsheet');

    expect(FirstButton).toBeInTheDocument()
    expect(SecondButton).toBeInTheDocument()
  })
})