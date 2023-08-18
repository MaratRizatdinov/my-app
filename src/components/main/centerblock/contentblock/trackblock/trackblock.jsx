import React from 'react';
import "./trackblock.css";

function Trackblock(){
    
    const trackInfo =[
      { id:1, 'track title': 'Guild','track comment':'','track author': 'Nero','track album': 'Welcome Reality', 'track time': '4:44'},
      { id:2, 'track title': 'Elektro','track comment':'','track author': 'Dynoro, Outwork, Mr. Gee','track album': 'Elektro', 'track time': '2:22'},
      { id:3, 'track title': 'I’m Fire','track comment':'','track author': 'Ali Bakgor','track album': 'I’m Fire', 'track time': '2:22'},
      { id:4, 'track title': 'Non Stop','track comment':'(Remix)','track author': 'Стоункат, Psychopath','track album': 'Non Stop', 'track time': '4:12'},
      { id:5, 'track title': 'Run Run','track comment':'(feat. AR/CO)','track author': 'Jaded, Will Clarke, AR/CO','track album': 'Run Run', 'track time': '2:54'},
      { id:6, 'track title': 'Eyes on Fire','track comment':'(Zeds Dead Remix)','track author': 'Blue Foundation, Zeds Dead','track album': 'Eyes on Fire', 'track time': '5:20'},
      { id:7, 'track title': 'Mucho Bien','track comment':'(Hi Profile Remix)','track author': 'HYBIT, Mr. Black, Offer Nissim, Hi Profile','track album': 'Mucho Bien', 'track time': '3:41'},
      { id:8, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:9, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:10, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:11, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:12, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:13, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:14, 'track title': 'Knives n Cherries','track comment':'','track author': 'minthaze','track album': 'Captivating', 'track time': '1:48'},
      { id:15, 'track title': 'How Deep Is Your Love','track comment':'','track author': 'Calvin Harris, Disciples','track album': 'How Deep Is Your Love', 'track time': '3:32'},
      { id:16, 'track title': 'Morena','track comment':'','track author': 'Tom Boxer','track album': 'Soundz Made in Romania', 'track time': '3:36'},
      { id:17, 'track title': 'kkk','track comment':'kkk','track author': 'kkk','track album': 'kkk', 'track time': 'kkk'},
    ];

    const listItems = trackInfo.map((elem) =>
  <div className="playlist__item" key={elem.id}>
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://"
              >{elem['track title']} <span className="track__title-span">{elem['track comment']}</span
            ></a>
          </div>
        </div>
        <div className="track__author">
          <a className="track__author-link" href="http://">{elem['track author']}</a>
        </div>
        <div className="track__album">
          <a className="track__album-link" href="http://"
            >{elem['track album']}</a
          >
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{elem['track time']}</span>
        </div>
      </div>
    </div>
);

    return <div className="content__playlist playlist">{listItems}</div>;
}

export default Trackblock;                
                
                
                
                