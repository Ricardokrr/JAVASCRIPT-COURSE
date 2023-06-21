// TOP-LEVEL AWAIT 

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
  
    return { title: data.at(-1).title, text: data.at(-1).body };
  };
  
  const lastPost = getLastPost();
  console.log(lastPost);

  const lastPost2 = await getLastPost();
  console.log(lastPost2);