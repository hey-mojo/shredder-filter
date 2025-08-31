(() => {
  const badgeImageUrl =
    "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6051, image_name: "Cashback-8-UK.png" },
    { id: 6052, image_name: "Cashback-10-UK.png" },
    { id: 6053, image_name: "Cashback-15-UK.png" },
    { id: 6054, image_name: "Cashback-17-UK.png" },
    { id: 5975, image_name: "Cashback-20-UK.png" },
    { id: 5976, image_name: "Cashback-30-UK.png" },
    { id: 5977, image_name: "Cashback-35-UK.png" },
    { id: 5978, image_name: "Cashback-40-UK.png" },
    { id: 5979, image_name: "Cashback-45-UK.png" },
    { id: 5980, image_name: "Cashback-50-UK.png" },
    { id: 5981, image_name: "Cashback-55-UK.png" },
    { id: 5982, image_name: "Cashback-80-UK.png" },
    { id: 5983, image_name: "Cashback-105-UK.png" },
    { id: 5984, image_name: "Cashback-130-UK.png" },
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
