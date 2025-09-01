(() => {
  const badgeImageUrl =
    "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6079, image_name: "Cashback-8-UK.png" },
    { id: 6080, image_name: "Cashback-10-UK.png" },
    { id: 6081, image_name: "Cashback-15-UK.png" },
    { id: 6082, image_name: "Cashback-17-UK.png" },
    { id: 6083, image_name: "Cashback-20-UK.png" },
    { id: 6084, image_name: "Cashback-30-UK.png" },
    { id: 6085, image_name: "Cashback-35-UK.png" },
    { id: 6086, image_name: "Cashback-40-UK.png" },
    { id: 6087, image_name: "Cashback-45-UK.png" },
    { id: 6088, image_name: "Cashback-50-UK.png" },
    { id: 6089, image_name: "Cashback-55-UK.png" },
    { id: 6090, image_name: "Cashback-60-UK.png" },
    { id: 6091, image_name: "Cashback-80-UK.png" },
    { id: 6092, image_name: "Cashback-105-UK.png" },
    { id: 6093, image_name: "Cashback-130-UK.png" },
  ];

  const badgesStyleElement = document.createElement("style");
  let badgesStyleText = "";
  badgesInfo.forEach((e) => {
    badgesStyleText += `
.b${e.id} .ribbon, 
.b${e.id} .ribboncart {
	 background: url("${badgeImageUrl}${e.image_name}") no-repeat center !important;
	 background-size: contain !important;
	 width: 75px;
	 height: 75px;
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
