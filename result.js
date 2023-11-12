



const sampleData = {
    name: "John Doe",
    classLevel: "ประถมศึกษาปีที่ 6",
    category: "ผลการเรียนดี"
  };
  
 
  document.getElementById("resultName").textContent = sampleData.name;
  document.getElementById("resultClassLevel").textContent = sampleData.classLevel;
  document.getElementById("resultCategory").textContent = sampleData.category;


  const resultModule = {
    displayResult: (data) => {
      document.getElementById("resultName").textContent = data.name;
      document.getElementById("resultClassLevel").textContent = data.classLevel;
      document.getElementById("resultCategory").textContent = data.category;
    }
  };
  
  
  export default resultModule;