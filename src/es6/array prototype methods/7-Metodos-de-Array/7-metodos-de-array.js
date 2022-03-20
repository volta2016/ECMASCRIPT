//Transforma cada número multiplicado por 2
[1, 2, 3].map((num) => num * 2);

//filtra la comida que no sea carnivora

["🥝", "🥦", "🥩"].filter((food) => food !== "🥩");

//Ecuentra y devuelve la gallina

["🦘", "🦕", "🐔"].find((n) => n == "🐔");

//Ecuentra y devuelve la gallina

["🦘", "🦕", "🐔"].find((n) => n == "🐔");

//Dime dónde está la gallina - para saber su posición

["🦘", "🦕", "🐔"].findIndex((n) => n === "🐔");

//Rellena el array de dinero las 3 posiciones

["", "", ""].fill("💵");

//Todo esta ok
//verificar si todo los elementos son igual al check no es cierto

["✅", "❌", "✅"].every((n) => n === "✅");

//Para ver si hay algún error

["✅", "❌", "✅", "✅"].every((n) => n === "❌");
