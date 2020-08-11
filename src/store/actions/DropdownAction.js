export const dropdown_selected = (dropdown_value, dropdown_name) => {
  return {
    type: `DROPDOWN_SELECTED_${dropdown_name.toUpperCase()}`,
    payload: dropdown_value,
  };
};
