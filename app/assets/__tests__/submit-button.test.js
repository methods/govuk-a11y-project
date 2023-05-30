// Import the onSubmit function
const { onSubmit } = require('../javascripts/testing'); // Replace 'your-file' with the actual file name

// Test case for onSubmit function
test('Handles form submission correctly', () => {
  // Create a mock event object
  const event = {
    preventDefault: jest.fn(),
    target: {
      submit: jest.fn()
    }   
  };

  // Create a mock answer element
  const answer = {
    checked: true
  };

  // Call the onSubmit function
  onSubmit(event, answer);

  // Assertions
  expect(event.preventDefault).toHaveBeenCalled();
  expect(event.target.submit).toHaveBeenCalled();

});

//TODO how do we test redirect with window.location.href?
test('Redirects to score page when answer is not checked', () => {
  // Create a mock event object
  const event = {
    preventDefault: jest.fn(),
    target: {
      submit: jest.fn()
    }
  };

  // Create a mock answer element
  const answer = {
    checked: false
  };

 
  // Call the onSubmit function
  onSubmit(event, answer);



  // Assertions
  expect(event.preventDefault).toHaveBeenCalled();
  expect(event.target.submit).not.toHaveBeenCalled();
});