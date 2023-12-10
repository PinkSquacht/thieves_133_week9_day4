import { useEffect, useState } from "react";

interface Team {
  id: string;
  name: string;
  country: string;
  logo: string;
}

const FootballAPI = () => {
  const [id, setId] = useState<string>("")
  const [team, setTeam] = useState<Team>({
    id: "",
    name: "",
    country: "",
    logo: "",
  });
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId (event.target.value)
  }
  useEffect(() => {
    if (id){
        getTeam();
    }
    
    console.log(team);
  }, [id]);

  const getTeam = async () => {
    const response = await fetch(
      `https://api-football-v1.p.rapidapi.com/v3/teams?id=${id}`,
      {
        headers: {
          "x-rapidapi-key":
            "245ba35ab3msh1da9ef63049ffbbp1dd614jsn46761806bbc6",
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    console.log(data)
    const teamData = data.response[0].team
    console.log(teamData)
    setTeam({
        id: teamData.id,
        name: teamData.name,
        country: teamData.country,
        logo : teamData.logo
    })
  };
  return (
    <>
      <h1 className="text-center">Football API</h1>
      <div className="w-25 mx-auto">
        <input type="text" placeholder="Enter a team number" value={id} onChange={handleInputChange}/>
      </div>
      {team.id && (
        <div>
          <h2>{team.name}</h2>
          <p>Country: {team.country}</p>
          <img src={team.logo} alt={`${team.name} Logo`} />
        </div>
      )}
    </>
  );
};
export default FootballAPI;
