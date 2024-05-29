var dt = new Date();
        var mo=dt.getMonth()+1;
        document.getElementById('date').innerHTML=dt.getDate()+" / "+mo+" / "+dt.getFullYear();
        
        function menuToggle(){
            const togglemenu=document.querySelector('.profile_down');
            togglemenu.classList.toggle('active');
        }