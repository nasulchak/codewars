// ❓ DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
//  Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// ✅ SOLUTION:
function rgb(r, g, b) {
    return `${Math.min(Math.max(r, 0), 255).toString(16).padStart(2, '0')}${Math.min(Math.max(g, 0), 255).toString(16).padStart(2, '0')}${Math.min(Math.max(b, 0), 255).toString(16).padStart(2, '0')}`.toUpperCase();
}

// 🏁 Example usage:
console.log(rgb(255, 255, 2555))
