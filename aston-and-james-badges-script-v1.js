(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6509, image_name: "Fellowes-5-EU-UK" },
    { id: 6075, image_name: "Cashback-8-UK.png" },
    { id: 6076, image_name: "Fellowes-10-EU-UK" },
    { id: 6077, image_name: "Cashback-15-UK.png" },
    { id: 6078, image_name: "Cashback-17-UK.png" },
    { id: 6035, image_name: "Fellowes-20-EU-UK" },
    { id: 6404, image_name: "Fellowes-25-EU-UK" },
    { id: 6036, image_name: "Cashback-30-UK.png" },
    { id: 6037, image_name: "Fellowes-35-EU-UK" },
    { id: 6038, image_name: "Fellowes-40-EU-UK" },
    { id: 6039, image_name: "Cashback-45-UK.png" },
    { id: 6040, image_name: "Fellowes-50-EU-UK" },
    { id: 6041, image_name: "Cashback-55-UK.png" },
    { id: 6137, image_name: "Fellowes-60-EU-UK" },
    { id: 6042, image_name: "Cashback-80-UK.png" },
    { id: 6405, image_name: "Cashback-90-UK.png" },
    { id: 6139, image_name: "Cashback-100-UK.png" },
    { id: 6043, image_name: "Cashback-105-UK.png" },
    { id: 6140, image_name: "Cashback-120-UK.png" },
    { id: 6835, image_name: "Fellowes-125-EU-UK" },
    { id: 6044, image_name: "Fellowes-130-EU-UK" },
    { id: 6656, image_name: "Cashback-150-UK.png" },
    { id: 6141, image_name: "Cashback-160-UK.png" },
    { id: 6836, image_name: "Fellowes-175-EU-UK" },
  ];

  const badgesStyleElement = document.createElement("style");
  let badgesStyleText = "";
  badgesInfo.forEach((e) => {
    badgesStyleText += `
.b${e.id} .ribbon, 
.b${e.id} .ribboncart {
	 background: url("${badgeImageUrl}${e.image_name}") no-repeat center !important;
	 background-size: contain !important;
	 width: 87px;
	 height: 87px;
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
`;
  });
  badgesStyleElement.innerHTML = badgesStyleText;
  document.head.append(badgesStyleElement);
})();
