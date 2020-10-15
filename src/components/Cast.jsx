import React from "react";

function Cast() {
  return (
    <div className="container-fluid" id="cast">
      <h2>
        Cast | <small>Money Heist</small>
      </h2>
      <div className="cast-section">
        <ul>
          <li>
            <ion-icon name="star-outline"></ion-icon>
            <a href="https://en.wikipedia.org/wiki/%C3%9Arsula_Corber%C3%B3">
              {" "}
              Úrsula Corberó
            </a>
          </li>
          <li>Alba Flores</li>
          <li>Enrique Arce</li>
          <li>Belén Cuesta</li>
          <li>Paco Tous</li>
        </ul>
        <ul>
          <li>
            <ion-icon name="star-outline"></ion-icon>
            <a href="https://en.wikipedia.org/wiki/%C3%81lvaro_Morte">
              {" "}
              Álvaro Morte
            </a>
          </li>
          <li>Miguel Herrán</li>
          <li>Darko Peric</li>
          <li>Fernando Cayo</li>
          <li>María Pedraza</li>
        </ul>
        <ul>
          <li>
            <ion-icon name="star-outline"></ion-icon>
            <a href="https://en.wikipedia.org/wiki/Itziar_Itu%C3%B1o">
              {" "}
              Itziar Ituño
            </a>{" "}
          </li>
          <li>Jaime Lorente</li>
          <li>Hovik Keuchkerian</li>
          <li>Rodrigo de la Serna</li>
          <li>Kiti Mánver</li>
        </ul>
        <ul>
          <li>Pedro Alonso</li>
          <li>Esther Acebo</li>
          <li>Luka Peroš</li>
          <li>Najwa Nimri</li>
        </ul>
      </div>
    </div>
  );
}

export default Cast;
