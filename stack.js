//program to implement stacks 

class stacks{
    constructor(container){
        this.container = [];
        let len = this.container.length;
    }

    display(){
        
        console.log(this.container)
    }

    insert(element){
        this.container.push(element);
    }

    remove(element){
        this.container.pop();
    }
}

const obj = new stacks();
obj.display();
obj.insert(5)
obj.insert(9)
obj.insert("hello")
obj.display();
obj.remove();
obj.display();
obj.remove();
obj.display();