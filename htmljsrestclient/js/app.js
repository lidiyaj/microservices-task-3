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
	
	let top = `<table class="table">
                            <thead>
							  <tr>
								<th scope="col">#id</th>
								<th scope="col">name</th>
								<th scope="col">username</th>
								<th scope="col">email</th>
							  </tr>
							</thead>
							<tbody>`;
							
	html += top;
	
    users.forEach(user => {
        let htmlSegment = `<tr>
								<td scope="row">${user.id}</td>
								<td>${user.name}</td>
								<td>${user.username}</td>
								<td>${user.email}</td>
							  </tr>`;

        html += htmlSegment;
    });
	
	let bottom = `</tbody>
                        </table>`;
						
	html += bottom;

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();