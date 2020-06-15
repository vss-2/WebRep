document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

function darker() {
    if (sessionStorage.getItem('bg') === 'rgb(250, 250, 250)') {
	
	    sessionStorage.setItem('bg', 'rgb(89, 60, 110)');
	    sessionStorage.setItem('cc', '#FFFFFF');
	    
    }
    else if (sessionStorage.getItem('bg') == null || undefined) {
	    sessionStorage.setItem('bg', 'rgb(66, 66, 80)');
	    sessionStorage.setItem('cc', '#FFFFFF');
	
    }
    else if( sessionStorage.getItem('bg') === 'rgb(89, 60, 110)') {
	
	    sessionStorage.setItem('bg', 'rgb(250, 250, 250)');
	    sessionStorage.setItem('cc', '#732AEA');
    }
    document.body.style.backgroundColor = sessionStorage.getItem('bg');
    document.body.style.color = sessionStorage.getItem('cc');
};
function sintonizar(name){
	ttchanel = 'https://player.twitch.tv/?channel='
	if(name == 'bt_stream1'){
		console.log(document.getElementById('in_stream1').value)
		document.getElementById('player1').src = ttchanel.concat( (document.getElementById('in_stream1').value).concat('&parent=www.cin.ufpe.br/~vss2/') );
	} else if(name == 'in_stream2'){
		document.getElementById('player2').src = ttchanel.concat(document.getElementById('in_stream2').value.concat('&parent=www.cin.ufpe.br/~vss2/'));
	} else {
		document.getElementById('player3').src = ttchanel.concat(document.getElementById('in_stream3').value.concat('&parent=www.cin.ufpe.br/~vss2/'));
	}
};
