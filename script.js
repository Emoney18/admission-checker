const sname = document.getElementById('surname')
const fname = document.getElementById('firstname')
const stat = document.getElementById('state')
const utme = document.getElementById('utme')
const putme = document.getElementById('putme')
const sitting = document.getElementById('sittings')
const olevel = document.querySelectorAll('form .grades')
const select1 = document.getElementById('select1')
const select2 = document.getElementById('select2')
const select3 = document.getElementById('select3')
const select4 = document.getElementById('select4')
const select5 = document.getElementById('select5')

function details(sname, fname, sittings, utme, putme, olevel, state) {
  this.name = name
  this.utme = utme
  this.putme = putme
  this.noOfSittigs = sittings
  this.state = state
  this.olevel = olevel
  this.olevelScores = olevel.map(function (grade) {
    if (grade === 'A1') {
      return 10
    }
    if (grade === 'B2') {
      return 9
    }
    if (grade === 'B3') {
      return 8
    }
    if (grade === 'C4') {
      return 7
    }
    if (grade === 'C5') {
      return 6
    }
    if (grade === 'C6') {
      return 5
    }
    if (grade === 'D7') {
      return 4
    }
    if (grade === 'E8') {
      return 3
    }
    if (grade === 'F9') {
      return 0
    }
  })
  this.gradeScore =
    (this.olevelScores.reduce(function (a, b) {
      return a + b
    }) /
      50) *
    30
  this.totalscore = this.utme / 8 + this.putme + this.gradeScore
  this.isAllCredits = this.olevelScores.every(function (score) {
    return score >= 5
  })

  this.verify = function () {
    if (this.utme < 180) {
      window.alert('you failed!')
      return
    }
    if (this.putme < 12) {
      window.alert('you didnt meet the cuttoff mark')
      return
    }
    if (this.noOfSittigs !== 1) {
      console.log('failed!!!')
    //   window.alert('you are requred to submit only one sitting')
      return
    }
    if (this.isAllCredits == false) {
      window.alert('you are requred to have at least c6 in all subjects')
      return
    }
    if (this.totalscore >= 80 && this.totalscore <= 100) {
      window.alert('congratulations, you have gained admission by merit')
      return
    }
    if (this.totalscore >= 75 && this.totalscore <= 79) {
      window.alert('congratulations, you have gained admission by consensure')
      return
    }
    if (this.totalscore >= 65 && this.totalscore <= 74) {
      window.alert('congratulations, you have gain admission by VC list')
    } else {
      window.alert('please input your details')
    }
  }
}

function checkAmission() {
  let array = []
  for (grade of olevel) {
    array.push(grade.value)
  }
  let candidate = new details(
    sname.value,
    fname.value,
    parseInt(sittings.value),
    parseInt(utme.value),
    parseInt(putme.value),
    array
  )
  console.log(candidate)
  candidate.verify()
}
