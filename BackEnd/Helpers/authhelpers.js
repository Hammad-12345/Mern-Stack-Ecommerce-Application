import bcrypt from "bcrypt";

export const hashpassword = async (UserPassword) => {
  try {
    const saltround = 10;
    const encrptpassword = await bcrypt.hash(UserPassword, saltround);
    return encrptpassword;
  } catch (error) {
    console.log(error);
  }
};
export const comparepassword = async (loginpassword, encrptedpassowwrd) => {
  const comparepassword = await bcrypt.compare(
    loginpassword,
    encrptedpassowwrd
  );
  return comparepassword;
};
