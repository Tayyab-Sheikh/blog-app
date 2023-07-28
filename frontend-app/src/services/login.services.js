const login = (email, password) => {

  const requestBody = {
    email: email,
    password: password
  }

  return fetch("http://localhost:3333/login", {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Specify that the request body is in JSON format
    },
    body: JSON.stringify(requestBody)

  }).then((res) => {

    if (res.status === 200) {

      return res.json();

    } else if (res.status === 400) {
      console.log(res)
      return res.json();

    } else {

      throw "Something Went Wrong"

    }

  }).then((resJson) => {

    return resJson

  }).catch((err) => {

    console.log(err);
    return Promise.reject(err)

  })

}

const register = (firstName, lastName, email, password) => {

  const requestBody = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password
  }

  return fetch("http://localhost:3333/users", {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)

  }).then((res) => {

    if (res.status === 201) {

      return res.json();

    } else if (res.status === 400) {
      console.log(res)
      return res.json();

    } else {

      throw "Something Went Wrong"

    }

  }).then((resJson) => {

    return resJson

  }).catch((err) => {

    console.log(err);
    return Promise.reject(err)

  })

}

const logout = () => {

  return fetch("http://localhost:3333/logout", {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': localStorage.getItem('session_token') // Specify that the request body is in JSON format
    },

  }).then((res) => {

    if (res.status === 200) {

      return res;

    } else if (res.status === 400) {
      console.log(res)
      return res.json();

    } else {

      throw "Something Went Wrong"

    }

  }).then((resJson) => {

    return resJson

  }).catch((err) => {

    console.log(err);
    return Promise.reject(err)

  })

}

export const authService = {

  login,
  register,
  logout

}