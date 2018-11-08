import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;


@Component({
selector: 'cat-page',
templateUrl: './products-categories.html'
})

export class ProductCategories implements OnInit {
ngOnInit() {

$(function () {

// Datatables
$('#example1').DataTable({
"lengthMenu": [[50, 100, 200, -1], [50, 100, 200, "All"]],
responsive:  true,
columnDefs: [ 
{ responsivePriority: 1, targets: 0 },
{ responsivePriority: 2, orderable:false, targets: -1 }],
"autoWidth": false
});
// Select the main list and add the class "hasSubmenu" in each LI that contains an UL
$('#product_categorylst ul').each(function(){
$(this).find("li").has("ul").addClass("hasSubmenu");
});
// Find the last li in each level
$('#product_categorylst  li:last-child').each(function(){
// Check if LI has children
if ($(this).children('ul').length === 0){
// Add border-left in every UL where the last LI has not children
$(this).closest('ul').css("border-left", "1px solid gray");
} else {
// Add border in child LI, except in the last one
$(this).closest('ul').children("li").not(":last").css("border-left","1px solid gray");
// Add the class "addBorderBefore" to create the pseudo-element :defore in the last li
$(this).closest('ul').children("li").last().children("a").addClass("addBorderBefore");
// Add margin in the first level of the list
$(this).closest('ul').css("margin-top","20px");
// Add margin in other levels of the list
$(this).closest('ul').find("li").children("ul").css("margin-top","20px");
};
});
// Add bold in li and levels above
$('#product_categorylst  ul li').each(function(){
$(this).mouseenter(function(){
$( this ).children("a").css({"font-weight":"bold","color":"#336b9b"});
});
$(this).mouseleave(function(){
$( this ).children("a").css({"font-weight":"normal","color":"#428bca"});
});
});
// Add button to expand and condense - Using FontAwesome
$('#product_categorylst  ul li.hasSubmenu').each(function(){
$(this).prepend("<a href='#'><i class='fa fa-minus-circle'></i><i style='display:none;' class='fa fa-plus-circle'></i></a>");
$(this).children("a").not(":last").removeClass().addClass("toogle");
});
// Actions to expand and consense
$('#product_categorylst  ul li.hasSubmenu a.toogle').click(function(){
$(this).closest("li").children("ul").toggle("slow");
$(this).children("i").toggle();
return false;
});
})

}
}

