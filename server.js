import {app} from "./app.js"

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.route("/users").get((
    get,res,next)=>{

        res.status(200).json({
            users:[],
            success:false   
        })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Example app listening on portm ${port}`)
})