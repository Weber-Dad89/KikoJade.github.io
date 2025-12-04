// Class for Project

// Create Player class (receives name and role from form submission)
export class Player {
    #hp
    #ap
    #role;

    constructor(name, role) {
        this.name= name;
        this.#hp= 100;
        //this.#ap= 7;
        this.#ap= playerActionPoints;
        this.role= role;
    }

//  Methods to be used for the player character

    attack(enemy, ap) {
        console.log(this.name + " attacks " + enemy.name);
        playerActionPoints = ap 
    }

    defend(enemy) {
        
    }

    flee(enemy) {

    }

    function () {
        // TODO: figure out what to do here later
    }


    get hp() {
        return this.#hp;
    }

    set hp(value) {
        switch(role) {
            case 'fighter':
            case 'knight':
                this.#hp= value + 100
                break;

            case 'sage':
            case 'witch':
                this.#hp= value + 25
                break;

            case 'minstrel':
            case 'mystic':
            this.#hp= value + 50
            break;
        }
    }

    get role() {
        return this.#role;
    }

    set role(role) {
        const validRoles= ["fighter", "sage", "knight", "minstrel", "mystic", "witch"];
        if (role.includes(validRoles.toLowercase())) {
            this.#role= role;
        }
        // if (validRoles.includes(role.toLowerCase())) {
        //     this.#role= role;
        // }
    }
}

//  Create the enemy class (include enemy attributes, enemy type, and the enemy methods)
export class Enemy {
    #hp
    #enemyActionPoints= 5;
    #img

    constructor(type, hp,) {
        this.type= type;
        this.#hp= hp;
    }

    get enemyType() {
        this.type= type;
    }

    set enemyType(type) {
        const enemyType= ['striker', 'archer', 'blocker'];
        this.type= type;

    }
    
    set enemyImg(image) {
        this.#img = image;
    }

    get enemyImg() {
        return this.#img;
    }
}