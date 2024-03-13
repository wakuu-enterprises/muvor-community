import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
export function LoginButton() {

    const { 
        loginWithRedirect, 
        user,
        isAuthenticated, 
        isLoading
    } = useAuth0();
    // !!user&&!isLoading&&isAuthenticated&&console.log(user, isLoading, isAuthenticated)
    !!user&&!isLoading&&isAuthenticated&&axios.get('http://localhost:9111/get_mvr_wallet')
    .then(wallet => console.log(wallet))
    .catch(err => console.error(err))
    return (
        <button onClick={() => loginWithRedirect()}>Join or Login</button>
    )
}