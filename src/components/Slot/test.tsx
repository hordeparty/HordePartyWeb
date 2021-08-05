import { render } from '@testing-library/react'

import Slot from '.'

describe('<Slot />', () => {
  it('should render the Slot component', () => {
    const { container } = render(<Slot />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
