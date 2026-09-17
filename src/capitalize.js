export default function capitalize(string) {
   let newString = string.charAt(0).toUpperCase();
   let oldString = string.slice(1);
   let combineString = newString + oldString;
   return combineString;
}