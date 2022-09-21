
import {app} from './app.js'
import './components/db/connection.js'
import {connection} from './components/db/connection.js'
import {Usuarios} from './components/schemas/user.js'
import {Post} from './components/schemas/post.js'


async function main(){
    
    try {
        Usuarios.sync();
        Post.sync();
        app.listen(process.env.PORT,()=>{
            console.log(`listening on port ${process.env.PORT}`)

        });
        
    } catch (error) {
        console.log(' this is an unexpected error')
        
    }
}

main();