(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6506, image_name: "Fellowes-5-EU-UK.png" },
    { id: 6055, image_name: "Cashback-8-UK.png" },
    { id: 6056, image_name: "Fellowes-10-EU-UK.png" },
    { id: 6057, image_name: "Cashback-15-UK.png" },
    { id: 6058, image_name: "Cashback-17-UK.png" },
    { id: 5985, image_name: "Fellowes-20-EU-UK.png" },
    { id: 6397, image_name: "Fellowes-25-EU-UK.png" },
    { id: 5986, image_name: "Cashback-30-UK.png" },
    { id: 5987, image_name: "Fellowes-35-EU-UK.png" },
    { id: 5988, image_name: "Fellowes-40-EU-UK.png" },
    { id: 5989, image_name: "Cashback-45-UK.png" },
    { id: 5990, image_name: "Fellowes-50-EU-UK.png" },
    { id: 5991, image_name: "Cashback-55-UK.png" },
    { id: 6165, image_name: "Fellowes-60-EU-UK.png" },
    { id: 5992, image_name: "Cashback-80-UK.png" },
    { id: 6398, image_name: "Cashback-90-UK.png" },
    { id: 6166, image_name: "Cashback-100-UK.png" },
    { id: 5993, image_name: "Cashback-105-UK.png" },
    { id: 6167, image_name: "Cashback-120-UK.png" },
    { id: 6847, image_name: "Fellowes-125-EU-UK.png" },
    { id: 5994, image_name: "Fellowes-130-EU-UK.png" },
    { id: 6661, image_name: "Cashback-150-UK.png" },
    { id: 6168, image_name: "Cashback-160-UK.png" },
    { id: 6848, image_name: "Fellowes-175-EU-UK.png" },
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
