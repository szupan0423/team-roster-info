const genreateIntern = function (intern) {
    return`
    <div 
    `
}


generateHTML = (data) => {
    pageArray = [];
    for (let i = 0; i < data.legnth; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard)
        }
        if (role === 'Intern') {
            const internCard = genreateIntern(employee);
            pageArray.push(internCard)
        }
    }
    const employeeCards = pageArray.join('')
    const generateTeam = genreateInternPage(employeeCards);
    return generateTeam;
}
