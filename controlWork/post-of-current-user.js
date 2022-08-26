// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
let url = new URL(location.href);
console.log(url);
let u = JSON.parse(url.searchParams.get('data'))
console.log(u);
localStorage.setItem( 'lastUsers',JSON.stringify(u));

let ul = document.createElement('div');
document.body.appendChild(ul);
ul.classList.add(`p`)

fetch(`https://jsonplaceholder.typicode.com/users/${u.userId}/posts`)
  .then(resp => resp.json())
  .then(posts => {
    console.log(posts)
    for (const post of posts) {
      let p2= document.createElement(`div`);
      p2.classList.add(`i`)
      p2.innerText = `user id:${post.userId} `
      ul.appendChild(p2);

      let p1 = document.createElement(`div`);
      p1.classList.add(`bloc`)
      p1.innerText = `id:${post.id} `
      p2.appendChild(p1);

      let tit = document.createElement('h4');
      tit.classList.add(`t`)
      tit.innerText = `title: ${post.title}`;
      ul.appendChild(tit);

      let bod = document.createElement(`p`);
      bod.classList.add(`b`)
      bod.innerText = `body: ${post.body}`;
      ul.appendChild(bod);
    }
  });


fetch(`https://jsonplaceholder.typicode.com/posts/${u.id}/comments`)
  .then((response) => response.json())
  .then(comments => {
    console.log(comments)

    let div = document.createElement(`div`)
    document.body.appendChild(div)
    div.classList.add(`comm`)

    function recursion(item){
      for(const it of comments){
        if ( typeof comments[it] !==`object`){
          let comm = document.createElement(`li`)
          comm.classList.add(`comment`)
          comm.innerText=(` id:${it.id}; email:${it.email} name:${it.name} - - ${it.body}; `)
          div.appendChild(comm)
        }
        else {
          recursion(item[it])
        }
      }
}
recursion(comments)

  });
