import { render } from '@testing-library/react';
import { JobListingPage } from './Templates/JobListingPage';

describe('App Render',()=>{
  test('renders learn react link', () => {
    render(<JobListingPage />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
})


