import React from 'react';

 export const InfoCard = () => {
    return(
        <div className ={style.InfoCard}>
            <img  src='' alt=''/>
            <h5 className = {style.name}></h5>
            <h5 className= {style.gender}></h5>
            <h5 className={style.species}></h5>
            <h5 className={style.status}></h5>
            <h5 className={style.location}></h5>
        </div>
    )
}

//name--> results.name
//gender--> results.episode.gender
// species--> results.origin.species
//status ->> results.origin.status
// location -->> results.location.name

