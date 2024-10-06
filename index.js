const express = require('express')
const app = express()
const port = 3000


app.get('/users', (req, res) => {
    const users = [
        {
            name: "sharif", age: 20, id: 1,
        },
        {
            name: "sharif", age: 20, id: 2,
        },
    ]
    res.status(200).json({
        message: " successfully users",
        success: true,
        data: users
    })
})


app.get("/users/:id", (req, res) => {
    const users = [
        {
            name: "sharif", age: 20, id: 1,
        },
        {
            name: "sharif", age: 20, id: 2,
        },

    ]
    const user = users.find(user => user.id === Number(req.params.id))
    res.status(200).json({
        message: "successfully single user indifiy",
        success: true,
        data: user
    })
})

app.post("/users", (req, res) => {
    res.status(200).json({
        message: "user data post successfully ",
        success: true,
        data: { name: "sharif", age: 20, id: 3 }
    })
})
app.delete("/users/:id", (req, res) => {
    const users = [
        {
            name: "sharif", age: 20, id: 1,
        },
    ]
    const userId = Number(req.params.id);

    res.status(200).json({
        message: "delete user successfully",
        success: true,
        data: false
    })
})


app.patch("/users/:id", (req, res) => {
    const users = [
        {
            name: "sharif", age: 20, id: 1,
        },
    ]
    const id = req.params.id;
    const body = req.body;
    const remainingUsers = users.filter(user => user.id !== userId);

    const updateUSer = users.find(user => user.id === id)
    if (!updateUSer) {
        res.status(200).json({
            message: "updated successfully",
            success: true,
            data: updateUSer
        })
    }
    res.status(200).json({
        message: "delete successfully",
        success: true,
        data: remainingUsers
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})