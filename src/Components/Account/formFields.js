export default {
  username: {
    minLength: 5,
    type: 'text',
    name: 'username',
    required: true
  },
  email: {
    type: "email",
    required: true,
    minLength: 10,
  },
  password: {
    type: "password",
    minLength: 8,
    required: true
  }
}