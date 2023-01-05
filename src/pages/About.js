import React from 'react';
import AboutImg from '../assets/m8.3.jpeg';
import '../styles/About.css';

function About() {
    return (
        <div className='about'>
            <div className='aboutTop'
                style={{ backgroundImage: `url(${AboutImg})` }}
            ></div>
            <div className='aboutBottom'>
                <h1>ABOUT US</h1>
                <p>     Povestea a început în anul 2015. Proaspăt ieșit de pe băncile Facultății de Mecanică din cadrul Universității ”Gheorghe Asachi” din Iași, îmi doream să activez în domeniul auto pentru că acesta a reprezentat întotdeauna o pasiune pentru mine.
                    Pe atunci aveam o mașină la care țineam obsesiv și am achiziționat un aspirator cu injecție-extracție, urmăream deja cum funcționează ”cosmetica auto” și m-am simțit atras! Nu aveam certitudinea că voi reuși în acest domeniu, principalul motiv fiind reprezentat de partea financiară.
                    Pe data de 21.10.2015, în spatele căminului studențesc în care eram cazat, am făcut detailing pentru mașina unui prieten, aceasta a fost “corijarea” mea. A durat 9 ore deoarece mașina era foarte afectată, dar rezultatul a fost mulțumitor atât pentru proprietar, cât și pentru alții care au văzut pe viu “before/after”. A doua zi a venit altcineva în același loc, după care am continuat în același ritm.
                    Preturile erau mici, doar cât să îmi scot investiția în soluții și ceva în plus pentru a mă întreține.
                    După aproape un an de zile am găsit un garaj (mult spus garaj), mai exact un loc în care să îmi țin lucrurile (mereu am avut tendința de a investi pentru că doar așa puteam deveni mai bun). În acel loc erau multe service-uri și deja volumul de lucru crescuse satisfăcător. După încă un an am găsit alt spațiu care avea doar 18 mp, era minunat pentru mine pentru că-mi puteam desfășura activitatea în siguranță.
                    Numărul comenzilor a crescut, astfel a apărut și nevoia de a construi o echipă. Am construit personal un garaj de 35 mp.
                    A fost greu, dar nu imposibil. Prin seriozitate și perseverență am urcat treptat ceea ce astăzi se numește Don Garage. În momentul de față echipa este alcătuită din 3 persoane. Suntem ca o familie, la garaj suntem prieteni, iar în afara orelor de program mai mult decât prieteni. De la an la an investim în aparatură, în cursuri și mereu descoperim metode prin care să ne perfecționăm.
                </p>
            </div>
        </div>
    )
}

export default About
