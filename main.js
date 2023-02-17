function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_2bGvwfXk/
    ', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
            document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + "%";
    
            img = document.getElementById('catgif');
            img1 = document.getElementById('cowgif');
            img2 = document.getElementById('doggif');
    
            if (results[0].label == "Clap") {
                img.src = 'catgif.gif';
                img1.src = 'cowgif.png';
                img2.src = 'doggif.png';
            }
            else if (results[0].label == "Snapping") {
                img.src = 'catgif.png';
                img1.src = 'cowgif.gif';
                img2.src = 'doggif.png';    
            }
            else if (results[0].label == "Bell") {
                img.src = 'catgif.png';
                img1.src = 'cowgif.png';
                img2.src = 'doggif.png';
            }
        
        }
    }
    
    
    
    