const addArticle = (title, author, date_published, article_text) => {

  const requestBody = {

    title: title,
    author: author,
    date_published: date_published,
    article_text: article_text

  }

  return fetch("http://localhost:3333/articles", {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': localStorage.getItem('session_token')
    },
    body: JSON.stringify(requestBody)

  }).then((res) => {

    if (res.status === 201) {

      return res.json();

    } else if (res.status === 400) {

      return res.json();

    } else {

      throw "Something Went Wrong"

    }

  }).then((resJson) => {

    return resJson

  }).catch((err) => {

    return Promise.reject(err)

  })

}

export const articleService = {

  addArticle


}