export class CharactersService {
    get() {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
    }

    getPage(pageNum) {
        return fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`)
            .then(response => response.json())
    }
}

//  komentari su dole





















































// demo => demo
// demo => {
//   return demo;
// }

// ako imam vise linija onda koristim blok funkcije, ALI TO ZNACI DA MORAM DA IMAM I RETURN U TOM BLOKU!!!!


// AKO IMAM  .then(response => response.json()) NEMA POTREBE DA KORISTIM BLOK FUNKCIJE I SINTAKSA IZGLEDA OVAKO 
//.then(response => response.json())

//ISTO TO MOGU DA ZAPISEM I U BLOKU ALI MI JE POTREBAN I RETURN!!!




// sto se tice class komponente ona mora da ima construktor i render
//DA BI CLASA BILA KOMPONENTA ONA MORA IMATII     --->>  extends React.Component  <<<--------
