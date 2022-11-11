import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";
import "./MatchPage.scss";

export const MatchPage = () => {
  const [matches, setMatches] = useState();
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  if (!matches) {
    return <h1>Match not found</h1>;
  }

  return (
    <div className="MatchPage">
      <div className="year-selector">
      <h4>Select Year</h4>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1 className="page-heading">{teamName} matches in {year}</h1>
        {matches.map((match) => (
          <MatchDetailCard teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
