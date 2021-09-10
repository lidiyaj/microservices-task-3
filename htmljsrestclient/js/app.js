async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<table class="table">
                            <thead>
							  <tr>
								<th scope="col">#id</th>
								<th scope="col">name</th>
								<th scope="col">username</th>
								<th scope="col">email</th>
							  </tr>
							</thead>
							<tbody>
							  <tr>
								<th scope="row">${user.id}</th>
								<td>${user.name}</td>
								<td>${user.username}</td>
								<td>${user.email}</td>
							  </tr>
							</tbody>
                        </table>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();