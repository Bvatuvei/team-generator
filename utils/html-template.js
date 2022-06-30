function buildCards(team) {
    function buildManager(manager) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.getName()}</h5>
          <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.getId()}</li>
          <li class="list-group-item">${manager.getEmail()}</li>
          <li class="list-group-item">${manager.getOfficNumber()}</li>
        </ul>
      </div>`
    }
    function buildIntern(intern) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${intern.getName()}</h5>
          <p class="card-text">Intern</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.getId()}</li>
          <li class="list-group-item">${intern.getEmail()}</li>
          <li class="list-group-item">${intern.getSchool()}</li>
        </ul>
      </div>`
    }
    function buildEngineer(engineer) {
        return `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${engineer.getName()}</h5>
          <p class="card-text">Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.getId()}</li>
          <li class="list-group-item">${engineer.getEmail()}</li>
          <li class="list-group-item">${engineer.getGithub()}</li>
        </ul>
      </div>`
    }

    const cards = []

    // Favorite methods: .push, .map, .filter, .join
    cards.push(team
        .filter(team => {team.getRole() === "Manager"})
        .map(manager => {buildManager(manager)}))
    
        cards.push(team
            .filter(team => {team.getRole() === "Engineer"})
            .map(engineer => {buildEngineer(engineer)})
            .join(""))

            cards.push(team
                .filter(team => {team.getRole() === "Intern"})
                .map(intern => {buildIntern(intern)})
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
</head>
<body>
    <header>Team</header>
    <div class="cards">
        ${buildCards(team)}
    </div>
</body>
</html>`
}