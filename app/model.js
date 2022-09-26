export function changePage(pageID, subPage){
    console.log("sub "+subPage);
    console.log("page "+pageID);

    if(subPage == undefined){
        console.log("hello");
    $.get(`pages/${pageID}/${pageID}.html`, function(data){
        // console.log(data);
        $("#app").html(data);
    }).fail((error) => {
        if(error.status == "404"){
            // alert("Page cannot be found. Please check your url.");
        }
        console.log("error" + error.status);
    });
} else{
    $.get(`pages/${pageID}/${subPage}.html`, function(data){
        // console.log(data);
        $("#app").html(data);
    }).fail((error) => {
        if(error.status == "404"){
            // alert("Page cannot be found. Please check your url.");
        }
        console.log("error" + error.status);
    });
}
}