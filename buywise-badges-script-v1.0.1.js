(() => {
  const badgeImageUrl =
    "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6059, image_name: "Cashback-8-UK.png" },
    { id: 6060, image_name: "Cashback-10-UK.png" },
    { id: 6061, image_name: "Cashback-15-UK.png" },
    { id: 6062, image_name: "Cashback-17-UK.png" },
    { id: 5995, image_name: "Cashback-20-UK.png" },
    { id: 5996, image_name: "Cashback-30-UK.png" },
    { id: 5997, image_name: "Cashback-35-UK.png" },
    { id: 5998, image_name: "Cashback-40-UK.png" },
    { id: 5999, image_name: "Cashback-45-UK.png" },
    { id: 6000, image_name: "Cashback-50-UK.png" },
    { id: 6001, image_name: "Cashback-55-UK.png" },
    { id: 6146, image_name: "Cashback-60-UK.png" },
    { id: 6002, image_name: "Cashback-80-UK.png" },
    { id: 6147, image_name: "Cashback-100-UK.png" },
    { id: 6003, image_name: "Cashback-105-UK.png" },
    { id: 6148, image_name: "Cashback-120-UK.png" },
    { id: 6004, image_name: "Cashback-130-UK.png" },
    { id: 6149, image_name: "Cashback-160-UK.png" },
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
