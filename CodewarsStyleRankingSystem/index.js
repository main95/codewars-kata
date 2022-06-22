/*
  KATA LINK: https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript
*/

class User {
  constructor() {
    this.rank = -8
    this.progress = 0
  }

  calculateRank() {
    this.rank = this.rank + parseInt(this.progress / 100)
    if (this.rank === 0) {
      this.rank = this.rank + 1
    }
    this.progress = this.progress % 100
    if (this.rank === 8) {
      this.progress = 0
    }
  }

  incProgress(taskRank) {
    if (taskRank === 0 || taskRank > 8 || taskRank < -8) {
      throw new Error('!!!!!!')
    }
    if (taskRank === this.rank) {
      this.progress = this.progress + 3
      this.calculateRank()
    } else if (this.rank > 0 && taskRank < 0 ? taskRank + 2 === this.rank : taskRank + 1 === this.rank) {
      this.progress = this.progress + 1
      this.calculateRank()
    } else if (taskRank > this.rank) {
      let d = taskRank - this.rank
      if (this.rank < 0 && taskRank > 0) {
        d = d - 1
      }
      this.progress = this.progress + (10 * d * d)
      this.calculateRank()
    }
  }
}

//tests
const user = new User()
console.log(user.rank)
console.log(user.progress)
user.incProgress(-7)
console.log(user.rank)
console.log(user.progress)
user.incProgress(-5)
console.log(user.rank)
console.log(user.progress)