export default function isValid(text: string): boolean {
	if (typeof text.length === 'undefined') 
		throw new Error('No length found');
		
	return text.length > 0;
}
