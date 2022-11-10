const Employee = reqire("./employee");

class Engineer extends Employee {
    
    constructor (name, id, email, github) {
        
        super (name, id, email);
        this.github = github;
    }
    
    getGithub() {
        return this.github;
    }
    
    getRole() {
        return "engineer";
    }
}

module.export = Engineer;