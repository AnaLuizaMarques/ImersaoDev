let listaJogosUm = [
    "https://smartcdkeys.com/image/data/products/fall-guys-ultimate-knockout/cover/fall-guys-ultimate-knockout-smartcdkeys-cheap-cd-key-cover.jpg",
    "https://s3.gaming-cdn.com/images/products/8468/orig/jogo-steam-overcooked-all-you-can-eat-cover.jpg",
    "https://cdn-products.eneba.com/resized-products/5JzUnzfcLd7T0_XHcaam5ry7LSjd4NamuBdAARtpLiA_350x200_1x-0.jpeg",
    "https://store-images.s-microsoft.com/image/apps.17703.13510798887933723.57e43f19-4066-429e-b1a2-caea56e427b4.f555e1de-d116-4ab1-bed1-408a78622ba6",
    "https://cdn-products.eneba.com/resized-products/4743TLCwvzrj27Sw1PvdE9J0Ql97q88rJt1bdq6HZH8_350x200_1x-0.jpeg"
  ];
  let listaJogosDois = [
    "https://cdn1.epicgames.com/6009be9994c2409099588cde6f3a5ed0/offer/EGS_CitiesSkylines_ColossalOrder_S2-1200x1600-753257537706de74735d2bc3eb656b67.jpg",
    "https://m.media-amazon.com/images/I/81f4MUQkq-L._SY445_.jpg",
    "https://image.api.playstation.com/vulcan/img/rnd/202010/2119/W83G1nGF7wGs2J7Cq3LhpwwI.png",
    "https://i.pinimg.com/474x/6b/73/03/6b7303da91ca2a30ad30daabd99a8a69.jpg",
    "https://m.media-amazon.com/images/I/615wwDbf6VL.jpg"
  ];
  let listaJogosTres = [
    "https://upload.wikimedia.org/wikipedia/pt/e/e9/Dead_By_Daylight.png",
    "https://store-images.s-microsoft.com/image/apps.34695.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.25816f86-f27c-4ade-ae29-222661145f1f",
    "https://www.xtrafondos.com/en/descargar.php?id=3122&vertical=1",
    "https://i.pinimg.com/736x/d3/5b/0d/d35b0d351298e2f46415262056945640.jpg",
    "https://sm.ign.com/t/ign_fr/game/f/fortnite/fortnite_sw5m.200.jpg"
  ];
  
  document.write("<div class=todosJogos>");
  document.write("<div class=colunaJgUm>");
  document.write("<h2> Para  jogar em dupla ou grupo</h2>");
  document.write("<div class=jogosUm>");
  for (let i = 0; i < listaJogosUm.length; i++) {
    document.write("<img src=" + listaJogosUm[i] + ">");
  }
  document.write("</div>");
  document.write("</div>");
  
  document.write("<div class=colunaJgDois>");
  document.write("<h3> Jogos de Simulação e Interação</h3>");
  document.write("<div class=jogosDois>");
  for (let i = 0; i < listaJogosDois.length; i++) {
    document.write("<img src=" + listaJogosDois[i] + ">");
  }
  document.write("</div>");
  document.write("</div>");
  
  document.write("<div class=colunaJgTres>");
  document.write("<h3> Que amo ver streams</h3>");
  document.write("<div class=jogosTres>");
  for (let i = 0; i < listaJogosTres.length; i++) {
    document.write("<img src=" + listaJogosTres[i] + ">");
  }
  document.write("</div>");
  document.write("</div>");
  document.write("</div>");
  