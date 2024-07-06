import './App.css';
import { TwitterFollowCard } from './TwitteFollowCard';

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'AldoOmarG',
        name: 'Aldo Omar González Juárez',
        isFollowing: false
    },
    {
        userName: 'MoureDev',
        name: 'Brais Moure',
        isFollowing: true
    },
    {
        userName: 'adevaldes',
        name: 'Antonio de Valdés',
        isFollowing: false
    }
]

export const App = () => { 


   return (
        <section className='App'>

            {/*
                users.map(user => (
                    <TwitterFollowCard  
                        key={user.userName}
                        initialIsFollowing={user.isFollowing} 
                        userName={user.userName} 
                        name={user.name}
                    />
                ))
            */}

            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard  
                        key={userName}
                        initialIsFollowing={isFollowing} 
                        userName={userName} 
                        name={name}
                    />
                ))
            }
           
            
        </section>    
        
   )
}  