

let cities = [
    { 
        city: "Adana", 
        famousFor: "Kebap", 
        type: "food", 
        plateNumber: "01" 
    },
    { 
  
        city: "Ankara", 
        famousFor: "Simidi", 
        type: "food", 
        plateNumber: "06" 
    },
    { 
        city: "İstanbul", 
        famousFor: "Boğaz", 
        type: "place", 
        plateNumber: "34" 
    },
    { 
        city: "İzmir", 
        famousFor: "Boyoz", 
        type: "food", 
        plateNumber: "35" 
    },
    { 
        city: "Bursa", 
        famousFor: "İskender Kebabı", 
        type: "food", 
        plateNumber: "16" 
    },
    { 
        city: "Antalya", 
        famousFor: "Düden Şelalesi", 
        type: "place", 
        plateNumber: "07" 
    },
    { 
        city: "Gaziantep", 
        famousFor: "Baklava", 
        type: "food", 
        plateNumber: "27" 
    },
    { 
        city: "Konya", 
        famousFor: "Etli Ekmek", 
        type: "food", 
        plateNumber: "42" 
    },
    { 
        city: "Trabzon", 
        famousFor: "Hamsi", 
        type: "food", 
        plateNumber: "61" 
    },
    { 
        city: "Kayseri", 
        famousFor: "Mantı", 
        type: "food", 
        plateNumber: "38" 
    },
    { 
        city: "Eskişehir", 
        famousFor: "Lületaşı", 
        type: "place", 
        plateNumber: "26" 
    },
    { 
        city: "Rize", 
        famousFor: "Çay", 
        type: "food", 
        plateNumber: "53" 
    },
    { 
        city: "Erzurum", 
        famousFor: "Cağ Kebabı", 
        type: "food", 
        plateNumber: "25" 
    },
    { 
        city: "Diyarbakır", 
        famousFor: "Karpuz", 
        type: "place", 
        plateNumber: "21" 
    },
    { 
        city: "Mardin", 
        famousFor: "Taş Evler", 
        type: "place", 
        plateNumber: "47" 
    },
    { 
        city: "Van", 
        famousFor: "Van Kedisi", 
        type: "place", 
        plateNumber: "65" 
    },
    { 
        city: "Sivas", 
        famousFor: "Kangal Köpeği", 
        type: "place", 
        plateNumber: "58" 
    },
    { 
        city: "Şanlıurfa", 
        famousFor: "Balıklıgöl", 
        type: "place", 
        plateNumber: "63" 
    },
    { 
        city: "Mersin", 
        famousFor: "Tantuni", 
        type: "food", 
        plateNumber: "33" 
    },
    { 
        city: "Muğla", 
        famousFor: "Turistik Yerleri", 
        type: "place", 
        plateNumber: "48" 
    },
    { 
        city: "Çanakkale", 
        famousFor: "Tarihi Gelibolu Yarımadası", 
        type: "place", 
        plateNumber: "17" 
    },
    { 
        city: "Hatay", 
        famousFor: "Antakya Mozaikleri", 
        type: "place", 
        plateNumber: "31" 
    },
    { 
        city: "İzmir", 
        famousFor: "Efes Antik Kenti", 
        type: "place", 
        plateNumber: "35" 
    },
    { 
        city: "Nevşehir", 
        famousFor: "Kapadokya", 
        type: "place", 
        plateNumber: "50" 
    },
    { 
        city: "Aydın", 
        famousFor: "Milet Antik Kenti", 
        type: "place", 
        plateNumber: "09" 
    }
  ];
  

function displayCities() {
    const foodContainer = document.getElementById("foodCities");
    const placeContainer = document.getElementById("placeCities");
    const oddContainer = document.getElementById("oddPlateCities");
    const evenContainer = document.getElementById("evenPlateCities");

    cities.forEach(city => {
        const cityDiv = document.createElement("div");
        cityDiv.classList.add("city-item");
        cityDiv.innerHTML = `${city.city} - ${city.famousFor} - Plaka: ${city.plateNumber}`;
        
        if (city.type === "food") {
            foodContainer.appendChild(cityDiv.cloneNode(true));
        } else if (city.type === "place") {
            placeContainer.appendChild(cityDiv.cloneNode(true));
        }

        if (parseInt(city.plateNumber) % 2 === 0) {
            evenContainer.appendChild(cityDiv.cloneNode(true));
        } else {
            oddContainer.appendChild(cityDiv.cloneNode(true));
        }
    });
}


displayCities();
