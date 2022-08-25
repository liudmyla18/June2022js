// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
let url = new URL(location.href);
console.log(url);
let u = JSON.parse(url.searchParams.get('id'))
console.log(u);
localStorage.setItem( 'lastUsers',JSON.stringify(u));

fetch(`https://jsonplaceholder.typicode.com/users/${u.id}/users`)
  .then(resp => resp.json())
  .then(users => {

    let div = document.createElement('div');
    document.body.appendChild(div);

    for (const user of users) {

      let divId = document.createElement('div');
      divId.classList.add(`div`)
      divId.innerText = `id: ${user.id}`;
      div.appendChild(divId);


      let divName = document.createElement('div');
      divName.classList.add(`div`)
      divName.innerText = ` name: ${user.name}`;
      div.appendChild(divName);


      let divEmail = document.createElement('div');
      divEmail.classList.add(`div`)
      divEmail.innerText = ` email ${user.email}`;
      div.appendChild(divEmail);

      let divUserName = document.createElement('div');
      divUserName.classList.add(`div`)
      divUserName.innerText = ` username: ${user.username} `;
      div.appendChild(divUserName);

      let divPone = document.createElement('div');
      divPone.classList.add(`div`)
      divPone.innerText = `  phone:${user.phone}`;
      div.appendChild(divPone);


      let divAddress = document.createElement(`div`);
      divAddress.innerHTML = (
        `city :${user.address.city}
       street: ${user.address.street}
       suite: ${user.address.suite}
       zipcode: ${user.address.zipcode}
      geolocation : ${user.address.geo.lat}, ${user.address.geo.lng}`)
      divAddress.classList.add(`div`)
      div.appendChild(divAddress);

      let divCop = document.createElement(`div`);
      divCop.classList.add(`div`)
      divCop.innerHTML = (
        `company:${user.company.name}
         catchPhrase:${user.company.catchPhrase}
         bs :${user.company.bs}`)
      div.appendChild(divCop);

      const button = document.createElement('button');
      button.classList.add('button')
      button.innerText = 'Click';

      button.addEventListener('click', function () {
        let generator = () => {
          fetch(`https://jsonplaceholder.typicode.com/users/${u.id}/posts`)
            .then(resp => resp.json())
            .then(posts => {
              let ul = document.createElement('ul');
              ul.classList.add(`ul`)

              for (const post of posts) {

                let li = document.createElement('p');
                li.classList.add(`li`)
                li.innerText = post.title;
                ul.appendChild(li);

                let a = document.createElement('a');
                a.classList.add(`butt`)
                a.href = `post_of_current_user.html?data=${JSON.stringify(post)}`;
                a.innerText = 'post-details';
                li.appendChild(a)

              }

              document.body.appendChild(ul);

            });

        }
        generator();
        button.disabled = true;
      })

      document.body.appendChild(button);

// break


      }

  });






// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
