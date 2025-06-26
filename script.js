function copyText(id) {
        const text = document.getElementById(id).innerText;
        navigator.clipboard
          .writeText(text)
          .then(() => {
            alert("✅ تم نسخ الكود");
          })
          .catch((err) => {
            alert("❌ فشل النسخ: " + err);
          });
      }

      function runJS() {
        const code = document.getElementById("js-code").innerText;
        try {
          eval(code);
        } catch (e) {
          alert("❌ خطأ في الكود: " + e);
        }
      }

      function runHTML() {
        const code = document.getElementById("html-code").innerText;
        const output = document.getElementById("html-output");
        output.style.display = "block";
        output.innerHTML = code.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
      }