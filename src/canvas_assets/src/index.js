import { canvas } from "../../declarations/canvas";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with canvas actor, calling the greet method
  const greeting = await canvas.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
