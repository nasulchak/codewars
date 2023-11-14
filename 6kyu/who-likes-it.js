// ❓ DESCRIPTION:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// ✅ SOLUTION:
function likes(names) {

    switch (names.length) {
        case 0:
            return "no one likes this"
        case 1:
            return `${names[0]} likes this`
        case 2:
            return `${names[0]} and ${names[1]} like this`
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }

}

// 🏁 Example usage:
console.log(likes(["Alex", "Jacob", "Mark", "Max"]))