import { render } from '@testing-library/react';


describe("Login render Page", () => {
    it('renders the Login page', () => {
      const {getByText} = render(<Login/>);
      expect(getByText(/Login/i)).toBeInTheDocument();
    });
  
    it('render 2 input components', () => {
      const {getByLabelText} = render(<Login/>);
      expect(getByLabelText(/Username/i)).toBeInTheDocument();
      expect(getByLabelText(/Password/i)).toBeInTheDocument();
    });
  
    it('renders a submit button', () => {
      const {getByText} = render(<Login/>);
      expect(getByText("Submit")).toBeInTheDocument();
    });
  });