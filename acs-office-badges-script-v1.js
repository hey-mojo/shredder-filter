(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6750, image_name: "Cashback-5-UK.png" },
    { id: 6751, image_name: "Cashback-8-UK.png" },
    { id: 6752, image_name: "Cashback-10-UK.png" },
    { id: 6753, image_name: "Cashback-15-UK.png" },
    { id: 100007, image_name: "Cashback-17-UK.png" }, // not existing
    { id: 6754, image_name: "Cashback-20-UK.png" },
    { id: 6755, image_name: "Cashback-25-UK.png" },
    { id: 6756, image_name: "Cashback-30-UK.png" },
    { id: 100006, image_name: "Cashback-35-UK.png" }, // not existing
    { id: 6757, image_name: "Cashback-40-UK.png" },
    { id: 6758, image_name: "Cashback-45-UK.png" },
    { id: 100005, image_name: "Cashback-50-UK.png" }, // not existing
    { id: 100004, image_name: "Cashback-55-UK.png" }, // not existing
    { id: 6814, image_name: "Cashback-60-UK.png" },
    { id: 100002, image_name: "Cashback-80-UK.png" }, // not existing
    { id: 6759, image_name: "Cashback-90-UK.png" },
    { id: 6815, image_name: "Cashback-100-UK.png" },
    { id: 1000, image_name: "Cashback-105-UK.png" },
    { id: 6760, image_name: "Cashback-120-UK.png" },
    { id: 6761, image_name: "Cashback-130-UK.png" },
    { id: 6816, image_name: "Cashback-150-UK.png" },
    { id: 100000, image_name: "Cashback-160-UK.png" }, // not existing
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
   margin: -30px 0 0 0px;
   padding-bottom: 0;
}
 .b${e.id} .ribboncart {
	 width: 40px;
	 height: 40px;
   margin: 0;
   padding: 0;
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
