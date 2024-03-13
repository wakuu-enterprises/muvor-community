import { useAuth0 } from "@auth0/auth0-react"

export function ProfileXt() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <>Loading!</>
    isAuthenticated && window.alert(user?.picture)
}