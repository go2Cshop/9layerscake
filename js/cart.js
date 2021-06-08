$(function(){
	$(".checkall").change(function(){
		$(".j-check").prop("checked",$(this).prop("checked"));
	});
	$('.j-check').change(function(){
		if( $('.j-check:checked'.length==$('.j-check').length){
			$('.checkall').prop('checked',true);
		}else{
			$('.checkall').prop('checked',false);
			}
	});
	$(".inc").click(function(){
		
	});
});