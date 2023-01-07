// const fs = require('fs')
// const path = require('path')

// let total = 0

// // class Directory
// class Node {
//   constructor ({ children = {}, name, size, type, parent }) {
//     this.children = children
//     this.name = name
//     this.size = size
//     this.type = type
//     this.parent = parent
//   }

//   findSize () {
//     if (Object.keys(this.children).length === 0) return this.size
    
//     const childrenSize = Object.keys(this.children).reduce((total, key) => total + this.children[key].findSize, 0)
//     this.size = childrenSize
//     total += childrenSize <= 100000 ? childrenSize : 0
//     return childrenSize
//   }
// }

// exports = module.exports = (file, findFirstMessageMarker = false) => {
//   const input = fs.readFileSync(path.resolve(__dirname, `./${file}`), 'utf-8')
//     .split('\n')
//     .map(el => el.replace('\r', ''))

//     let root = { '/': new Node({name: '/', type: 'dir' })}
//     let head = root['/']

//     input.map(line => {

//       if (line.charAt(0) === '$') {
//         switch (line) {
//           case '$ cd ..':
//             head = head.parent
//           case '$ ls':
//             break
//           default:
//             head = head.children[line.split(' ')[2]]
//         }
//       } else {
//         console.log(root)
//         // looping through the files
//         const [dirOrSize, name] = line.split(' ')

//         if (dirOrSize === 'dir') head.children[name] = new Node({ parent: head, name, type: dirOrSize})

//         if ([...size].some(v => '1234567890'.includes(v))) {
//           head.children[arr[1]] = new Node({ parent: head, name, type: 'file', size: parseInt(dirOrSize)})
//         }
//       }
//     })
//     return root['/'].findSize()
// }
