class User {
    protected _firstName: string = ''
    private _lastName: string = ''

    // constructor(private firstName: string, private lastName: string) {
    // }

    set firstName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._firstName = name;
    }

    set lastName(name: string) {
        if (name.trim() === '') {
            throw new Error('Invalid name');
        }
        this._lastName = name;
    }

    get fullName(): string {
        return this._firstName + ' ' + this._lastName;
    }

    static eid = 'USER';
}

console.log(User.eid);

const ahmet = new User();
ahmet.firstName = 'Ahmet';
ahmet.lastName = 'Zurnaci';
console.log(ahmet.fullName);


class Employee extends User {
    constructor(public jobTitle: string) {
        super();
    }

    work() {
        console.log(this._firstName);
        this._firstName = 'John';
    }
}

const employee = new Employee('Software Engineer');
console.log(employee.fullName);
employee.work();

//--------------------------------

