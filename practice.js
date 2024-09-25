class Human{
    constructor(name){
        this.name = name;
    }
}

class Kid extends Human{
    constructor(name,kidniGarden){
        super(name);
        this.kidniGarden = kidniGarden;
    }
}

const kidObj = new Kid("levi","someKidniGarden");
console.log(kidObj.name);
console.log(kidObj.kidniGarden);