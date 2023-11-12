// const decisionTree = require('./predict.js');
// import resultModule from './result.js';


document.getElementById("studentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = getFormData();
    analyzeData(formData);
  });
  
  function getFormData() {
    const formData = {
      name: getValue("studentName"),
      classLevel: getValue("classLevel"),
      major: getValue("major"),
      enrollmentStatus: getValue("enrollmentStatus"),
      grade: getRadioValue("grade"),
      late: getRadioValue("late"),
      drug:getRadioValue("drug"),
      not_pass:getRadioValue("not_pass"),
      reading:getRadioValue("reading"),
      writing:getRadioValue("writing"),
      disease:getRadioValue("disease"),
      visual:getRadioValue("visual"),
      hearing:getRadioValue("hearing"),
      mood:getRadioValue("mood"),
      socializing:getRadioValue("socializing"),
      income:getRadioValue("income"),
      commodation:getRadioValue("commodation"),
      status_f_m:getRadioValue("status_f_m"),
      gambling:getRadioValue("gambling"),
      violence:getRadioValue("violence")
      

      // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
    };
  
    return formData;
  }
  
  function getValue(elementId) {
    return document.getElementById(elementId).value;
  }
  
  function getRadioValue(name) {
    const radioButtons = document.getElementsByName(name);
    const checkedRadioButton = Array.from(radioButtons).find((radioButton) => radioButton.checked);
    return checkedRadioButton ? checkedRadioButton.value : null;
  }



  
  function analyzeData(context) {
    // console.log("Analyzing data:", context);
    const res =   decisionTree(context);
    console.log(res)
    
    const newData = {
      name: context.name,
      classLevel: context.classLevel,
      category: res
    };
    //  window.location.href = analysisResultURL;
    showResultPage(newData);
    // console.log(newData)
    // resultModule.displayResult(newData);


  }



  function showResultPage(result) {
    // สร้าง URL สำหรับหน้าผลการวิเคราะห์
    const analysisResultURL = `result.html?result=${encodeURIComponent(JSON.stringify(result))}`;

    console.log(analysisResultURL)
    // เปลี่ยนหน้าไปยังหน้าผลการวิเคราะห์
     window.location.href = analysisResultURL;
  }

  





  function decisionTree(context) {

    // var res 
    // Late > 1.500
    if (context.late > 1.5) {
      // Writing > 0.500
      if (context.writing > 0.5) {
        // Reading > 0.500
        if (context.reading > 0.5) {
          // Mood > 1.500
          if (context.mood > 1.5) {
            // return { care: 0, close_up: 29, trust: 0 };

            return 'close_up';
          } else {
            // Drug > 0.500
            if (context.drug > 0.5) {
              // return { care: 0, close_up: 12, trust: 0 };
              return 'close_up';
            } else {
              // Income > 0.500
              if (context.income > 0.5) {
                // Violence > 0.500
                if (context.violence > 0.5) {
                  // Gambling > 0.500
                  if (context.gambling > 0.5) {
                    // return { care: 9, close_up: 0, trust: 0 };
                    return 'care';
                  } else {
                    // Congenital > 1.500
                    if (context.congenital > 1.5) {
                      return 'close_up';
                    } else {
                      // return { care: 14, close_up: 2, trust: 0 };
                      return  'care';
                    }
                  }
                } else {
                  // Visual > 0.500
                  if (context.visual > 0.5) {
                    // Gambling > 0.500
                    if (context.gambling > 0.5) {
                      // return { care: 26, close_up: 0, trust: 0 };
                      return  'care';
                    } else {
                      // return { care: 17, close_up: 2, trust: 1 };
                      return  'care';
                    }
                  } else {
                    // Close up
                    // return { care: 0, close_up: 4, trust: 0 };
                    return 'close_up';
                  }
                }
              } else {
                // Not passing > 1.500
                if (context.not_passing > 1.5) {
                  // Close up
                  // return { care: 0, close_up: 6, trust: 0 };
                  return 'close_up';
                } else {
                  // Grade > 1.500
                  if (context.grade > 1.5) {
                    // Gambling > 0.500
                    if (context.gambling > 0.5) {
                      // return { care: 7, close_up: 0, trust: 0 };
                      return 'care';
                    } else {
                      // Close up
                      // return { care: 9, close_up: 16, trust: 0 };
                      return 'close_up';
                    }
                  } else {
                    // Congenital > 0.500
                    if (context.congenital > 0.5) {
                      // return { care: 9, close_up: 2, trust: 0 };
                      return 'care';
                    } else {
                      // return { care: 4, close_up: 0, trust: 3 };
                      return 'care';
                    }
                  }
                }
              }
            }
          }
        } else {
          // Close up
          // return { care: 0, close_up: 35, trust: 0 };
          return 'close_up';
        }
      } else {
        // Close up
        // return { care: 0, close_up: 72, trust: 0 };
        return 'close_up';
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
                // return { care: 0, close_up: 2, trust: 0 };
                return 'close_up;'
              } else {
                // Congenital > 1.500: care {care=2, close up=0, trust=0}
                if (context.congenital > 1.5) {
                  // return { care: 2, close_up: 0, trust: 0 };
                  return 'care';
                } else {
                  // Not passing > 0.500: care {care=18, close up=0, trust=0}
                  if (context.not_passing > 0.5) {
                    // return { care: 18, close_up: 0, trust: 0 };
                    return 'care';
                  } else {
                    // Grade > 1.500: care {care=2, close up=0, trust=0}
                    if (context.grade > 1.5) {
                      // return { care: 2, close_up: 0, trust: 0 };
                      return 'care';
                    } else {
                      // Trust {care=6, close up=0, trust=21}
                      // return { care: 6, close_up: 0, trust: 21 };
                      return 'trust';
                    }
                  }
                }
              }
            } else {
              // Mood > 1.500: close up {care=0, close up=2, trust=0}
              if (context.mood > 1.5) {
                // return { care: 0, close_up: 2, trust: 0 };
                return 'close_up';
              } else {
                // Visual > 1.500
                if (context.visual > 1.5) {
                  // Reading > 1.500
                  if (context.reading > 1.5) {
                    // Not passing > 0.500: care {care=1, close up=0, trust=0}
                    if (context.not_passing > 0.5) {
                      // return { care: 1, close_up: 0, trust: 0 };
                      return 'care';
                    } else {
                      // Trust {care=0, close up=0, trust=14}
                      // return { care: 0, close_up: 0, trust: 14 };
                      return 'trust';
                    }
                  } else {
                    // Violence > 0.500: care {care=1, close up=0, trust=0}
                    if (context.violence > 0.5) {
                      // return { care: 1, close_up: 0, trust: 0 };
                      return 'care';
                    } else {
                      // Care {care=9, close up=0, trust=9}
                      return 'care';
                    }
                  }
                } else {
                  // Trust {care=0, close up=0, trust=15}
                  return 'trust';
                }
              }
            }
          } else {
              if(context.mood > 1.5){
                  // return {care:0 , close_up:2 , trust:0}
                  return 'close_up'
              } else{
                  if(context.writing >0.5){
                      if(context.Not_passing > 0.5){
                          // return {care:109 , close_up:0 , trust:0}
                          return 'care'
                      } else {
                          if(context.hearing > 1.5){
                              if(context.congenital >1.5){
                                  // return {care:9 ,close_up:3,trust:0}
                                  return 'care'
                              }else{
                                  // return {care:81,close_up:3,trust:68}
                                  return 'care'
                              }
  
                          }else {
                               if(context.reading > 1.5)   {
                                  // return {care:4,close_up:0,trust:70}
                                  return 'trust'
                               }else{
                                  // return {care:36,close_up:2,trust:42}
                                  return 'trust'
                               }
                          }
                      }
  
                  } else {
                      // return {care:0 ,close_up:1 , trust:0}
                      return 'close_up'
                  }
              }
  
  
          }
        } else{
  
          // return {care:0, close_up:13, trust:0}
          return 'close_up'
        }
      }else{
          // return {care:0, close_up:7, trust:0}
          return 'close_up'
      }
    }
  }