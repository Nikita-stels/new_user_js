var progress    = document.getElementById("progress"),
    uploaded    = document.getElementById("uploaded"),
    result      = document.getElementById("result"),
    maxFileSize = 30000;

document.getElementById("form").onsubmit = function(e) {
    e.preventDefault();
    var input = this.elements.userfile;
    var file = input.files[0];
    alert("Нажата кнопка");
    // проверка на размер файла
    if (file.size >= maxFileSize) {
        result.innerHTML = 'Слишком большой размер файла';
        return false;
    }
    
    if (file) {
        upload(file);
    }
}


function upload(file) {
    var ajax = new XMLHttpRequest();
    ajax.upload.onprogress = function(event) {
        uploaded.innerHTML = 'Загружено ' + event.loaded + ' из ' + event.total;
        progress.setAttribute('max', event.total);
        progress.value = event.loaded;
    }

    ajax.onload = ajax.onerror = function() {
        if (this.status == 200) {
            result.innerHTML = 'Файл успешно загружен';
        } else {
            result.innerHTML = 'Не удалось загрузить файл';
        }
    }

    var formData = new FormData();
    formData.append("userfile", file);
    alert("Мы пришли");
    ajax.open("POST", "http://192.168.0.102/upload", true);
    ajax.send(formData);
}