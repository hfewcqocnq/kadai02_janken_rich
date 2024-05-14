
// 題名の取得
var nameText = document.getElementById('nameText');
nameText.value = '迷っていることを入力してください';
var msg = document.getElementById('msg');

// 選択肢の取得・表示・配列化
var namelist = [];
	  function addName(){
	    var input = document.getElementById("text_name");
		var output = document.getElementById("output");
		namelist.push(input.value);// 配列に要素を追加
		output.innerHTML = "";
		
		// 配列の要素を先頭から順番にすべて出力
		var i = 0;
		while(i < namelist.length){
		   output.innerHTML += namelist[i] + "<br>";
		   i = i + 1;
		};
		console.log(namelist.length)
	  };

// ボタンをクリックしたら
// var checkButton = document.getElementById('checkButton');
// checkButton.addEventListener('click', butotnClick);

// クリック後●●についてですが…　と表示
// function butotnClick(){

$("#checkButton").on('click', function(){
  msg.innerText = nameText.value + 'についてですが…';

// クリック後ランダムに配列から要素番号を取得、●●の方がよいと思います　と表示
  var getname = namelist[Math.floor(Math.random() * namelist.length)];

  //取得したお題を書き出す
  document.getElementById("button_output").innerText = getname + 'の方がよいと思います';

	// // var namelistIndex = $('getname').index(this);

	// var namelistIndex = arr.find(function(getname) {
	// 	if(getname === getname){
	// 		console.log(namelistIndex + 'が選ばれました');
	// 	}else if(getname !== getname){
	// 		console.log(namelistIndex + '選ばれませんでした');
	// 	}
	// });

});