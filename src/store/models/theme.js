
interface Theme {
	primary:String;
	mode:'auto'|'light'|'dark';
}

export default (
	{
		"theme": localStorage.getObject('--theme') || "red",
		"mode": localStorage.getObject('--mode') || "auto"
	} : Theme);
