(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6511, image_name: "Fellowes-5-EU-UK.png" },
    { id: 4443, image_name: "Cashback-8-UK.png" },
    { id: 4077, image_name: "Fellowes-10-EU-UK.png" },
    { id: 4446, image_name: "Cashback-15-UK.png" },
    { id: 6203, image_name: "Cashback-17-UK.png" },
    { id: 4076, image_name: "Fellowes-20-EU-UK.png" },
    { id: 6411, image_name: "Fellowes-25-EU-UK.png" },
    { id: 4075, image_name: "Cashback-30-UK.png" },
    { id: 4450, image_name: "Fellowes-35-EU-UK.png" },
    { id: 4631, image_name: "Fellowes-40-EU-UK.png" },
    { id: 6202, image_name: "Cashback-45-UK.png" },
    { id: 4074, image_name: "Fellowes-50-EU-UK.png" },
    { id: 4449, image_name: "Cashback-55-UK.png" },
    { id: 4452, image_name: "Fellowes-60-EU-UK.png" },
    { id: 4451, image_name: "Cashback-80-UK.png" },
    { id: 6412, image_name: "Cashback-90-UK.png" },
    { id: 4073, image_name: "Cashback-100-UK.png" },
    { id: 6204, image_name: "Cashback-105-UK.png" },
    { id: 6177, image_name: "Cashback-120-UK.png" },
    { id: 6842, image_name: "Fellowes-125-EU-UK.png" },
    { id: 4453, image_name: "Fellowes-130-EU-UK.png" },
    { id: 6659, image_name: "Cashback-150-UK.png" },
    { id: 6178, image_name: "Cashback-160-UK.png" },
    { id: 6843, image_name: "Fellowes-175-EU-UK.png" },
  ];

  const badgesStyleElement = document.createElement("style");
  let badgesStyleText = "";
  badgesInfo.forEach((e) => {
    badgesStyleText += `
.b${e.id} .ribbon, 
.b${e.id} .ribboncart {
	 background: url("${badgeImageUrl}${e.image_name}") no-repeat 0 3px !important;
	 background-size: contain !important;
	 width: 60px;
	 height: 60px!important;
   margin-left: -7px;
}
 .b${e.id} .ribboncart {
	 width: 40px;
	 height: 40px;
}
.b${e.id} .ribbon-tips, 
.b${e.id} .ribbon-side, 
.b${e.id} .ribboncart-tips, 
.b${e.id} .ribboncart-wrapper, 
.b${e.id} span {
	 display: none;
}
.b${e.id}.ribbon-wrapper {
   transform: scale(1);
   top: 3px;
   left: 23px;
}
`;
  });
  badgesStyleElement.innerHTML = badgesStyleText;
  document.head.append(badgesStyleElement);
})();
