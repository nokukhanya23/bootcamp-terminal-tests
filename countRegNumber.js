function countRegNumber(reg){
	const splitter =  reg.split(",");
  console.log(splitter);
  	const count = splitter.length;
  	return (splitter, count)
}

console.log(countRegNumber('Tswelopele, Mojewa, is, the, best, no, cap'));
export default countRegNumber;

