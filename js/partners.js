const partners = [
  {
    id: '1',
    imageUrl: 'https://picsum.photos/200',
    ulr: 'https://picsum.photos/200'
  },
  {
    id: '2',
    imageUrl: 'https://picsum.photos/200',
    ulr: 'https://picsum.photos/200'
  },
  {
    id: '3',
    imageUrl: 'https://picsum.photos/200',
    ulr: 'https://picsum.photos/200'
  },
  {
    id: '4',
    imageUrl: 'https://picsum.photos/200',
    ulr: 'https://picsum.photos/200'
  },
  {
    id: '5',
    imageUrl: 'https://picsum.photos/200',
    ulr: 'https://picsum.photos/200'
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