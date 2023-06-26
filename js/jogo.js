walkw = 0;
walkx = 0;
walky = 0;
walkz = 0;

$("#btnbaixo").click(down);
$("#btndireita").click(right);
$("#btncima").click(up);
$("#btnesquerda").click(left);


    function down() {
        walkw +=20;
        $("#bonefrente").animate({ top: walkw + "px" }, { duration: 200 });
    }

    function right() {
        walkx +=20;
        $("#bonefrente").animate({ left: walkx + "px" }, { duration: 200 });
        
    }

    function up() {
        walky +=20;
        $("#bonefrente").animate({ top: walky + "px" }, { duration: 200 });
    }

    function left() {
        walkz +=20;
        $("#bonefrente").animate({ left: walkz + "px" }, { duration: 200 });
    }