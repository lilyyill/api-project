<script>
    var now = new Date();
    var hours = now.getHours();
    var psj=0;

    //18-19 night
        if (hours > 17 && hours < 20){
        document.write('<body bgcolor="orange" text="#FFFFFF">')
    }

    //20-21 night
        if (hours > 19 && hours < 22){
        document.write('<body bgcolor="red" text="#FFFFFF">')
    }

    //22-4 night
        if (hours > 21 || hours < 5){
        document.write('<body bgcolor="black" text="#FFFFFF">')
    }

    //9-17 day
        if (hours > 8 && hours < 18){
        document.write('<body bgcolor="blue" text="#FFFFFF">')
    }

    //7-8 day
        if (hours > 6 && hours < 9){
        document.write('<body bgcolor="blue" text="#FFFFFF">')
    }

    //5-6 day
        if (hours > 4 && hours < 7){
        document.write('<body bgcolor="blue" text="#FFFFFF">')
    }

    
//-->
</script>