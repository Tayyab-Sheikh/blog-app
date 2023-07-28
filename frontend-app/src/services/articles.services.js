const getAll = () => {

  return fetch("http://localhost:3333/articles", {

    method: 'GET',
    headers: {
      'X-Authorization': localStorage.getItem('session_token')
    }
  }).then((res) => {

    if (res.status === 200) {

      return res.json();

    } else if (res.status === 401) {
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

const getArticleById = (articleId) => {

  return fetch("http://localhost:3333/articles/" + articleId, {

    method: 'GET',
    headers: {
      'X-Authorization': localStorage.getItem('session_token')
    }
  }).then((res) => {

    if (res.status === 200) {

      return res.json();

    } else if (res.status === 401) {
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

export const articleService = {

  getAll,
  getArticleById

}