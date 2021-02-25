export const ActionType = {
  UPDATE_CITY: `city/updateCity`,
};

export const ActionCreator = {
  updateCity: (city) => ({
    type: ActionType.UPDATE_CITY,
    payload: city
  }),
};
