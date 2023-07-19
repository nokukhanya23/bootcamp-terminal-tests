function isFromBellville(reg){
	return reg.startsWith("CY");
}

console.log(isFromBellville("CY 78"));
export default isFromBellville;