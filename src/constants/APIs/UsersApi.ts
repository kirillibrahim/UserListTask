import API from "./Api";

export const fetchUsersData = async () => {
  try {
    let data = await API.get("userList.json");
    //console.log(data);
    if (data) {
      return data.data;
    } else {
      alert("Couldn't be gotten! Fetch Users Data ");
    }
  } catch (e) {
    throw e;
  }
};

export const fetchCurUser = async () => {
  try {
    let data = await API.get("me.json");
    if (data) {
      return data.data;
    } else {
      alert("Couldn't be gotten! Current User. ");
    }
  } catch (e) {
    throw e;
  }
};
