const partners = [
  {
    id: '1',
    imageUrl: 'assets/images/partners/agora.png',
    url: 'https://agora-centrul-de-evenimente.business.site/'
  },
  {
    id: '2',
    imageUrl: 'assets/images/partners/laser.png',
    url: 'https://lasertagiasi.ro/'
  },
  {
    id: '3',
    imageUrl: 'assets/images/partners/vivertine.png',
    url: 'https://www.vivertine.ro/'
  },
  {
    id: '4',
    imageUrl: 'assets/images/partners/lliw.png',
    url: 'https://m.facebook.com/lliw.coffee/?ref=py_c'
  },
  {
    id: '5',
    imageUrl: 'assets/images/partners/lisnic.png',
    url: 'https://lisnicbarbershop.ro/'
  },
  {
    id: '6',
    imageUrl: 'assets/images/partners/profidata.png',
    url: 'https://www.profidatagroup.com/'
  }
];

const partnersDiv = document.getElementById('partners');

partnersDiv.innerHTML = partners
  .map(partner => `
    <a href="${partner.url}" target="blank">
      <div class="partner-card centered-container">
        <image class="partner-image" src="${partner.imageUrl}" />
      </div>
    </a>
  `)
  .join("")