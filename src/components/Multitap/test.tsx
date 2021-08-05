import { render } from '@testing-library/react'

import Multitap from '.'

describe('<Multitap />', () => {
  it('should render the Multitap component', () => {
    const { container } = render(<Multitap />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
