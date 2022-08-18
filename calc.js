<script>
    function add() {
        document.getElementById("res").value=parseInt(document.getElementById("fn").value)
        +parseInt(document.getElementById("sn").value)
       
    }
    function sub(){
         document.getElementById("res").value=parseInt(document.getElementById("fn").value)
         -parseInt(document.getElementById("sn").value)

    }
    function mul(){
         document.getElementById("res").value=parseInt(document.getElementById("fn").value)
         *parseInt(document.getElementById("sn").value)
    }
    function div(){
        document.getElementById("res").value=parseInt(document.getElementById("fn").value)
        /parseInt(document.getElementById("sn").value)
    }
</script>