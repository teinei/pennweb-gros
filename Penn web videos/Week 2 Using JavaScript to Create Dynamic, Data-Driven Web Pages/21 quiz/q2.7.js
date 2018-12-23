var elems = document.getElementsByClassName('one');
for(var i=0;i<elems.length;i++){
    elems[i].addEventsListener('mouseover',
        function(){
            var all = document.getElementsByClassName('two');
            for(var j=0;j<all.length;j++){
                all[j].style.color='red';
            };
        }
    );
} 