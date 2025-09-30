(() => {
  const badgeImageUrl =
    "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6063, image_name: "Cashback-8-UK.png" },
    { id: 6064, image_name: "Cashback-10-UK.png" },
    { id: 6065, image_name: "Cashback-15-UK.png" },
    { id: 6066, image_name: "Cashback-17-UK.png" },
    { id: 6005, image_name: "Cashback-20-UK.png" },
    { id: 6006, image_name: "Cashback-30-UK.png" },
    { id: 6007, image_name: "Cashback-35-UK.png" },
    { id: 6008, image_name: "Cashback-40-UK.png" },
    { id: 6009, image_name: "Cashback-45-UK.png" },
    { id: 6010, image_name: "Cashback-50-UK.png" },
    { id: 6011, image_name: "Cashback-55-UK.png" },
    { id: 6142, image_name: "Cashback-60-UK.png" },
    { id: 6012, image_name: "Cashback-80-UK.png" },
    { id: 6143, image_name: "Cashback-100-UK.png" },
    { id: 6013, image_name: "Cashback-105-UK.png" },
    { id: 6144, image_name: "Cashback-120-UK.png" },
    { id: 6014, image_name: "Cashback-130-UK.png" },
    { id: 6145, image_name: "Cashback-160-UK.png" },
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
