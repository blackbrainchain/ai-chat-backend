# ai-chat-backend

## Create User mutation

`mutation {
    createUser(createUserInput: {
        email: "testuser@test.com"
        password: "TestPassword12$"
    }){
        _id
        email
    }
}
`

## Find all users query

`
query {
    users {
        _id
        email
    }
}
`

## Single user query

`
query {
    user(_id: "kldkdkdkdkk--ID--kdldfs") {
        _id
        email
    }
}
`

## Update User mutation

`
mutation {
    uddateUser(updateUserInput : {
        _id: "kldkdkdkdkk--ID--kdldfs"
        email: "someOtherEmail@test.com"
        password: "SomeOtherPassword12$"
    })
    {
        _id
        email
    }
}
`

## Remove user mutation

`
mutation {
    removeUser(_id: "kldkdkdkdkk--ID--kdldfs")
    {
        _id
        email
    }
}
`

