(() => {
  const badgeImageUrl =
    "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6067, image_name: "Cashback-8-UK.png" },
    { id: 6068, image_name: "Cashback-10-UK.png" },
    { id: 6069, image_name: "Cashback-15-UK.png" },
    { id: 6070, image_name: "Cashback-17-UK.png" },
    { id: 6015, image_name: "Cashback-20-UK.png" },
    { id: 6016, image_name: "Cashback-30-UK.png" },
    { id: 6017, image_name: "Cashback-35-UK.png" },
    { id: 6018, image_name: "Cashback-40-UK.png" },
    { id: 6019, image_name: "Cashback-45-UK.png" },
    { id: 6020, image_name: "Cashback-50-UK.png" },
    { id: 6021, image_name: "Cashback-55-UK.png" },
    { id: 6157, image_name: "Cashback-60-UK.png" },
    { id: 6022, image_name: "Cashback-80-UK.png" },
    { id: 6158, image_name: "Cashback-100-UK.png" },
    { id: 6023, image_name: "Cashback-105-UK.png" },
    { id: 6159, image_name: "Cashback-120-UK.png" },
    { id: 6024, image_name: "Cashback-130-UK.png" },
    { id: 6160, image_name: "Cashback-160-UK.png" },
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
