let isX = true;
let isGO = false;
let iter = 0;
const cells = [[".cell1", ".cell2", ".cell3"], [".cell4", ".cell5", ".cell6"], [".cell7", ".cell8", ".cell9"]]

function getImage(cell) {
    return $(cell).children("img").attr("src")
}

$(".cell").click(function(){
    if (isGO) {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                $(cells[i][j]).children("img").attr("src", "");
            }
        }
        isGO = !isGO;
        isX = true;
        $("h1").text("Good luck");
    } else {
        if (!$(this).children("img").attr("src")) {
            $(this).children("img").attr("src", function(){
                return isX ? "pictures/image_part_002.png" : "pictures/image_part_001.png"
            })
            isX = !isX;
        }
        
        for (const cell in cells) {
            if(getImage(cells[cell][0]) === getImage(cells[cell][1]) && 
            getImage(cells[cell][1]) === getImage(cells[cell][2]) && 
            getImage(cells[cell][0]) != 0 ||
            getImage(cells[0][cell]) === getImage(cells[1][cell]) && 
            getImage(cells[1][cell]) === getImage(cells[2][cell]) && 
            getImage(cells[0][cell]) != 0) {
                $("h1").text(function(){ return !isX ? "X won" : "O won" });
                isGO = !isGO;
            }
        }

        if (getImage(cells[0][0]) === getImage(cells[1][1]) && getImage(cells[1][1]) === getImage(cells[2][2]) && getImage(cells[1][1]) != 0 ||
        getImage(cells[0][2]) === getImage(cells[1][1]) && getImage(cells[1][1]) === getImage(cells[2][0]) && getImage(cells[1][1]) != 0) {
            $("h1").text(function(){ return !isX ? "X won" : "O won" });
            isGO = !isGO;
        }

        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if ($(cells[i][j]).children("img").attr("src") == 0){
                    iter += 1; 
                }
            }
        }

        if (iter == 0 && isGO == false) {
            $("h1").text("Everyone lost");
            isGO = !isGO;
        }
        
        iter = 0;
    }
})