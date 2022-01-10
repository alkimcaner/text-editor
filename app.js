const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
      URL.revokeObjectURL(a.href);
  };

function openFile(fileInput) {
    let textField = document.querySelector("#textfield");
    let file = fileInput.files[0].text();
    fileInput.value = "";
    file.then(data => {
        textField.value = data;
    });
}

function saveFile() {
    let textField = document.querySelector("#textfield");
    let filename = document.querySelector("#filename").value || "newfile";
    filename += ".txt";

    downloadToFile(textField.value, filename, "text/plain");
}