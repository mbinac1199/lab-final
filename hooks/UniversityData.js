import { get, ref } from "firebase/database";
import { db } from "../db";

export const getUniversityData = async (universites) => {
  const universitesData = await get(ref(db, "universites"));
  if (universitesData.exists()) return universitesData.val();
  else {
    for (let i = 0; i < universites.length; i++) {
      set(ref(db, `universites/${i}`), universites[i]);
    }
    return universites;
  }
};
