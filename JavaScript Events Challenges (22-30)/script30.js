(function(){
        const bod = document.querySelector('body');
        window.addEventListener('keydown', function(event){
            let pos = event.which;
            switch(pos){
                case 66:
                    bod.className="one";
                    break;
                case 86:
                    bod.className="two";
                    break;
                case 67:
                    bod.className="three";
                    break;
                case 70:
                    bod.className="four";
                    break;
                case 71:
                    bod.className="five";
                    break;
                default:
                    bod.className="body";
            }
        });
})();