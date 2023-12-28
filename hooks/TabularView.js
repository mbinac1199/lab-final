import { get, ref } from "firebase/database";
import { db } from "../db";

export const getTabularView = async () => {
  const data = await get(ref(db, "tabularView"));
  if (data.exists()) return data.val();
  else {
    set(ref(db, "tabularView"), false);
    return false;
  }
};
