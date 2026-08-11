(() => {
  const badgeImageUrl = "https://eu.evocdn.io/dealer/1021/content/media/Fellowes Cashback Folder/";

  const badgesInfo = [
    { id: 6777, image_name: "Cashback-5-UK.png" },
    { id: 6778, image_name: "Cashback-8-UK.png" },
    { id: 6779, image_name: "Cashback-10-UK.png" },
    { id: 6780, image_name: "Cashback-15-UK.png" },
    { id: 100007, image_name: "Cashback-17-UK.png" }, // not existing
    { id: 6781, image_name: "Cashback-20-UK.png" },
    { id: 6782, image_name: "Cashback-25-UK.png" },
    { id: 6783, image_name: "Cashback-30-UK.png" },
    { id: 100006, image_name: "Cashback-35-UK.png" }, // not existing
    { id: 6784, image_name: "Cashback-40-UK.png" },
    { id: 6785, image_name: "Cashback-45-UK.png" },
    { id: 100005, image_name: "Cashback-50-UK.png" }, // not existing
    { id: 100004, image_name: "Cashback-55-UK.png" }, // not existing
    { id: 100003, image_name: "Cashback-60-UK.png" }, // not existing
    { id: 100002, image_name: "Cashback-80-UK.png" }, // not existing
    { id: 100001, image_name: "Cashback-90-UK.png" }, // not existing
    { id: 6786, image_name: "Cashback-100-UK.png" },
    { id: 100008, image_name: "Cashback-105-UK.png" }, // not existing
    { id: 6787, image_name: "Cashback-120-UK.png" },
    { id: 6788, image_name: "Cashback-130-UK.png" },
    { id: 6788, image_name: "Cashback-150-UK.png" },
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
