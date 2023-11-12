document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันฟอร์มจากการ submit ธรรมดา
  
    // เรียกใช้ฟังก์ชัน analyzeData และส่งข้อมูลจากฟอร์มไป
    analyzeData(getFormData());
  });
  
  function getFormData() {
    // ดึงข้อมูลจากฟอร์ม
    const formData = {
      name: document.getElementById("studentName").value,
      classLevel: document.getElementById("classLevel").value,
      major: document.getElementById("major").value,
      enrollmentStatus: document.getElementById("enrollmentStatus").value,
      grade: getRadioValue("grade"),
      attendance: getRadioValue("attendance")
      // เพิ่มข้อมูลอื่น ๆ ตามที่ต้องการ
    };
  
    return formData;
  }
  
  function getRadioValue(name) {
    // ดึงค่าของ radio button ที่ถูกเลือก
    const radioButtons = document.getElementsByName(name);
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        return radioButton.value;
      }
    }
    return null; // หากไม่มี radio button ที่ถูกเลือก
  }
  
  function analyzeData(context) {
    // นำข้อมูลไปใช้งานตามต้องการ เช่น console.log, ส่งไปยังเซิร์ฟเวอร์, ฯลฯ
    console.log("Analyzing data:", context);
    // ทำต่อไปตามลำดับ
  }
  
  