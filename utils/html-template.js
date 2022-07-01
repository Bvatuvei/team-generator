function buildCards(team) {
    function buildManager(manager) {
        return `
        <div class="col-sm-4">
        <div class="card text-bg-primary mb-3 mt-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text">Position: Manager</p>
          <span class="oi oi-clipboard"></span>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: ${manager.getEmail()}</li>
          <li class="list-group-item">Office #: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
      </div>`
    }
    function buildIntern(intern) {
        return `
        <div class="col-sm-4">
        <div class="card text-bg-warning mb-3 mt-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text">Position: Intern</p>
          <span class="oi oi-calculator"></span>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: ${intern.getEmail()}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
      </div>`
    }
    function buildEngineer(engineer) {
        return `
        <div class="col-sm-4">
        <div class="card text-bg-danger mb-3 mt-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text">Position: Engineer</p>
          <span class="oi oi-wrench"></span>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: ${engineer.getEmail()}</li>
          <li class="list-group-item">Github: ${engineer.getGithub()}</li>
        </ul>
      </div>
      </div>`
    }

    const cards = []

    // Favorite methods: .push, .map, .filter, .join
    cards.push(team
        .filter(team => team.getRole() === "Manager")
        .map(manager => buildManager(manager)))
    
        cards.push(team
            .filter(team => team.getRole() === "Engineer")
            .map(engineer => buildEngineer(engineer))
            .join(""))

            cards.push(team
                .filter(team => team.getRole() === "Intern")
                .map(intern => buildIntern(intern))
                .join(""))

    return cards.join("");
} 



module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
</head>
<body>
<nav class="bg-danger">
  <div class="container-fluid">
    <p class="text-center fs-1 navbar-brand mb-12 h1">Team!</p>
  </div>
</nav>
    <div class="row cards">
        ${buildCards(team)}
    </div>
</body>
</html>`
}