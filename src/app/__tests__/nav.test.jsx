import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import MainNav from '../components/organisms/mainNav';;

describe('MainNav', () => {
  it('renders MainNav unchanged', () => {
    const { container } = render(<MainNav />)
    expect(container).toMatchSnapshot()
  })

  it('renders all menus', () => {
    render(<MainNav />)

    const First = screen.getByText('Projects');
    const Second = screen.getByText('Docs');
    const Third = screen.getByText('Command cheatsheet');
    const Fourth = screen.getByText('Your user key');

    expect(First).toBeInTheDocument()
    expect(Second).toBeInTheDocument()
    expect(Third).toBeInTheDocument()
    expect(Fourth).toBeInTheDocument()
  })
})