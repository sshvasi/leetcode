const isIsomorphic = (s, t) => {
  return transform(s) === transform(t)
}

const transform = (s) => {
  let res = []

  const map = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (!(char in map)) {
      map[char] = i
    }

    res[i] =  String(map[char])
  }

  return res.join(" ")
}

console.log(isIsomorphic("foo", "bar"))
