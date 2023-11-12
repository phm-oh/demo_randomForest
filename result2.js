document.addEventListener("DOMContentLoaded", function() {
    // ดึงข้อมูลผลการวิเคราะห์จาก URL
    const resultData = getResultFromURL();
    console.log(resultData)
    // แสดงผลการวิเคราะห์
    displayResult(resultData);
  });
  
  function getResultFromURL() {
    // ดึงข้อมูลผลการวิเคราะห์จาก URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const resultString = urlParams.get("result");
    const resultData = JSON.parse(decodeURIComponent(resultString));
    return resultData;
  }
  
  function displayResult(result) {
    
    document.getElementById("resultName").textContent = result.name;
    document.getElementById("resultClassLevel").textContent = result.classLevel;
    document.getElementById("resultCategory").textContent = result.category;


    // const resultContainer = document.getElementById("resultContainer");
    // resultContainer.innerHTML = `<p>นาย: ${result.name}</p><p>ระดับชั้น: ${result.classLevel}</p><p>ผลการวิเคราะห์: ${result.analysisResult}</p>`;
  }
  