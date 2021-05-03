class DeleteUserAction {
    constructor() {
        this.type = 'DELETE-USER';
        this.payload = {
            userId: userId
        }
    }
}

const action1 = new DeleteUserAction(35333)
const action2 = new DeleteUserAction(989898)
console.log(action1)
console.log(action2)