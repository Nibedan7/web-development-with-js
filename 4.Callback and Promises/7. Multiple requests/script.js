async function fetchData() {
  const todoPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
  const postPromise = fetch('https://jsonplaceholder.typicode.com/posts/1');
  
  const [todoResponse, postResponse] = await Promise.all([todoPromise, postPromise]);

  const todo = await todoResponse.json();
  const post = await postResponse.json();

  const combinedData = { todo, post };
  console.log(combinedData);
}

fetchData();
