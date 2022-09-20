export function getAllQuotes() {
  let data = localStorage.getItem('posts') || '[]';
  data = JSON.parse(data);
  return data;
  }

export function getSingleQuote(quoteId) {
  let data = localStorage.getItem('posts') || '[]';
  data = JSON.parse(data);
  for(let index in data) {
    if (quoteId == data[index].id) {
      return data[index];
    }
  }
  data = {
    id: '',
    author: '',
    text: 'No Post Found'
  }
  return data;
}

export function addQuote(quoteData) {
    let posts = localStorage.getItem('posts') || '[]';
    posts = JSON.parse(posts);
    quoteData.id = Math.floor(1000 + Math.random() * 9000);
    posts.push(quoteData);
    localStorage.setItem('posts', JSON.stringify(posts));
  return null;
}

export function addComment(requestData) {
  let data = localStorage.getItem('posts') || '[]';
  data = JSON.parse(data);
  for(let index in data) {
    if (requestData.quoteId == data[index].id) {
      let comments =  data[index].comments || [];
      requestData.commentData.id = Math.floor(1000 + Math.random() * 9000);
      
      comments = [...comments, requestData.commentData];
      data[index].comments = comments;   
    }
  }
  localStorage.setItem('posts', JSON.stringify(data));
  return requestData.commentData.id;
}

export function getAllComments(quoteId) {
  let data = localStorage.getItem('posts') || '[]';
  data = JSON.parse(data);
  for(let index in data) {
    if (quoteId == data[index].id) {
      return data[index].comments || [];
    }
  }
  return [];
}
