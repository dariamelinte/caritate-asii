const partners = [
  {
    id: '1',
    imageUrl: 'assets/images/partners/lliw.png',
    ulr: 'https://m.facebook.com/lliw.coffee/?ref=py_c'
  },
  {
    id: '2',
    imageUrl: 'assets/images/partners/agora.png',
    ulr: 'https://agora-centrul-de-evenimente.business.site/'
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