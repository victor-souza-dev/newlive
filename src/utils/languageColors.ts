// export function languageColors(data: Object): Array<string> {
//   const languages = Object.keys(data);
//   const arrayColors = [];
//   for (let i = 0; i <= languages.length; i++) {
//     switch (languages[i]?.toLocaleLowerCase()) {
//       case "janeiro":
//         arrayColors.push("#d84924");
//         break;
//       case "fevereiro":
//         arrayColors.push("#2449d8");
//         break;
//       case "março":
//         arrayColors.push("#ead41c");
//         break;
//       case "abril":
//         arrayColors.push("#cf649a");
//         break;
//       case "junho":
//         arrayColors.push("#0074c2");
//         break;
//       case "julho":
//         arrayColors.push("#5ac0eb");
//         break;
//       case "agosto":
//         arrayColors.push("#61dbfb");
//         break;
//       case "setembro":
//         arrayColors.push("#c3002f");
//         break;

//       default:
//         break;
//     }
//   }

//   return arrayColors;
// }

export function languageColors(data: string): string {
  switch (data?.toLocaleLowerCase()) {
    case "janeiro" || "2023":
      return "#d84924";
    case "fevereiro" || "2022":
      return "#2449d8";
    case "março":
      return "#ead41c";
    case "abril":
      return "#cf649a";
    case "junho":
      return "#0074c2";
    case "julho":
      return "#5ac0eb";
    case "agosto":
      return "#61dbfb";
    case "setembro":
      return "#c3002f";
    case "outubro":
      return "#ff9100";
    case "novembro":
      return "#4caf50";
    case "dezembro":
      return "#651fff";

    default:
      return "";
  }
}
