function setCheckbox(){
    var els = new Array( document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3"), document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6"), document.getElementById("p7") );
                
    var ids1 = new Array( document.getElementById("hContainer1"), document.getElementById("hHero1"), document.getElementById("hTop1"), document.getElementById("hMiddle1"), document.getElementById("hFooter1"), document.getElementById("hSubfooter1"), document.getElementById("hAppbanner1") );
    var ids2 = new Array( document.getElementById("hContainer2"), document.getElementById("hHero2"), document.getElementById("hTop2"), document.getElementById("hMiddle2"), document.getElementById("hFooter2"), document.getElementById("hSubfooter2"), document.getElementById("hAppbanner2") );
    var ids3 = new Array( document.getElementById("search"), document.getElementById("sAppbanner") );
    var ids4 = new Array( document.getElementById("restaurant"), document.getElementById("restAppbanner") );
    var ids5 = new Array( document.getElementById("oContainer"), document.getElementById("oTop"), document.getElementById("oFooter"), document.getElementById("oReceipt"), document.getElementById("oAppbanner") );
    var ids6 = new Array( document.getElementById("rFooter"), document.getElementById("rContainer"), document.getElementById("rTop"), document.getElementById("rTFooter"), document.getElementById("rReceipt"), document.getElementById("rAppbanner") );
    var ids7 = new Array( document.getElementById("tContainer"), document.getElementById("tTop"), document.getElementById("tFooter"), document.getElementById("tReceipt"), document.getElementById("tAppbanner") );

    var ids = new Array( ids1, ids2, ids3, ids4, ids5, ids6, ids7 );

    for (i = 0; i < els.length; i++) {
        if (els[i].checked) 
            for (j = 0; j < ids[i].length; j++) {
                ids[i][j].disabled = false;
            }
        else
            for (j = 0; j < ids[i].length; j++) {
                ids[i][j].disabled = true;
            }
    }
}