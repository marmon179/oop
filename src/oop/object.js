const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId:userId
        }
    }
    return action;
}

const action1 = deleteUser('12333r')
const action2 = deleteUser('gdgdd')

console.log(action1)
console.log(action2)