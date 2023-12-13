const readlineSync = require('readline-sync');
class ToDo{
    private title:string[]=[];
    private description:string[]=[];
    private completionStatus:Boolean[]=[];

    public addTask():void{
        const title = readlineSync.question('Enter Title of your Todo Task : ');
        const description = readlineSync.question('Enter description of Todo Task : ');
        this.title.push(title);
        this.description.push(description);
        this.completionStatus.push(false);
        console.log(`Task Added successfully with title : ${title}`);
    }
    public updateStatus():void{
        const todoTaskTitle = readlineSync.question('Enter Title of your Todo Task which you want to mark as completed : ');
        for(let index=0; index<this.title.length; index++){
            if(todoTaskTitle.toLowerCase()==this.title[index].toLowerCase()){
                this.completionStatus[index] = true;
                console.log(`ToDo Task with title: ${this.title[index]}'s status is updates successfully`);
                return;
            }
        }
        console.log(`No task with title: ${todoTaskTitle} found in our records please try again with different todo Title`);
    }
    public deleteTodo():void{
        const todoTaskTitle = readlineSync.question('Enter Title of your Todo Task which you want to mark as completed : ');
        for(let index = 0; index<this.title.length; index++){
            if(todoTaskTitle.toLowerCase()==this.title[index].toLowerCase()){
                this.title.splice(index,1);
                this.description.splice(index,1);
                this.completionStatus.splice(index,1);
                console.log(`ToDo Task deleted successfully`);
                return;
            }
        }

        console.log(`No task with title: ${todoTaskTitle} found in our records please try again with different todo Title`);
    }

    public viewToDos():void{
        if(this.title.length==0){
            console.log("There is no task in your todo Yet");
            return;
        }
        console.log(`S.No     TITLE            DESCRIPTION       COMPLETION STATUS`)
        for(let index = 0; index <this.title.length; index++){
            console.log(`  ${index}   ${this.title[index]}       ${this.description[index]}      ${this.completionStatus[index]}`)
        }
    }
}

export {ToDo,readlineSync}