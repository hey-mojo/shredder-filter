(() => {
  const badgeImageUrl =
    "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6071, image_name: "Cashback-8-UK.png" },
    { id: 6072, image_name: "Cashback-10-UK.png" },
    { id: 6073, image_name: "Cashback-15-UK.png" },
    { id: 6074, image_name: "Cashback-17-UK.png" },
    { id: 6025, image_name: "Cashback-20-UK.png" },
    { id: 6026, image_name: "Cashback-30-UK.png" },
    { id: 6027, image_name: "Cashback-35-UK.png" },
    { id: 6028, image_name: "Cashback-40-UK.png" },
    { id: 6029, image_name: "Cashback-45-UK.png" },
    { id: 6030, image_name: "Cashback-50-UK.png" },
    { id: 6031, image_name: "Cashback-55-UK.png" },
    { id: 6032, image_name: "Cashback-80-UK.png" },
    { id: 6033, image_name: "Cashback-105-UK.png" },
    { id: 6034, image_name: "Cashback-130-UK.png" },
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
