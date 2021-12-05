const partners = [
  {
    id: '1',
    imageUrl: 'assets/images/partners/softvision.png',
    ulr: 'https://www.cognizantsoftvision.com/'
  },
  {
    id: '2',
    imageUrl: 'assets/images/partners/3pillar.png',
    ulr: 'https://www.3pillarglobal.com/'
  },
  {
    id: '3',
    imageUrl: 'assets/images/partners/beenear.png',
    ulr: 'https://www.beenear.com/'
  },
  {
    id: '4',
    imageUrl: 'assets/images/partners/bytex.png',
    ulr: 'https://bytex.net/'
  },
  {
    id: '5',
    imageUrl: 'assets/images/partners/deloitte.png',
    ulr: 'https://ro.deloittedigital.com/'
  },
  {
    id: '6',
    imageUrl: 'assets/images/partners/levi.png',
    ulr: 'https://www.levi9.com/'
  },
  {
    id: '7',
    imageUrl: 'assets/images/partners/as.png',
    ulr: 'https://careers.amplified.software/'
  },
  {
    id: '8',
    imageUrl: 'assets/images/partners/iasi_ai.png',
    ulr: 'https://iasi.ai/'
  },
  {
    id: '9',
    imageUrl: 'assets/images/partners/wink.png',
    ulr: 'https://wink.ro/'
  },
  {
    id: '10',
    imageUrl: 'assets/images/partners/ziarul_iasi.png',
    ulr: 'https://www.ziaruldeiasi.ro/'
  },
];

const partnersDiv = document.getElementById('partners');

partnersDiv.innerHTML = partners
  .map(partner => `
    <a href="${partner.ulr}" target="blank">
      <div class="partner-card centered-container">
        <image class="partner-image" src="${partner.imageUrl}" />
      </div>
    </a>
  `)
  .join("")