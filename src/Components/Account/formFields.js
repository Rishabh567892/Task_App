export default {
  username: {
    minLength: 5,
    type: 'text',
    name: 'username',
    required: true
  },
  email: {
    type: "email",
    name: "email",
    required: true,
    minLength: 10,
  },
  password: {
    type: "password",
    name: "password",
    minLength: 8,
    required: true
  }
}