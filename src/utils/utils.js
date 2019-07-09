const getUniqueFacils = data => {
  const allFacils = data.reduce((accFacils, hotel) => {
    return [...accFacils, ...hotel.facilities];
  }, []);

  const uniqueFacils = allFacils.reduce((accUniqueFacils, facil) => {
    return accUniqueFacils.includes(facil)
      ? accUniqueFacils
      : [...accUniqueFacils, facil];
  }, []);

  return uniqueFacils;
};

const addBooleanToCheckboxes = uniqueFacilities => {
  const booleanAdded = uniqueFacilities.map(uniqueFacility => {
    return {
      facility: uniqueFacility,
      checked: false
    };
  });

  return booleanAdded;
};

const toggleCheckedBooleanInCheckboxFacilites = (
  checkBoxFacilities,
  facility
) => {
  const toggledCheckboxes = checkBoxFacilities.map(checkBox => {
    return checkBox.facility === facility
      ? {
          facility: checkBox.facility,
          checked: !checkBox.checked
        }
      : checkBox;
  });
  return toggledCheckboxes;
};

const extractCheckedFacilities = checkBoxFacilities => {
  const extractedFacilities = checkBoxFacilities.reduce(
    (accCheckedFacilities, checkbox) => {
      return checkbox.checked
        ? [...accCheckedFacilities, checkbox.facility]
        : accCheckedFacilities;
    },
    []
  );

  return extractedFacilities;
};

const filterHotelsByCheckedFacilities = (hotelData, extractedFacilities) => {
  if (extractedFacilities.length === 0) return hotelData;

  const filteredHotels = hotelData.reduce((accHotels, hotel) => {
    let counter = 0;
    extractedFacilities.forEach(facility => {
      if (hotel.facilities.includes(facility)) {
        counter++;
      }
    });

    if (counter === extractedFacilities.length) {
      return [...accHotels, hotel];
    } else return accHotels;
  }, []);

  return filteredHotels;
};

module.exports = {
  getUniqueFacils,
  addBooleanToCheckboxes,
  toggleCheckedBooleanInCheckboxFacilites,
  filterHotelsByCheckedFacilities,
  extractCheckedFacilities
};
