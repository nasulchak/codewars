// ❓ DESCRIPTION:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// ✅ SOLUTION:
const domainName = url => url.match(/(?:https?:\/\/)?(?:www\.)?(.*?)\./)[1]

// 🏁 Example usage:
console.log(domainName('http://github.com/carbonfive/raygun'))