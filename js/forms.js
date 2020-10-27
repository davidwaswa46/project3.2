function LocateAhouse(location, houseSize) {
    this.location = location;
    this.houseSize = houseSize;
    this.landlordNo = 0;
    this.rentAmount = 0;
};

LocateAhouse.prototype.housePrice = function () {
    if (this.location === "ALLSOAPS") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 30000;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 20000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15000;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 10000;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 5000;
        }
    } else if (this.location === "ONGATA RONGAI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 35000;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 23000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 13000;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 6000;
        }
    } else if (this.location === "NGONG") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 32500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 21000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 17500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 8500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4500;
        }
    } else if (this.location === "KANGEMI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 31500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 7500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4700;
        }
    } else if (this.location === "KISERIAN") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 31500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 7500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4700;
        }
    } else if (this.location === "KAHAWA-SUKARI") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 31500;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 18000;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 15500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 7500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 4700;
        }
    } else if (this.location === "KINOO") {
        if (this.houseSize === "BUNGALOW") {
            this.rentAmount = 36000;
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.rentAmount = 19500;
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.rentAmount = 16500;
        } else if (this.houseSize === "BEDSITTER") {
            this.rentAmount = 9500;
        } else if (this.houseSize === "SINGLE") {
            this.rentAmount = 5500;
        }
    };
}; $(document).ready(function () {
    $("#house").submit(function (event) {
        event.preventDefault(); var location = $("#location").val(); var houseSize = $("#house-size").val(); var newTenant = new LocateAhouse(location, houseSize);
        newTenant.housePrice();
        newTenant.landNo();
        // console.log(newTenant.landlordNo);
        // alert(newTenant.rentAmount)
        // console.log(newTenant.rentAmount);
        alert("The house in " + location + " is " + houseSize + " and the total rent amount Ksh. " + newTenant.rentAmount);
    });
});
LocateAhouse.prototype.landNo = function (location, houseSize) {
    if (this.location === "ALLSOAPS") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name Mwaura Mwangi +254704902382";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name Mathew Mark +254724821093";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Steve +254755849302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Kerry +254723834058";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Christine +254733029384";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "RONGAI") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name Fabriozo Isaac +254713409768";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name  AndyCarol Wambui +254724842307";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Jaloch Ogolla +2547593048302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Ashley Kirimi +254709378920";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Sharon Annete +254709347599";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "NGONG") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name David +254713409768";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name Wambui Sofia +254724842307";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Joyce Akinyi +2547593048302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Lornna Mugo +254709378920";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Joho hassan +254709347599";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "KINOO") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name Alfred Wemali +254713409768";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name Michelle Obina +254724842307";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Brian Kibet +2547593048302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Adhiambo Beryl +254709378920";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Otieno Sylvester +254709347599";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "KANGEMI") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name Jeff Kangale +254713409768";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name Gloria Mkenya +254724842307";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Kipchumba Ismael +2547593048302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Njeri Anita +254709378920";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Famba Ambogo +254709347599";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "KISERIAN") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name Ashley Muronji +254713409768";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name Borris Fanaka +254724842307";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Sospeter Ombaga +2547593048302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name Bruno Fendoh +254709378920";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Ziki Ross +254709347599";
            alert(this.landlordNo);
        }
    }
    else if (this.location === "KAHAWA-SUKARI") {
        if (this.houseSize === "BUNGALOW") {
            this.landlordNo = "The landLord name Mutiso Charles +254713409768";
            alert(this.landlordNo);
        } else if (this.houseSize === "TWO-BEDROOM") {
            this.landlordNo = "The landLord name Kevin Komar +254724842307";
            alert(this.landlordNo);
        } else if (this.houseSize === "ONE-BEDROOM") {
            this.landlordNo = "The landLord name Kelly khisa +2547593048302";
            alert(this.landlordNo);
        } else if (this.houseSize === "BEDSITTER") {
            this.landlordNo = "The landLord name David Maranga +254709378920";
            alert(this.landlordNo);
        } else if (this.houseSize === "SINGLE") {
            this.landlordNo = "The landLord name Paul James +254709347599";
            alert(this.landlordNo);
        }
    };
};
