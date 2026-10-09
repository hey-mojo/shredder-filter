(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6508, image_name: "Fellowes-5-EU-UK.png" },
    { id: 6071, image_name: "Cashback-8-UK.png" },
    { id: 6072, image_name: "Fellowes-10-EU-UK.png" },
    { id: 6073, image_name: "Cashback-15-UK.png" },
    { id: 6074, image_name: "Cashback-17-UK.png" },
    { id: 6025, image_name: "Fellowes-20-EU-UK.png" },
    { id: 6402, image_name: "Fellowes-25-EU-UK.png" },
    { id: 6026, image_name: "Cashback-30-UK.png" },
    { id: 6027, image_name: "Fellowes-35-EU-UK.png" },
    { id: 6028, image_name: "Fellowes-40-EU-UK.png" },
    { id: 6029, image_name: "Cashback-45-UK.png" },
    { id: 6030, image_name: "Fellowes-50-EU-UK.png" },
    { id: 6031, image_name: "Cashback-55-UK.png" },
    { id: 6150, image_name: "Fellowes-60-EU-UK.png" },
    { id: 6032, image_name: "Cashback-80-UK.png" },
    { id: 6403, image_name: "Cashback-90-UK.png" },
    { id: 6151, image_name: "Cashback-100-UK.png" },
    { id: 6033, image_name: "Cashback-105-UK.png" },
    { id: 6152, image_name: "Cashback-120-UK.png" },
    { id: 6837, image_name: "Fellowes-125-EU-UK.png" },
    { id: 6034, image_name: "Fellowes-130-EU-UK.png" },
    { id: 6658, image_name: "Cashback-150-UK.png" },
    { id: 6153, image_name: "Cashback-160-UK.png" },
    { id: 6838, image_name: "Fellowes-175-EU-UK.png" },
  ];

  const badgesStyleElement = document.createElement("style");
  let badgesStyleText = "";
  badgesInfo.forEach((e) => {
    badgesStyleText += `
.b${e.id} .ribbon, 
.b${e.id} .ribboncart {
	 background: url("${badgeImageUrl}${e.image_name}") no-repeat center !important;
	 background-size: contain !important;
	 width: 80px;
	 height: 80px;
   margin-left: 10px;
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
