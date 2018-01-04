function setCheckbox(){
    var els = new Array( document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3"), document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6"), document.getElementById("p7") );
                
    var ids1 = new Array( document.getElementById("hContainer1"), document.getElementById("hHero1"), document.getElementById("hTop1"), document.getElementById("hMiddle1"), document.getElementById("hFooter1"), document.getElementById("hSubfooter1"), document.getElementById("hAppbanner1") );
    var ids2 = new Array( document.getElementById("hContainer2"), document.getElementById("hHero2"), document.getElementById("hTop2"), document.getElementById("hMiddle2"), document.getElementById("hFooter2"), document.getElementById("hSubfooter2"), document.getElementById("hAppbanner2") );
    var ids3 = new Array( document.getElementById("search"), document.getElementById("sAppbanner") );
    var ids4 = new Array( document.getElementById("restaurant"), document.getElementById("restAppbanner") );
    var ids5 = new Array( document.getElementById("oContainer"), document.getElementById("oTop"), document.getElementById("oFooter"), document.getElementById("oReceipt"), document.getElementById("oAppbanner") );
    var ids6 = new Array( document.getElementById("rFooter"), document.getElementById("rContainer"), document.getElementById("rTop"), document.getElementById("rTFooter"), document.getElementById("rReceipt"), document.getElementById("rAppbanner") );
    var ids7 = new Array( document.getElementById("tContainer"), document.getElementById("tTop"), document.getElementById("tFooter"), document.getElementById("tReceipt"), document.getElementById("tAppbanner") );

    if (els[0].checked)
        for (j = 0; j < ids1.length; j++) {
            ids1[j].disabled = false;
        }
    else
        for (j = 0; j < ids1.length; j++) {
            ids1[j].disabled = true;
        }
    
    if (els[1].checked)
        for (j = 0; j < ids2.length; j++) {
            ids2[j].disabled = false;
        }
    else
        for (j = 0; j < ids2.length; j++) {
            ids2[j].disabled = true;
        }

    if (els[2].checked)
        for (j = 0; j < ids3.length; j++) {
            ids3[j].disabled = false;
        }
    else
        for (j = 0; j < ids3.length; j++) {
            ids3[j].disabled = true;
        }

    if (els[3].checked)
        for (j = 0; j < ids4.length; j++) {
            ids4[j].disabled = false;
        }
    else
        for (j = 0; j < ids4.length; j++) {
            ids4[j].disabled = true;
        }

    if (els[4].checked)
        for (j = 0; j < ids5.length; j++) {
            ids5[j].disabled = false;
        }
    else
        for (j = 0; j < ids5.length; j++) {
            ids5[j].disabled = true;
        }

    if (els[5].checked)
        for (j = 0; j < ids6.length; j++) {
            ids6[j].disabled = false;
        }
    else
        for (j = 0; j < ids6.length; j++) {
            ids6[j].disabled = true;
        }

    if (els[6].checked)
        for (j = 0; j < ids7.length; j++) {
            ids7[j].disabled = false;
        }
    else
        for (j = 0; j < ids7.length; j++) {
            ids7[j].disabled = true;
        }
}