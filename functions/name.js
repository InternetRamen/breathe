module.exports = function name(obj) {
  let final = ""
  for (const [key, value] of Object.entries(obj)) {
    if (value == "") continue;
    if (key == "county") continue;
    if (key == "country") {
      final += value
    } else {
      final += value + ", "
    }
    
  }
  return final.trim()
}