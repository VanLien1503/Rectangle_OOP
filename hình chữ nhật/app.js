function Rectangle(length, width) {
        this.length = length;
        this.width = width;
        this.getArea = function () {
                return length * width;
        };
        this.getPerimeter = function () {
                return (length + width) * 2;
        };
}

function random() {
        return Math.floor(Math.random() * 200) + 50;
}

function result() {
        let width = random()+50;
        let height = random();

        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0, 0, width, height);


        let hcn = new Rectangle(width, height);
        document.getElementById("result").innerHTML='Chiều Dài: '+width+'<br>'+
            'Chiều Rộng: '+height+'<br>'+
            'Diện tích: ' + hcn.getArea() +'<br>'
            +'Chu vi: ' + hcn.getPerimeter();
}
