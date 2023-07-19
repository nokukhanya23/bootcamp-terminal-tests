function yearsAgo(year){
	return new Date().getFullYear() - year;
}

console.log(yearsAgo(1998));
export default yearsAgo;