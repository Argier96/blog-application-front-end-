const url = "http://localhost:3000";

const addPostDiv = document.getElementById('addPosts');

addPostDiv.innerHTML= `
    <form action="${url}/addPost" method="post" enctype="multipart/form-data">
        <label for ="title">title: </label>
        <input type ="text" name ="title" placeholder ="Title"></input>
        <label for ="body"> Body: </label>
        <textarea  type="text" name="body" placeholder="Your text here...." style="height: 70px; width: 70%" required></textarea>
        <input  type="hidden" name="author" value ="riteshg"/>
        <input type ="hidden" name ="date" value ="${new Date()}"/>
        <button type="submit" id="submit1" style="width: 100px">Add Post</button>
    </form>`;

//getting items by id 
const postDiv = document.getElementById('Posts');
const createPostsCards = (posts) => {
    postDiv.innerHTML="";
    for (let i=0;i<posts.length;i++){
        
        //creating elements to view the posts
        const postTitle = document.createElement('h1');
        const postAuthor = document.createElement('h2');
        const postBody = document.createElement('p');
        const postTime = document.createElement('h3');
        const li = document.createElement('li');

        postTitle.innerText = posts[i].title;
        postAuthor.innerText=posts[i].author;
        postBody.innerText=posts[i].body;
        postTime.innerText=posts[i].date;


        li.append(postTitle);
        li.append(postAuthor);
        li.append(postBody);
        li.append(postTime);
        postDiv.appendChild(li);
        
    }
}

//AJAX CALL
const getPosts = async () => {
    try {
      const response = await fetch(url + "/getPost");
      const posts = await response.json();
      console.table(posts);
      createPostsCards(posts);
    } catch (e) {
      console.log(e.message);
    }
  };
  getPosts();
  