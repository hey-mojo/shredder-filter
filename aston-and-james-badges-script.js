(() => {
  const badgeImageUrl = "public/images/fellowes-cashback-folder/";

  const badgesInfo = [
    { id: 6075, image_name: "Cashback-8-UK.png" },
    { id: 6076, image_name: "Cashback-10-UK.png" },
    { id: 6077, image_name: "Cashback-15-UK.png" },
    { id: 6078, image_name: "Cashback-17-UK.png" },
    { id: 6035, image_name: "Cashback-20-UK.png" },
    { id: 6036, image_name: "Cashback-30-UK.png" },
    { id: 6037, image_name: "Cashback-35-UK.png" },
    { id: 6038, image_name: "Cashback-40-UK.png" },
    { id: 6039, image_name: "Cashback-45-UK.png" },
    { id: 6040, image_name: "Cashback-50-UK.png" },
    { id: 6041, image_name: "Cashback-55-UK.png" },
    { id: 6042, image_name: "Cashback-80-UK.png" },
    { id: 6043, image_name: "Cashback-105-UK.png" },
    { id: 6044, image_name: "Cashback-130-UK.png" },
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
