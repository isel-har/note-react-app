// async function countToBillion() {
//     console.log("zaba bdat!");
//     // const chunkSize = 1000000; // Process in chunks to avoid blocking the main thread
//     let count = 0;
  
//     while (count <= 10000000000) {
//       count += 2;
  
//       // Yield control back to the event loop to keep the UI responsive
//       await new Promise((resolve) => setTimeout(resolve, 0)); // hadi hia bait l9assid
//     }

//     console.log("Counting complete!");
//   }
  

//   console.log("A");


//   countToBillion();
  

//   console.log("B");
//   console.log("C");
//   console.log("D");
//   console.log("E");
console.log(Number.isInteger('123'));