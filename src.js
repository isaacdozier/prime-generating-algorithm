var title = "Generate <br />Prime #'s"
var prs = []

//percentage math
//Math.floor((i/limit())*10)

function load(){
	prs = []
	document.getElementById('output').innerHTML = ''
	document.getElementById('title').innerHTML = title
}


function generate_prime_numbers(){
	
	load()
	
	
	var p = prs.length
	for(var i = limit('a'); i < limit('b'); i++){
		var t = i.toString().split('')
		if(exclude(t.indexOf(t.length-1)))
			break
		for(var d = 2; d < i; d++){
			if((i/d)*1000 === Math.ceil(i/d)*1000)
				break
			if(d === i-1)
				prs.push(i)
		}
	}
	
	if(limit('a') < 3 )
		prs.unshift(2)
		
	document.getElementById('output').innerHTML = prs.join(', ')
}

function exclude(n){
	var dgt = [2,4,5,6,8]
	for(var i = 0; i < dgt.length; i++){
		return Number(n) === dgt[i]
	}
}

function limit(r){
	return Number(document.getElementById('input_' + r).innerHTML)
}