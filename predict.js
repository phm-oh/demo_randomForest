function decisionTree(context) {
  // Late > 1.500
  if (context.late > 1.5) {
    // Writing > 0.500
    if (context.writing > 0.5) {
      // Reading > 0.500
      if (context.reading > 0.5) {
        // Mood > 1.500
        if (context.mood > 1.5) {
          return { care: 0, close_up: 29, trust: 0 };
        } else {
          // Drug > 0.500
          if (context.drug > 0.5) {
            return { care: 0, close_up: 12, trust: 0 };
          } else {
            // Income > 0.500
            if (context.income > 0.5) {
              // Violence > 0.500
              if (context.violence > 0.5) {
                // Gambling > 0.500
                if (context.gambling > 0.5) {
                  return { care: 9, close_up: 0, trust: 0 };
                } else {
                  // Congenital > 1.500
                  if (context.congenital > 1.5) {
                    return { care: 0, close_up: 7, trust: 0 };
                  } else {
                    return { care: 14, close_up: 2, trust: 0 };
                  }
                }
              } else {
                // Visual > 0.500
                if (context.visual > 0.5) {
                  // Gambling > 0.500
                  if (context.gambling > 0.5) {
                    return { care: 26, close_up: 0, trust: 0 };
                  } else {
                    return { care: 17, close_up: 2, trust: 1 };
                  }
                } else {
                  // Close up
                  return { care: 0, close_up: 4, trust: 0 };
                }
              }
            } else {
              // Not passing > 1.500
              if (context.not_passing > 1.5) {
                // Close up
                return { care: 0, close_up: 6, trust: 0 };
              } else {
                // Grade > 1.500
                if (context.grade > 1.5) {
                  // Gambling > 0.500
                  if (context.gambling > 0.5) {
                    return { care: 7, close_up: 0, trust: 0 };
                  } else {
                    // Close up
                    return { care: 9, close_up: 16, trust: 0 };
                  }
                } else {
                  // Congenital > 0.500
                  if (context.congenital > 0.5) {
                    return { care: 9, close_up: 2, trust: 0 };
                  } else {
                    return { care: 4, close_up: 0, trust: 3 };
                  }
                }
              }
            }
          }
        }
      } else {
        // Close up
        return { care: 0, close_up: 35, trust: 0 };
      }
    } else {
      // Close up
      return { care: 0, close_up: 72, trust: 0 };
    }
  } else {
    if (context.reading > 0.5) {
      // Visual > 0.500
      if (context.visual > 0.5) {
        // Income > 1.500
        if (context.income > 1.5) {
          // Hearing > 1.500
          if (context.hearing > 1.5) {
            // Mood > 1.500: close up {care=0, close up=2, trust=0}
            if (context.mood > 1.5) {
              return { care: 0, close_up: 2, trust: 0 };
            } else {
              // Congenital > 1.500: care {care=2, close up=0, trust=0}
              if (context.congenital > 1.5) {
                return { care: 2, close_up: 0, trust: 0 };
              } else {
                // Not passing > 0.500: care {care=18, close up=0, trust=0}
                if (context.not_passing > 0.5) {
                  return { care: 18, close_up: 0, trust: 0 };
                } else {
                  // Grade > 1.500: care {care=2, close up=0, trust=0}
                  if (context.grade > 1.5) {
                    return { care: 2, close_up: 0, trust: 0 };
                  } else {
                    // Trust {care=6, close up=0, trust=21}
                    return { care: 6, close_up: 0, trust: 21 };
                  }
                }
              }
            }
          } else {
            // Mood > 1.500: close up {care=0, close up=2, trust=0}
            if (context.mood > 1.5) {
              return { care: 0, close_up: 2, trust: 0 };
            } else {
              // Visual > 1.500
              if (context.visual > 1.5) {
                // Reading > 1.500
                if (context.reading > 1.5) {
                  // Not passing > 0.500: care {care=1, close up=0, trust=0}
                  if (context.not_passing > 0.5) {
                    return { care: 1, close_up: 0, trust: 0 };
                  } else {
                    // Trust {care=0, close up=0, trust=14}
                    return { care: 0, close_up: 0, trust: 14 };
                  }
                } else {
                  // Violence > 0.500: care {care=1, close up=0, trust=0}
                  if (context.violence > 0.5) {
                    return { care: 1, close_up: 0, trust: 0 };
                  } else {
                    // Care {care=9, close up=0, trust=9}
                    return { care: 9, close_up: 0, trust: 9 };
                  }
                }
              } else {
                // Trust {care=0, close up=0, trust=15}
                return { care: 0, close_up: 0, trust: 15 };
              }
            }
          }
        } else {
            if(context.mood > 1.5){
                return {care:0 , close_up:2 , trust:0}
            } else{
                if(context.writing >0.5){
                    if(context.Not_passing > 0.5){
                        return {care:109 , close_up:0 , trust:0}
                    } else {
                        if(context.hearing > 1.5){
                            if(context.congenital >1.5){
                                return {care:9 ,close_up:3,trust:0}
                            }else{
                                return {care:81,close_up:3,trust:68}
                            }

                        }else {
                             if(context.reading > 1.5)   {
                                return {care:4,close_up:0,trust:70}
                             }else{
                                return {care:36,close_up:2,trust:42}
                             }
                        }
                    }

                } else {
                    return {care:0 ,close_up:1 , trust:0}
                }
            }


        }
      } else{

        return {care:0, close_up:13, trust:0}
      }
    }else{
        return {care:0, close_up:7, trust:0}
    }
  }
}

module.exports = decisionTree();

// async function predict() {
//   const response = await fetch('/predict', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       reading: document.getElementById('reading').value,
//       visual: document.getElementById('visual').value,
//       income: document.getElementById('income').value,
//       hearing: document.getElementById('hearing').value,
//       mood: document.getElementById('mood').value,
//       congenital: document.getElementById('congenital').value,
//       not_passing: document.getElementById('not_passing').value,
//       grade: document.getElementById('grade').value,
//       violence: document.getElementById('violence').value,
//     }),
//   });

//   if (response.ok) {
//     const data = await response.json();
//     const result = data.care;
//     const close_up = data.close_up;
//     const trust = data.trust;

//     // แสดงผลลัพธ์
//     document.getElementById('result').innerHTML = `ผลลัพธ์: ${result} (ระยะห่าง: ${close_up}, ความไว้วางใจ: ${trust})`;
//   } else {
//        // แสดงข้อผิดพลาด
//     document.getElementById('result').innerHTML = `เกิดข้อผิดพลาด: ${response.status}`;

//   }
// }
