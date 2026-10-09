(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6777, image_name: "Fellowes-5-EU-UK.png" },
    //{ id: 6778, image_name: "Cashback-8-EU.png" },
    { id: 6779, image_name: "Fellowes-10-EU-UK.png" },
    { id: 6780, image_name: "Cashback-15-EU.png" },
    { id: 100007, image_name: "Cashback-17-EU.png" }, // not existing
    { id: 6781, image_name: "Fellowes-20-EU-UK.png" },
    { id: 6782, image_name: "Fellowes-25-EU-UK.png" },
    { id: 6783, image_name: "Cashback-30-EU.png" },
    { id: 6857, image_name: "Fellowes-35-EU-UK.png" },
    { id: 6784, image_name: "Fellowes-40-EU-UK.png" },
    //{ id: 6785, image_name: "Cashback-45-EU.png" },
    { id: 6858, image_name: "Fellowes-50-EU-UK.png" },
    { id: 100004, image_name: "Cashback-55-EU.png" }, // not existing
    { id: 6812, image_name: "Fellowes-60-EU-UK.png" },
    { id: 100002, image_name: "Cashback-80-EU.png" }, // not existing
    { id: 100001, image_name: "Cashback-90-EU.png" }, // not existing
    { id: 6786, image_name: "Cashback-100-EU.png" },
    { id: 6787, image_name: "Cashback-120-EU.png" },
    { id: 6859, image_name: "Fellowes-125-EU-UK.png" },
    { id: 6788, image_name: "Fellowes-130-EU-UK.png" },
    //{ id: 6813, image_name: "Cashback-150-EU.png" },
    { id: 6860, image_name: "Fellowes-175-EU-UK.png" },
  ];

  const badgesStyleElement = document.createElement("style");
  let badgesStyleText = "";
  badgesInfo.forEach((e) => {
    badgesStyleText += `
.b${e.id} .ribbon, 
.b${e.id} .ribboncart {
	 background: url("${badgeImageUrl}${e.image_name}") no-repeat center !important;
	 background-size: contain !important;
	 width: 70px;
	 height: 70px;
   margin: -20px 0 0 7px;
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
