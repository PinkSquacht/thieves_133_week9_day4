import { useEffect, useState } from 'react'

interface Team {
    id: string
    name: string
    country: string
    logo: string
}


const FootballAPI = () => {
    const [team, setTeam] = useState<Team>({
        id: '',
        name: '',
        country: '',
        logo: ''
    })
        useEffect(() => {
            getTeam()
        }, [team.id])

        const getTeam = async () => {
            const response = await fetch(`https://api-football-v1.p.rapidapi.com/v3/teams/`, {
                headers: {
                    'x-rapidapi-key': '245ba35ab3msh1da9ef63049ffbbp1dd614jsn46761806bbc6', 
                    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
                }
            });
            const data = await response.json()
            setTeam({
                id: data.id,
                name: data.name,
                country: data.country,
                logo: data.logo
            })
        }
  return (
    <>
        <h1 className="text-center">Football API</h1>
        <div className="w-25 mx-auto">
            <input type="text" placeholder="Enter a team number" />
        </div>
        
    </>

  )
}
export default FootballAPI