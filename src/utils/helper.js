const getInitialContactState = () => ({
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: {
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  }
});

export default getInitialContactState;
