/* ----------------------------------------
                  MAIN CONFIG
---------------------------------------- */
export const mainConfig = {
    //General
    nameApp: "MystiChat",
    imageApp: "https://i.ibb.co/0j0mCqNX/Mystique.png", // Image of the app>",
    //API
    avatarAPI: "https://api.dicebear.com/7.x/lorelei/svg?seed=", //API of avatars
    initialsAPI: "https://api.dicebear.com/7.x/initials/svg?seed=", // API of initials
    //Other
    verifiedNames: ["Navanish", "Developer"] // Names to get verified
}

/* ----------------------------------------
                  ANIMATIONS
---------------------------------------- */
//Animations for my messages
export const animConfig = {
  initial: { opacity: 0, x: 20 }, 
  animate: { opacity: 1, x: 0 }, 
  exit: { opacity: 0, x: -20 }, 
  transition: { duration: 0.2 }, 
}
//Animations for other messages
export const animConfigOther = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 }, 
    exit: { opacity: 0, x: -20 }, 
    transition: { duration: 0.2 },
  }