import { useState } from "react";
//import { Link } from 'react-router-dom';
import RankListInfo from "./RankListInfo";

export default function RankList() {
  return (
    <div className="RankList">
      <h3>Top 10 movies in 2021</h3>
      <ol>
        {RankListInfo.map((movie) => {
          return (
            <li key={movie.id}>
                <span>{movie.name}</span>
            </li>
          );
        })}
      </ol>
    </div>
  )
}
