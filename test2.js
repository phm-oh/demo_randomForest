import message from "./predict";


window.addEventListener("DOMContentLoaded" , (event)=> {
    const fm =   document.getElementById("studentForm");
    if(fm) {
        fm.addEventListener("submit",(event) => {
    
            console.log("object")
            // event.preventDefault();
            // const formData = getFormData();
            // analyzeData(formData);
          })
    }
    
})


// document.getElementById("studentForm").addEventListener("submit", (event) => {
    
//     console.log("object")
//     // event.preventDefault();
//     // const formData = getFormData();
//     // analyzeData(formData);
//   });
  
  function getFormData() {
    const formData = {
      name: getValue("studentName"),
      classLevel: getValue("classLevel"),
      major: getValue("major"),
      enrollmentStatus: getValue("enrollmentStatus"),
      grade: getRadioValue("grade"),
      attendance: getRadioValue("attendance"),
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
    console.log("Analyzing data:", context);
    
    // ทำต่อไปตามลำดับ
  }
  