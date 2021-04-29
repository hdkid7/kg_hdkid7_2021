const userArguments = process.argv.slice(2)

const numToWord = {
    0:"Zero",
    1:"One",
    2:"Two",
    3:"Three",
    4:"Four",
    5:"Five",
    6:"Six",
    7:"Seven",
    8:"Eight",
    9:"Nine"
}

const numConverter = num => numToWord[num]

const joinArray = arr => arr.join("")

const splitter = userArguments.map(x => x.split("").map(y => numConverter(parseInt(y))))

const result = splitter.map(joinArray).join(",")

console.log(result)